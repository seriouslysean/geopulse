import React from "react";
import { connect } from "react-redux";

function withWeather(WrappedComponent) {
  class HOC extends React.Component {
    state = {
      ready: false
    };
    componentWillReceiveProps(nextProps) {
      const { geolocation, weather } = nextProps;
      if (!this.state.ready && geolocation && weather) {
        this.setState(() => ({
          ready: true
        }));
      }
    }
    componentWillUpdate() {
      return this.state.ready;
    }
    render() {
      return <WrappedComponent {...this.props} ready={this.state.ready} />;
    }
  }

  const mapStateToProps = ({ geolocation, weather }) => ({
    geolocation,
    weather
  });

  return connect(mapStateToProps)(HOC);
}

export default withWeather;
