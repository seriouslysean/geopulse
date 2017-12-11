import React from "react";
import { connect } from "react-redux";

function withPhotos(WrappedComponent) {
  class HOC extends React.Component {
    state = {
      ready: false
    };
    componentWillReceiveProps(nextProps) {
      const { photos } = nextProps;
      if (!this.state.ready && photos) {
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

  const mapStateToProps = ({ photos }) => ({
    photos
  });

  return connect(mapStateToProps)(HOC);
}

export default withPhotos;
