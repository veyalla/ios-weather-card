# iOS Weather Card

A Home Assistant custom card that replicates the iOS Weather app design.

## Features

- Location header with current temperature
- Weather condition display with icons
- High/Low temperature display
- Weather alerts/summary section
- Hourly forecast strip
- Multi-day forecast with temperature range bars

## Installation

### HACS (Recommended)

1. Open HACS
2. Go to Frontend
3. Click the menu icon and select "Custom repositories"
4. Add this repository URL and select "Lovelace" as the category
5. Install "iOS Weather Card"

### Manual Installation

1. Download `ios-weather-card.js` from the latest release
2. Copy it to your `config/www` directory
3. Add the resource in your Lovelace configuration:

```yaml
resources:
  - url: /local/ios-weather-card.js
    type: module
```

## Configuration

```yaml
type: custom:ios-weather-card
entity: weather.home
name: My Location  # Optional - defaults to entity friendly name
show_location: true
show_alert: true
hourly_forecast: true
daily_forecast: true
num_hourly: 6
num_daily: 5
```

### Options

| Name | Type | Default | Description |
|------|------|---------|-------------|
| entity | string | **Required** | Weather entity ID |
| name | string | Entity name | Display name for location |
| show_location | boolean | true | Show location header |
| show_alert | boolean | true | Show weather alert/summary |
| hourly_forecast | boolean | true | Show hourly forecast |
| daily_forecast | boolean | true | Show daily forecast |
| num_hourly | number | 6 | Number of hourly forecasts to show |
| num_daily | number | 5 | Number of daily forecasts to show |

## Development

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Build for local debugging (outputs to community folder)
npm run debug

# Watch mode for development
npm run watch
```
