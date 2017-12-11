import React from "react";
import { connect } from "react-redux";
import config from "../../../config/config";
import { getGeolocation } from "../actions/geolocation";
import { getWeather } from "../actions/weather";
import { getPhotos } from "../actions/photos";
import { getChatter } from "../actions/chatter";
import withGeolocation from "../hocs/withGeolocation";
import withWeather from "../hocs/withWeather";
import withPhotos from "../hocs/withPhotos";
import withChatter from "../hocs/withChatter";
import Location from "../components/Location";
import Weather from "../components/Weather";
import Photos from "../components/Photos";
import Chatter from "../components/Chatter";
import Videos from "../components/Videos";

const LocationWithGeolocation = withGeolocation(Location);
const WeatherWithWeather = withWeather(Weather);
const PhotosWithPhotos = withPhotos(Photos);
const ChatterWithChatter = withChatter(Chatter);
const VideosWithVideos = withGeolocation(Videos);

class FeedPage extends React.Component {
  componentDidMount() {
    this.props.getGeolocation().then(location => {
      const { latitude, longitude } = location;
      this.props.getWeather(latitude, longitude);
      this.props.getPhotos(latitude, longitude);
      this.props.getChatter(latitude, longitude);
    });
  }
  render() {
    return (
      <div className="page-feed">
        <div className="page-feed">
          <LocationWithGeolocation
            googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
              config.GOOGLE_MAPS_API_KEY
            }&v=3.exp&libraries=geometry,places`}
            loadingElement={<div style={{ height: `100%` }} />}
            containerElement={<div style={{ height: `400px` }} />}
            mapElement={<div style={{ height: `100%` }} />}
          />
          <WeatherWithWeather />
          <PhotosWithPhotos />
          <ChatterWithChatter />
          <VideosWithVideos />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGeolocation: () => dispatch(getGeolocation()),
  getWeather: (latitude, longitude) => dispatch(getWeather(latitude, longitude)),
  getPhotos: (latitude, longitude) => dispatch(getPhotos(latitude, longitude)),
  getChatter: (latitude, longitude) => dispatch(getChatter(latitude, longitude))
});

export default {
  component: connect(undefined, mapDispatchToProps)(FeedPage)
};
