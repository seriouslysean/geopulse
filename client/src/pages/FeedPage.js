import _ from "lodash";
import React from "react";
import { connect } from "react-redux";
import config from "../../../config/config";
import { getIpGeoLocation, setGeolocationUnavailable } from "../actions/geolocation";
import { getWeather } from "../actions/weather";
import { getPhotos } from "../actions/photos";
import { getChatter } from "../actions/chatter";
import { getVideos } from "../actions/videos";
import withGeolocation from "../hocs/withGeolocation";
import withWeather from "../hocs/withWeather";
import withPhotos from "../hocs/withPhotos";
import withChatter from "../hocs/withChatter";
import withVideos from "../hocs/withVideos";
import Accuracy from "../components/Accuracy";
import Location from "../components/Location";
import Weather from "../components/Weather";
import Photos from "../components/Photos";
import Chatter from "../components/Chatter";
import Videos from "../components/Videos";
import Unavailable from "../components/Unavailable";

const AccuracyWithGeolocation = withGeolocation(Accuracy);
const LocationWithGeolocation = withGeolocation(Location);
const WeatherWithWeather = withGeolocation(withWeather(Weather));
const PhotosWithPhotos = withGeolocation(withPhotos(Photos));
const ChatterWithChatter = withGeolocation(withChatter(Chatter));
const VideosWithVideos = withGeolocation(withVideos(Videos));

export class FeedPage extends React.Component {
  state = {
    unavailable: false,
    isAccurate: false
  };
  refreshData = geolocation => {
    const { latitude, longitude } = geolocation;
    this.props.getWeather(latitude, longitude);
    this.props.getPhotos(latitude, longitude);
    this.props.getChatter(latitude, longitude);
    this.props.getVideos(latitude, longitude);
  };
  componentWillReceiveProps(nextProps) {
    const { geolocation } = nextProps;
    if (geolocation.unavailable) {
      this.setState(() => ({
        unavailable: true
      }));
    }
    if (geolocation && !_.isEqual(this.props.geolocation, geolocation)) {
      this.refreshData(geolocation);
      if (geolocation.accurate) {
        this.setState(() => ({
          isAccurate: true
        }));
      }
    }
  }
  componentDidMount() {
    if (this.props.geolocation) {
      this.refreshData(this.props.geolocation);
    }
  }
  renderContent() {
    return (
      <div className="section-container">
        <LocationWithGeolocation
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${
            config.GOOGLE_API_KEY
          }&v=3.exp&libraries=geometry,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        {!this.state.isAccurate && <AccuracyWithGeolocation />}
        <WeatherWithWeather />
        <PhotosWithPhotos />
        <ChatterWithChatter />
        <VideosWithVideos />
      </div>
    );
  }
  render() {
    return (
      <div className="page-feed">
        <div className="page-content">{!this.state.unavailable ? this.renderContent() : <Unavailable />}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  geolocation: state.geolocation
});

const mapDispatchToProps = dispatch => ({
  setGeolocationUnavailable: () => dispatch(setGeolocationUnavailable()),
  getWeather: (latitude, longitude) => dispatch(getWeather(latitude, longitude)),
  getPhotos: (latitude, longitude) => dispatch(getPhotos(latitude, longitude)),
  getChatter: (latitude, longitude) => dispatch(getChatter(latitude, longitude)),
  getVideos: (latitude, longitude) => dispatch(getVideos(latitude, longitude))
});

export default {
  loadData: ({ dispatch, clientIp }) => dispatch(getIpGeoLocation(clientIp)),
  component: connect(mapStateToProps, mapDispatchToProps)(FeedPage)
};
