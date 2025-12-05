import { IosWeatherCard } from "./ios-weather-card";
import { IosWeatherCardEditor } from "./ios-weather-card-editor";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("ios-weather-card", IosWeatherCard);
customElements.define("ios-weather-card-editor", IosWeatherCardEditor);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ios-weather-card",
  name: "iOS Weather Card",
  description: "A Home Assistant card replicating the iOS Weather app design",
});
