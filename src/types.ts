import type { LovelaceCardConfig } from "custom-card-helpers";

export interface LovelaceGridOptions {
  columns?: number | "full";
  rows?: number | "auto";
  max_columns?: number;
  min_columns?: number;
  min_rows?: number;
  max_rows?: number;
}

export type ThemeMode = 'light' | 'dark' | 'auto';

export interface IosWeatherCardConfig extends LovelaceCardConfig {
  type: "custom:ios-weather-card";
  entity: string;
  name?: string;
  theme?: ThemeMode;
  show_location?: boolean;
  show_current_temp?: boolean;
  show_alert?: boolean;
  alert_entity?: string;
  hourly_forecast?: boolean;
  daily_forecast?: boolean;
  num_hourly?: number;
  num_daily?: number;
}

export interface SunCoordinates {
  latitude: number;
  longitude: number;
}
