import React from "react";
import { connect } from "react-redux";

function withChatters(WrappedComponent) {
  class HOC extends React.Component {
    state = {
      ready: false
    };
    componentWillReceiveProps(nextProps) {
      const { chatter } = nextProps;
      if (!this.state.ready && chatter) {
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

  const mapStateToProps = ({ chatter }) => ({
    chatter
  });

  return connect(mapStateToProps)(HOC);
}

export default withChatters;
