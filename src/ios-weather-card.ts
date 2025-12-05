import type { PropertyValues } from "lit";
import { LitElement, html, nothing } from "lit";
import { state } from "lit/decorators.js";
import { classMap } from "lit/directives/class-map.js";
import type { ForecastEvent, WeatherEntity, ForecastAttribute } from "./weather";
import { subscribeForecast, getWeatherStateIcon } from "./weather";
import type { HomeAssistant } from "custom-card-helpers";
import { IosWeatherCardConfig, LovelaceGridOptions, ThemeMode } from "./types";
import { styles } from "./ios-weather-card.styles";
import "./components/hourly-forecast";
import "./components/daily-forecast";

type ForecastType = "hourly" | "daily";
type SubscriptionMap = Record<ForecastType, Promise<() => void> | undefined>;

type ExtendedHomeAssistant = HomeAssistant & {
  formatEntityState?: (stateObj: any) => string | undefined;
  formatEntityAttributeValue?: (stateObj: any, attribute: string) => unknown;
};

export class IosWeatherCard extends LitElement {
  @state() private _config!: IosWeatherCardConfig;
  @state() private _entity!: string;
  @state() private _name!: string;
  @state() private _state?: WeatherEntity;
  @state() private _status?: string;
  @state() private _forecastDailyEvent?: ForecastEvent;
  @state() private _forecastHourlyEvent?: ForecastEvent;

  private _subscriptions: SubscriptionMap = { hourly: undefined, daily: undefined };
  private _hass?: ExtendedHomeAssistant;

  setConfig(config: IosWeatherCardConfig) {
    const defaults: IosWeatherCardConfig = {
      type: "custom:ios-weather-card",
      ...config,
      theme: config.theme ?? "auto",
      show_location: config.show_location ?? true,
      show_current_temp: config.show_current_temp ?? true,
      show_alert: config.show_alert ?? true,
      hourly_forecast: config.hourly_forecast ?? true,
      daily_forecast: config.daily_forecast ?? true,
      num_hourly: config.num_hourly ?? 6,
      num_daily: config.num_daily ?? 5,
    };

    this._config = defaults;
    this._entity = defaults.entity;

    if (this._hass) {
      this.hass = this._hass;
    }
  }

  set hass(hass: HomeAssistant) {
    this._hass = hass;
    this._state = hass.states[this._entity] as WeatherEntity;

    if (this._state) {
      this._status = this._state.state;
      const fn = this._state.attributes.friendly_name;
      this._name = this._config?.name || (fn ? fn : this._entity);
    }
  }

  public getGridOptions(): LovelaceGridOptions {
    return {
      columns: 12,
      rows: 6,
      min_columns: 6,
      min_rows: 4,
    };
  }

  static styles = styles;

  static getConfigElement() {
    return document.createElement("ios-weather-card-editor");
  }

  static getStubConfig(hass: HomeAssistant): IosWeatherCardConfig {
    const weatherEntity = Object.keys(hass?.states ?? {}).find(entityId =>
      entityId.startsWith("weather.")
    );
    return {
      type: "custom:ios-weather-card",
      entity: weatherEntity ?? "weather.home",
      theme: "auto",
      show_location: true,
      show_current_temp: true,
      show_alert: true,
      hourly_forecast: true,
      daily_forecast: true,
      num_hourly: 6,
      num_daily: 5,
    };
  }

  private _unsubscribeForecastEvents() {
    (Object.values(this._subscriptions) as Promise<() => void>[]).forEach(sub => {
      sub?.then(unsub => unsub());
    });
    this._subscriptions = { hourly: undefined, daily: undefined };
  }

  private async _subscribeForecast(type: ForecastType) {
    if (this._subscriptions[type]) return;

    this._subscriptions[type] = subscribeForecast(
      this._hass!,
      this._entity,
      type,
      (event) => {
        if (type === "hourly") this._forecastHourlyEvent = event;
        if (type === "daily") this._forecastDailyEvent = event;
      }
    ).catch(e => {
      this._subscriptions[type] = undefined;
      throw e;
    });
  }

  private async _subscribeForecastEvents() {
    this._unsubscribeForecastEvents();

    const shouldSubscribe =
      this.isConnected &&
      this._hass &&
      this._config &&
      this._hass.config.components.includes("weather") &&
      this._state;

    if (!shouldSubscribe) return;

    if (this._config.hourly_forecast) {
      this._subscribeForecast("hourly");
    }
    if (this._config.daily_forecast) {
      this._subscribeForecast("daily");
    }
  }

  connectedCallback() {
    super.connectedCallback();
    if (this.hasUpdated && this._config && this._hass) {
      this._subscribeForecastEvents();
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this._unsubscribeForecastEvents();
  }

  updated(changedProps: PropertyValues) {
    super.updated(changedProps);

    if (!this._config || !this._hass) {
      return;
    }

    // Update theme class on every update to react to HA theme changes
    this._updateThemeClass();

    if (changedProps.has("_config") || (!this._subscriptions.hourly && !this._subscriptions.daily)) {
      this._subscribeForecastEvents();
    }
  }

  render() {
    if (!this._config || !this._hass) return nothing;

    if (!this._state) {
      return html`
        <hui-warning>
          ${this._name} not found.
        </hui-warning>
      `;
    }

    if (this._status === "unavailable") {
      return html`
        <ha-card class="unavailable">
          <p>${this._name} is unavailable.</p>
        </ha-card>
      `;
    }

    const showLocation = this._config.show_location !== false;
    const showCurrentTemp = this._config.show_current_temp !== false;
    const showAlert = this._config.show_alert !== false;
    const hourlyEnabled = this._config.hourly_forecast !== false;
    const dailyEnabled = this._config.daily_forecast !== false;
    const hourlyForecast = this._forecastHourlyEvent?.forecast ?? [];
    const dailyForecast = this._forecastDailyEvent?.forecast ?? [];

    return html`
      <ha-card>
        <div class="card-content">
          <!-- Header Section -->
          <div class="header">
            ${showLocation ? html`
              <div class="location">
                <span class="location-name">${this._name}</span>
                <ha-icon icon="mdi:map-marker"></ha-icon>
              </div>
            ` : nothing}

            ${showCurrentTemp ? html`
              <div class="current-weather">
                <div class="temp-large">${this._formatTemperature(this._state.attributes.temperature)}</div>
                <div class="condition-row">
                  <span class="condition-icon">${this._getConditionIcon()}</span>
                  <span class="condition-text">${this._formatCondition()}</span>
                </div>
                <div class="high-low">
                  H:${this._formatTemperature(this._getHighTemp())}
                  L:${this._formatTemperature(this._getLowTemp())}
                </div>
              </div>
            ` : nothing}
          </div>

          <!-- Alert Section -->
          ${showAlert ? html`
            <div class="alert-section ${showCurrentTemp ? '' : 'no-top-border'}">
              <ha-icon icon="mdi:umbrella"></ha-icon>
              <span>${this._getAlertText()}</span>
            </div>
          ` : nothing}

          <!-- Hourly Forecast -->
          ${hourlyEnabled && hourlyForecast.length > 0 ? html`
            <ios-hourly-forecast
              .hass=${this._hass}
              .forecast=${hourlyForecast.slice(0, this._config.num_hourly || 6)}
              .state=${this._state}
            ></ios-hourly-forecast>
          ` : nothing}

          <!-- Daily Forecast -->
          ${dailyEnabled && dailyForecast.length > 0 ? html`
            <div class="section-divider"></div>
            <ios-daily-forecast
              .hass=${this._hass}
              .forecast=${dailyForecast.slice(0, this._config.num_daily || 5)}
              .state=${this._state}
            ></ios-daily-forecast>
          ` : nothing}
        </div>
      </ha-card>
    `;
  }

  private _formatTemperature(temp: number | undefined): string {
    if (temp === undefined || temp === null) return "--";
    return `${Math.round(temp)}°`;
  }

  private _formatCondition(): string {
    if (!this._state) return "";
    const condition = this._state.state;
    if (!condition) return "";

    // Try HA localization
    const localized = this._hass?.localize?.(`component.weather.entity_component._.state.${condition}`);
    if (localized) return localized;

    // Fallback: capitalize
    return condition
      .replace(/[-_]/g, " ")
      .replace(/\b\w/g, (char) => char.toUpperCase());
  }

  private _getConditionIcon() {
    if (!this._state) return nothing;
    return getWeatherStateIcon(this._state.state, this, this._isNightTime());
  }

  private _isNightTime(): boolean {
    const isDaytime = this._state?.attributes?.is_daytime;
    if (typeof isDaytime === "boolean") return !isDaytime;

    const hour = new Date().getHours();
    return hour < 6 || hour >= 20;
  }

  private _resolveTheme(): 'light' | 'dark' {
    const configTheme = this._config?.theme ?? 'auto';

    if (configTheme === 'light') return 'light';
    if (configTheme === 'dark') return 'dark';

    // Auto mode: detect from HA theme
    // Check hass.themes.darkMode (available in newer HA versions)
    const hass = this._hass as any;
    if (hass?.themes?.darkMode !== undefined) {
      return hass.themes.darkMode ? 'dark' : 'light';
    }

    // Fallback: check computed background color luminance
    const bgColor = getComputedStyle(this).getPropertyValue('--primary-background-color')?.trim();
    if (bgColor) {
      const luminance = this._getColorLuminance(bgColor);
      if (luminance !== null) {
        return luminance < 0.5 ? 'dark' : 'light';
      }
    }

    // Default to dark if detection fails
    return 'dark';
  }

  private _getColorLuminance(color: string): number | null {
    // Handle rgb/rgba format
    const rgbMatch = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbMatch) {
      const r = parseInt(rgbMatch[1]) / 255;
      const g = parseInt(rgbMatch[2]) / 255;
      const b = parseInt(rgbMatch[3]) / 255;
      return 0.299 * r + 0.587 * g + 0.114 * b;
    }

    // Handle hex format
    const hexMatch = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
    if (hexMatch) {
      const r = parseInt(hexMatch[1], 16) / 255;
      const g = parseInt(hexMatch[2], 16) / 255;
      const b = parseInt(hexMatch[3], 16) / 255;
      return 0.299 * r + 0.587 * g + 0.114 * b;
    }

    return null;
  }

  private _updateThemeClass(): void {
    const theme = this._resolveTheme();
    this.classList.remove('theme-light', 'theme-dark');
    this.classList.add(`theme-${theme}`);
  }

  private _getHighTemp(): number | undefined {
    const daily = this._forecastDailyEvent?.forecast;
    if (daily && daily.length > 0) {
      return daily[0].temperature;
    }
    return this._state?.attributes?.temperature;
  }

  private _getLowTemp(): number | undefined {
    const daily = this._forecastDailyEvent?.forecast;
    if (daily && daily.length > 0) {
      return daily[0].templow ?? daily[0].temperature;
    }
    return undefined;
  }

  private _getAlertText(): string {
    const daily = this._forecastDailyEvent?.forecast;
    const hourly = this._forecastHourlyEvent?.forecast;

    // Priority 1: Check imminent conditions (next 6 hours) - most actionable
    if (hourly && hourly.length > 0) {
      for (let i = 0; i < Math.min(6, hourly.length); i++) {
        const h = hourly[i];
        const desc = this._getConditionDescription(h.condition);
        if (desc) {
          const timeDesc = this._getTimeDescription(h.datetime, i);
          return `${desc} ${timeDesc}`;
        }
      }
    }

    // Priority 2: Tomorrow's forecast (planning info)
    if (daily && daily.length > 1) {
      const tomorrow = daily[1];
      const desc = this._getConditionDescription(tomorrow.condition);
      if (desc) {
        return `${desc} tomorrow`;
      }
    }

    // Fallback: current condition
    return this._formatCondition();
  }

  private _getTimeDescription(datetime: string, index: number): string {
    if (index === 0) return "now";
    if (index <= 2) return "soon";

    const date = new Date(datetime);
    const hour = date.getHours();

    if (hour >= 5 && hour < 12) return "this morning";
    if (hour >= 12 && hour < 17) return "this afternoon";
    if (hour >= 17 && hour < 21) return "this evening";
    return "tonight";
  }

  private _getConditionDescription(condition?: string): string | null {
    if (!condition) return null;

    const descriptions: Record<string, string> = {
      "rainy": "Rain",
      "pouring": "Heavy rain",
      "snowy": "Snow",
      "snowy-rainy": "Wintry mix",
      "hail": "Hail",
      "lightning": "Thunderstorms",
      "lightning-rainy": "Thunderstorms",
    };

    return descriptions[condition] || null;
  }
}
