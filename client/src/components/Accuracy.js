import React from "react";
import { connect } from "react-redux";
import { getGeolocation, setGeolocation } from "../actions/geolocation";
import { getWeather, setWeather } from "../actions/weather";
import { getPhotos, setPhotos } from "../actions/photos";
import { getChatter, setChatter } from "../actions/chatter";
import { getVideos, setVideos } from "../actions/videos";
import Loading from "../components/Loading";

class Accuracy extends React.Component {
  handleImproveAccuracy = e => {
    this.props
      .resetGeolocation()
      .then(() => {
        this.props.getGeolocation();
      })
      .catch(() => {
        console.error("Unable to improve accuracy");
      });
  };
  renderContent = () => {
    const { longitude, latitude } = this.props.geolocation;
    return (
      <div className="content">
        <p className="accuracy__intro">
          Your location has been approximated using your IP address. If you'd like to improve the accuracy, please click
          the button below.
        </p>

        <button onClick={this.handleImproveAccuracy} className="button accuracy__button">
          Improve Accuracy
        </button>

        <div className="accuracy_geolocation">
          {latitude} / {longitude}
        </div>
      </div>
    );
  };
  render() {
    return (
      <section className="section section--spacing section--bg-sky-light accuracy">
        <div className="content-container">
          <div className="accuracy__content">
            <h1 className="section__title">Accuracy</h1>

            {this.props.ready && this.props.geolocation ? this.renderContent() : <Loading />}
          </div>
        </div>
      </section>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  resetGeolocation: () => {
    return Promise.all([
      dispatch(setGeolocation()),
      dispatch(setWeather()),
      dispatch(setPhotos()),
      dispatch(setChatter()),
      dispatch(setVideos())
    ]);
  },
  getGeolocation: () => dispatch(getGeolocation())
});

export default connect(undefined, mapDispatchToProps)(Accuracy);
