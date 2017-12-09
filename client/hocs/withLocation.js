import React from "react";
import { connect } from "react-redux";

function withLocation(WrappedComponent) {
  class HOC extends React.Component {
    state = {
      ready: false
    };
    componentWillReceiveProps(nextProps) {
      const { location } = nextProps;
      if (!this.state.ready && location) {
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

  const mapStateToProps = ({ location }) => ({
    location
  });

  return connect(mapStateToProps)(HOC);
}

export default withLocation;
