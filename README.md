# Geopulse

[![CircleCI](https://circleci.com/gh/seriouslysean/geopulse-app/tree/master.svg?style=svg)](https://circleci.com/gh/seriouslysean/geopulse-app/tree/master)

## Intro

Goal of the project, features, etc. [View the demo on Heroku](https://geopulse-app.herokuapp.com/).

## Build

1. Clone repository locally
1. Copy `.env.sample` to `.env` and add any API keys as needed
1. Run `yarn && yarn dev`
1. Open `http://localhost:3000` in your browser

### Tests

1. Run `yarn test` to run tests once
1. Run `yarn test --watch` to automatically run when a test file changes

## Workflow

1. Hit the landing page
1. Geolocation is approximated based on IP address
1. Load initial content
1. Start loading content with Longitude + Latitude. Show loading animation until ready
   * Map ([Google Maps](https://developers.google.com/maps/))
   * Visual of your approximate current location
   * Weather ([Weather Underground](https://www.wunderground.com/weather/api/))
     * Current weather based on latitude + longitude
   * Photos ([Instagram](https://www.instagram.com/developer/))
     * Up to 6 photos posted within 5km of latitude + longitude
     * Note: this will only work with Instagram accounts added to the sandbox application.
   * Chatter ([Twitter](https://developer.twitter.com/))
     * Up to 4 tweets posted within 5km of latitude + longitude
   * Videos ([YouTube](https://developers.google.com/youtube/))
     * Up to 4 videos posted within 5km of latitude + longitude
1. User clicks to improve accuracy (share location via browser)
   * If accepted, load content
   * If declined, show geolocation unavailable screen

## Roadmap

* Manual location selection
* Location distance option
* Weather icons/animations
* Improved Instagram support
  * Requires user login and additional tools to upgrade from sandboxed mode
* User authentication (save locations)
