import { IosWeatherCard } from "./ios-weather-card";

declare global {
  interface Window {
    customCards: Array<Object>;
  }
}

customElements.define("ios-weather-card", IosWeatherCard);

window.customCards = window.customCards || [];
window.customCards.push({
  type: "ios-weather-card",
  name: "iOS Weather Card",
  description: "A Home Assistant card replicating the iOS Weather app design",
});
