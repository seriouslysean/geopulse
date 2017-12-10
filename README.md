# Geopulse

[![CircleCI](https://circleci.com/gh/seriouslysean/geopulse-app/tree/master.svg?style=svg)](https://circleci.com/gh/seriouslysean/geopulse-app/tree/master)

## Intro

Goal of the project, features, etc. [View the demo on Heroku](https://geopulse-app.herokuapp.com/).

## Build

1. Clone repository locally
1. Run `yarn && yarn dev`
1. Open `http://localhost:3000` in your browser

## Workflow

1. Hit the landing page
1. Prompt user to share location via browser
   * Yes, loading content
   * No, geolocate user by IP
     * Success, load content
     * Failure, show error
1. Start loading content with Longitude + Latitude
   * Map
   * Weather
   * Instagram
   * Twitter
   * Youtube

## Roadmap

* Manual location selection
* Location distance option
* Weather icons/animations
* Improved Instagram support
  * Requires user login and additional tools to upgrade from sandboxed mode
* User authentication (save locations)
