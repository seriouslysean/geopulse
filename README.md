# Geopulse

[![CircleCI](https://circleci.com/gh/seriouslysean/geopulse-app/tree/master.svg?style=svg)](https://circleci.com/gh/seriouslysean/geopulse-app/tree/master)

## Intro

Geopulse is a web app to showcase local content in your area. Currently it shows your location on a map, the weather, photos, tweets and videos within 5km. [View it on the web at https://geopul.se](https://geopul.se).

If you find any bugs or have a question, submit it as a [GitHub Issue](https://github.com/seriouslysean/geopulse-app/issues)!

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
1. Start loading content with Longitude + Latitude. Show loading animation until ready
   * Map ([Google Maps](https://developers.google.com/maps/))
   * Visual of your approximate current location
   * Weather ([Weather Underground](https://www.wunderground.com/weather/api/))
     * Current weather based on latitude + longitude
   * Photos ([Instagram](https://www.instagram.com/developer/))
     * Up to 6 photos posted within 5km of latitude + longitude
     * Note: This will only work with Instagram accounts added to the sandbox application. If you build locally and add your own Instagram API Keys it will work just fine.
   * Chatter ([Twitter](https://developer.twitter.com/))
     * Up to 4 tweets posted within 5km of latitude + longitude
   * Videos ([YouTube](https://developers.google.com/youtube/))
     * Up to 4 videos posted within 5km of latitude + longitude
1. User clicks to improve accuracy (share location via browser)
   * If accepted, load more accurate content
   * If declined, show geolocation unavailable screen

## Roadmap

* Manual location selection by address/zip
* Location radius support
* Weather icons/animations
* Photo/Chatter/Video load-in animations
* Improved Instagram support
  * Requires user login and additional tools to upgrade from sandboxed mode
* User authentication (save locations)
