import React from "react";
import Loading from "../components/Loading";

class Weather extends React.Component {
  state = {
    showFarenheit: true
  };
  handleTemperatureToggle = e => {
    e.preventDefault();
    this.setState(prevState => ({
      showFarenheit: !prevState.showFarenheit
    }));
  };
  renderWeather = () => {
    const {
      display_location: { city, state, country },
      weather,
      temp_f,
      temp_c,
      icon,
      forecast_url
    } = this.props.weather;
    return (
      <div className="weather__data">
        <div
          className={`weather__temperature ${
            this.state.showFarenheit ? "weather__temperature--f" : "weather__temperature--c"
          }`}
          onClick={this.handleTemperatureToggle}
        >
          <h2>
            <span className="temp temp--f">{temp_f}&deg;F</span>
            <span className="temp temp--c">{temp_c}&deg;C</span>
          </h2>
        </div>
        <div className="weather__details">
          <h3>{weather}</h3>
          <p>
            {city}, {state} / {country}
          </p>
        </div>
      </div>
    );
  };
  renderContent = () => {
    console.log(this.props.weather);
    return (
      <div className="content">
        {!this.props.weather.hasOwnProperty("error") ? (
          this.renderWeather()
        ) : (
          <p className="text--center">No weather data found</p>
        )}
      </div>
    );
  };
  render() {
    return (
      <section className="section section--spacing section--bg-earth-light weather">
        <div className="content-container">
          <div className="weather__content">
            <h1 className="section__title">Weather</h1>

            {this.props.ready && this.props.weather ? this.renderContent() : <Loading />}

            <a rel="external" href="https://www.wunderground.com/" className="section__attribution" target="_blank">
              Powered by Weather Underground
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Weather;
