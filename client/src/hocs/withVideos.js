import React from "react";
import { connect } from "react-redux";

function withVideos(WrappedComponent) {
  class HOC extends React.Component {
    state = {
      ready: false
    };
    componentWillReceiveProps(nextProps) {
      const { videos } = nextProps;
      if (!this.state.ready && videos) {
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

  const mapStateToProps = ({ videos }) => ({
    videos
  });

  return connect(mapStateToProps)(HOC);
}

export default withVideos;
