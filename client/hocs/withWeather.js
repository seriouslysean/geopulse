import React from "react";
import { connect } from "react-redux";

function withWeather(WrappedComponent) {
  class HOC extends React.Component {
    state = {
      ready: false
    };
    componentWillReceiveProps(nextProps) {
      const { location, weather } = nextProps;
      console.log(location, weather);
      if (!this.state.ready && location && weather) {
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

  const mapStateToProps = ({ location, weather }) => ({
    location,
    weather
  });

  return connect(mapStateToProps)(HOC);
}

export default withWeather;
