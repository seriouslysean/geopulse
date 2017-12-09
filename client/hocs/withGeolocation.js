import React from "react";
import { connect } from "react-redux";

function withGeolocation(WrappedComponent) {
  class HOC extends React.Component {
    state = {
      ready: false
    };
    componentWillReceiveProps(nextProps) {
      const { geolocation } = nextProps;
      if (!this.state.ready && geolocation) {
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

  const mapStateToProps = ({ geolocation }) => ({
    geolocation
  });

  return connect(mapStateToProps)(HOC);
}

export default withGeolocation;
