import { LitElement, html, css, nothing } from "lit";
import { state } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { IosWeatherCardConfig, ThemeMode } from "./types";

export class IosWeatherCardEditor extends LitElement {
  @state() private _config!: IosWeatherCardConfig;
  @state() private _hass!: HomeAssistant;

  set hass(hass: HomeAssistant) {
    this._hass = hass;
  }

  setConfig(config: IosWeatherCardConfig) {
    this._config = config;
  }

  private _valueChanged(ev: Event) {
    if (!this._config || !this._hass) return;

    const target = ev.target as HTMLInputElement;
    const configKey = target.configValue as keyof IosWeatherCardConfig;

    let newValue: string | number | boolean;
    if (target.type === "checkbox") {
      newValue = target.checked;
    } else if (target.type === "number") {
      newValue = parseInt(target.value, 10);
    } else {
      newValue = target.value;
    }

    if (this._config[configKey] === newValue) return;

    const newConfig = { ...this._config, [configKey]: newValue };

    this.dispatchEvent(
      new CustomEvent("config-changed", {
        detail: { config: newConfig },
        bubbles: true,
        composed: true,
      })
    );
  }

  private _getWeatherEntities(): string[] {
    if (!this._hass) return [];
    return Object.keys(this._hass.states)
      .filter(entityId => entityId.startsWith("weather."))
      .sort();
  }

  static styles = css`
    .form-row {
      display: flex;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid var(--divider-color, #e0e0e0);
    }
    .form-row:last-child {
      border-bottom: none;
    }
    .form-row label {
      flex: 1;
      font-weight: 500;
    }
    .form-row input[type="checkbox"] {
      width: 20px;
      height: 20px;
    }
    .form-row input[type="number"] {
      width: 60px;
      padding: 4px 8px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
    }
    .form-row select {
      padding: 4px 8px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
      background: var(--card-background-color, #fff);
      color: var(--primary-text-color, #000);
    }
    .form-row input[type="text"] {
      width: 150px;
      padding: 4px 8px;
      border: 1px solid var(--divider-color, #ccc);
      border-radius: 4px;
    }
    .section-title {
      font-weight: 600;
      font-size: 14px;
      color: var(--primary-color, #03a9f4);
      margin: 16px 0 8px 0;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .section-title:first-child {
      margin-top: 0;
    }
  `;

  render() {
    if (!this._hass || !this._config) return nothing;

    const weatherEntities = this._getWeatherEntities();

    return html`
      <div class="section-title">Entity</div>

      <div class="form-row">
        <label>Weather Entity</label>
        <select
          .configValue=${"entity"}
          .value=${this._config.entity || ""}
          @change=${this._valueChanged}
        >
          ${weatherEntities.map(
            entity => html`
              <option value=${entity} ?selected=${entity === this._config.entity}>
                ${this._hass.states[entity]?.attributes?.friendly_name || entity}
              </option>
            `
          )}
        </select>
      </div>

      <div class="form-row">
        <label>Custom Name</label>
        <input
          type="text"
          .configValue=${"name"}
          .value=${this._config.name || ""}
          @input=${this._valueChanged}
          placeholder="Optional"
        />
      </div>

      <div class="section-title">Appearance</div>

      <div class="form-row">
        <label>Theme</label>
        <select
          .configValue=${"theme"}
          .value=${this._config.theme || "auto"}
          @change=${this._valueChanged}
        >
          <option value="auto" ?selected=${this._config.theme === "auto"}>Auto</option>
          <option value="light" ?selected=${this._config.theme === "light"}>Light</option>
          <option value="dark" ?selected=${this._config.theme === "dark"}>Dark</option>
        </select>
      </div>

      <div class="section-title">Display Options</div>

      <div class="form-row">
        <label>Show Location</label>
        <input
          type="checkbox"
          .configValue=${"show_location"}
          .checked=${this._config.show_location !== false}
          @change=${this._valueChanged}
        />
      </div>

      <div class="form-row">
        <label>Show Current Temperature</label>
        <input
          type="checkbox"
          .configValue=${"show_current_temp"}
          .checked=${this._config.show_current_temp !== false}
          @change=${this._valueChanged}
        />
      </div>

      <div class="form-row">
        <label>Show Alert</label>
        <input
          type="checkbox"
          .configValue=${"show_alert"}
          .checked=${this._config.show_alert !== false}
          @change=${this._valueChanged}
        />
      </div>

      <div class="section-title">Forecast</div>

      <div class="form-row">
        <label>Show Hourly Forecast</label>
        <input
          type="checkbox"
          .configValue=${"hourly_forecast"}
          .checked=${this._config.hourly_forecast !== false}
          @change=${this._valueChanged}
        />
      </div>

      <div class="form-row">
        <label>Number of Hourly Items</label>
        <input
          type="number"
          .configValue=${"num_hourly"}
          .value=${this._config.num_hourly ?? 6}
          min="1"
          max="24"
          @change=${this._valueChanged}
        />
      </div>

      <div class="form-row">
        <label>Show Daily Forecast</label>
        <input
          type="checkbox"
          .configValue=${"daily_forecast"}
          .checked=${this._config.daily_forecast !== false}
          @change=${this._valueChanged}
        />
      </div>

      <div class="form-row">
        <label>Number of Daily Items</label>
        <input
          type="number"
          .configValue=${"num_daily"}
          .value=${this._config.num_daily ?? 5}
          min="1"
          max="10"
          @change=${this._valueChanged}
        />
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ios-weather-card-editor": IosWeatherCardEditor;
  }
  interface HTMLInputElement {
    configValue?: string;
  }
  interface HTMLSelectElement {
    configValue?: string;
  }
}
