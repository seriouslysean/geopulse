import React from "react";
import { connect } from "react-redux";
import { getGeolocation } from "../actions/geolocation";
import { getWeather } from "../actions/weather";
import { getPhotos } from "../actions/photos";
import withGeolocation from "../hocs/withGeolocation";
import withWeather from "../hocs/withWeather";
import withPhotos from "../hocs/withPhotos";
import Loading from "../components/Loading";
import Location from "../components/Location";
import Weather from "../components/Weather";
import Photos from "../components/Photos";
import Tweets from "../components/Tweets";
import Videos from "../components/Videos";

const LocationWithGeolocation = withGeolocation(Location);
const WeatherWithWeather = withWeather(Weather);
const PhotosWithPhotos = withPhotos(Photos);
const TweetsWithTweets = withGeolocation(Tweets);
const VideosWithVideos = withGeolocation(Videos);

class FeedPage extends React.Component {
  componentDidMount() {
    this.props.getGeolocation().then(location => {
      const { latitude, longitude } = location;
      this.props.getWeather(latitude, longitude);
      this.props.getPhotos(latitude, longitude);
    });
  }
  render() {
    return (
      <div className="page-feed">
        <LocationWithGeolocation
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCA0hPUaqAK_P30M6J8eozIocb7xs926og&v=3.exp&libraries=geometry,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <WeatherWithWeather />
        <PhotosWithPhotos />
        <TweetsWithTweets />
        <VideosWithVideos />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getGeolocation: () => dispatch(getGeolocation()),
  getWeather: (latitude, longitude) => dispatch(getWeather(latitude, longitude)),
  getPhotos: (latitude, longitude) => dispatch(getPhotos(latitude, longitude))
});

export default connect(undefined, mapDispatchToProps)(FeedPage);
