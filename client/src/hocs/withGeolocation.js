import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';

function withGeolocation(WrappedComponent) {
  class HOC extends React.Component {
    state = {
      ready: this.props.geolocation,
      unavailable: false,
    };
    componentWillReceiveProps(nextProps) {
      const { geolocation } = nextProps;
      if (!this.state.ready && geolocation.unavailable) {
        this.setState(() => ({
          unavailable: true,
        }));
      } else if (!this.state.ready && geolocation) {
        this.setState(() => ({
          ready: true,
        }));
      }
    }
    componentWillUpdate() {
      return this.state.ready || this.state.unavailable;
    }
    render() {
      if (this.state.unavailable) {
        return '';
      }
      return <WrappedComponent {...this.props} ready={this.state.ready} />;
    }
  }

  const mapStateToProps = ({ geolocation }) => ({
    geolocation,
  });

  return connect(mapStateToProps)(HOC);
}

export default withGeolocation;
