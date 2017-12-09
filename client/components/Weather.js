import React from "react";
import Loading from "../components/Loading";

class Weather extends React.Component {
  renderContent = () => {
    const { city, state, country, weather, temp_f, temp_c, icon, forecast_url } = this.props.weather;
    return (
      <div className="content">
        <h2>{temp_f}</h2>
        <h3>{weather}</h3>
        <p>
          {city} / {state} / {country}
        </p>
      </div>
    );
  };
  render() {
    return (
      <section className="section weather">
        <div className="content-container">
          <div className="weather__content">
            <h1 className="section__title">Weather</h1>
            {this.props.ready ? this.renderContent() : <Loading />}
          </div>
        </div>
      </section>
    );
  }
}

export default Weather;
