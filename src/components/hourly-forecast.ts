import { LitElement, html, css, nothing } from "lit";
import { customElement, property } from "lit/decorators.js";
import type { HomeAssistant } from "custom-card-helpers";
import type { ForecastAttribute, WeatherEntity } from "../weather";
import { getWeatherStateIcon } from "../weather";

@customElement("ios-hourly-forecast")
export class IosHourlyForecast extends LitElement {
  @property({ attribute: false }) hass?: HomeAssistant;
  @property({ attribute: false }) forecast: ForecastAttribute[] = [];
  @property({ attribute: false }) state?: WeatherEntity;

  static styles = css`
    :host {
      display: block;
      text-align: left;
    }

    .hourly-container {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      gap: 16px;
      overflow-x: auto;
      padding: 12px 0;
      scrollbar-width: none;
      -ms-overflow-style: none;
    }

    .hourly-container::-webkit-scrollbar {
      display: none;
    }

    .hour-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;
      min-width: 50px;
    }

    .hour-time {
      font-size: 14px;
      font-weight: 500;
      color: var(--card-text-color, var(--primary-text-color));
    }

    .hour-icon {
      width: 28px;
      height: 28px;
    }

    .hour-icon svg {
      width: 100%;
      height: 100%;
    }

    .hour-temp {
      font-size: 18px;
      font-weight: 500;
      font-variant-numeric: tabular-nums;
      color: var(--card-text-color, var(--primary-text-color));
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

    return html`
      <div class="hourly-container">
        ${this.forecast.map((hour, index) => this._renderHour(hour, index))}
      </div>
    `;
  }

  private _renderHour(hour: ForecastAttribute, index: number) {
    const time = this._formatTime(hour.datetime, index);
    const icon = getWeatherStateIcon(
      hour.condition || this.state?.state || "cloudy",
      this,
      this._isNightTime(hour.datetime)
    );
    const temp = Math.round(hour.temperature);

    return html`
      <div class="hour-item">
        <span class="hour-time">${time}</span>
        <div class="hour-icon">${icon}</div>
        <span class="hour-temp">${temp}°</span>
      </div>
    `;
  }

  private _formatTime(datetime: string, index: number): string {
    if (index === 0) return "Now";

    const date = new Date(datetime);
    const hour = date.getHours();
    const ampm = hour >= 12 ? "PM" : "AM";
    const hour12 = hour % 12 || 12;
    return `${hour12}${ampm}`;
  }

  private _isNightTime(datetime: string): boolean {
    const date = new Date(datetime);
    const hour = date.getHours();
    return hour < 6 || hour >= 20;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "ios-hourly-forecast": IosHourlyForecast;
  }
}
