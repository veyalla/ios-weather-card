import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { ForecastAttribute, WeatherEntity } from "../weather";
import { getWeatherStateIcon } from "../weather";

@customElement("ios-daily-forecast")
export class IosDailyForecast extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) forecast: ForecastAttribute[] = [];
  @property({ attribute: false }) state?: WeatherEntity;

  static styles = css`
    :host {
      display: block;
      text-align: left;
    }

    .daily-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      padding: 8px 0;
      width: 100%;
    }

    .day-row {
      display: grid;
      grid-template-columns: 50px 36px 1fr 40px;
      align-items: center;
      gap: 12px;
      padding: 4px 0;
      width: 100%;
    }

    .day-name {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
    }

    .day-icon {
      width: 28px;
      height: 28px;
    }

    .day-icon svg {
      width: 100%;
      height: 100%;
    }

    .temp-bar-container {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .temp-low {
      font-size: 16px;
      color: var(--secondary-text-color);
      min-width: 32px;
      text-align: right;
    }

    .temp-bar-wrapper {
      flex: 1;
      height: 6px;
      background: rgba(255, 255, 255, 0.2);
      border-radius: 3px;
      position: relative;
      overflow: hidden;
    }

    .temp-bar {
      position: absolute;
      height: 100%;
      border-radius: 3px;
      background: linear-gradient(90deg, #64b5f6, #4fc3f7, #81c784, #aed581, #ffb74d, #ff8a65);
      background-size: 200% 100%;
    }

    .temp-high {
      font-size: 16px;
      font-weight: 500;
      color: var(--primary-text-color);
      min-width: 32px;
    }

    /* Weather icon colors */
    .sun {
      fill: var(--weather-icon-sun-color, #fdd93c);
    }
    .moon {
      fill: var(--weather-icon-moon-color, #fcf497);
    }
    .cloud-back {
      fill: var(--weather-icon-cloud-back-color, #d4d4d4);
    }
    .cloud-front {
      fill: var(--weather-icon-cloud-front-color, #f9f9f9);
    }
    .rain {
      fill: var(--weather-icon-rain-color, #30b3ff);
    }
    .snow {
      fill: var(--weather-icon-snow-color, #f9f9f9);
      stroke: var(--weather-icon-snow-stroke-color, #d4d4d4);
      stroke-width: 1;
      paint-order: stroke;
    }
  `;

  render() {
    if (!this.forecast.length) return nothing;

    // Calculate min/max across all days for the temp bar scaling
    const temps = this.forecast.flatMap(d => [
      d.temperature,
      d.templow ?? d.temperature
    ]);
    const minTemp = Math.min(...temps);
    const maxTemp = Math.max(...temps);

    return html`
      <div class="daily-container">
        ${this.forecast.map((day, index) => this._renderDay(day, index, minTemp, maxTemp))}
      </div>
    `;
  }

  private _renderDay(day: ForecastAttribute, index: number, globalMin: number, globalMax: number) {
    const dayName = this._formatDayName(day.datetime, index);
    const icon = getWeatherStateIcon(
      day.condition || this.state?.state || "cloudy",
      this,
      day.is_daytime === false
    );
    const high = Math.round(day.temperature);
    const low = Math.round(day.templow ?? day.temperature);

    // Calculate bar position
    const range = globalMax - globalMin || 1;
    const leftPercent = ((low - globalMin) / range) * 100;
    const widthPercent = ((high - low) / range) * 100;

    // Color position based on temperature
    const colorPosition = ((low + high) / 2 - globalMin) / range * 100;

    return html`
      <div class="day-row">
        <span class="day-name">${dayName}</span>
        <div class="day-icon">${icon}</div>
        <div class="temp-bar-container">
          <span class="temp-low">${low}°</span>
          <div class="temp-bar-wrapper">
            <div
              class="temp-bar"
              style="left: ${leftPercent}%; width: ${Math.max(widthPercent, 10)}%; background-position: ${colorPosition}% 0;"
            ></div>
          </div>
        </div>
        <span class="temp-high">${high}°</span>
      </div>
    `;
  }

  private _formatDayName(datetime: string, index: number): string {
    if (index === 0) return "Today";

    const date = new Date(datetime);
    const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[date.getDay()];
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ios-daily-forecast": IosDailyForecast;
  }
}
