import React from "react";
import { connect } from "react-redux";
import { getLocation } from "../actions/location";
import { getWeather } from "../actions/weather";
import withLocation from "../hocs/withLocation";
import withWeather from "../hocs/withWeather";
import Loading from "../components/Loading";
import Location from "../components/Location";
import Weather from "../components/Weather";
import Videos from "../components/Videos";
import Tweets from "../components/Tweets";

const LocationWithLocation = withLocation(Location);
const WeatherWithWeather = withWeather(Weather);
// const VideosWithVideos = withVideos(Videos);
// const TweetsWithTweets = withTweets(Tweets);

class FeedPage extends React.Component {
  componentDidMount() {
    this.props.getLocation().then(() => {
      this.props.getWeather();
    });
  }
  render() {
    return (
      <div className="page-feed">
        <LocationWithLocation
          googleMapURL={`https://maps.googleapis.com/maps/api/js?key=AIzaSyCA0hPUaqAK_P30M6J8eozIocb7xs926og&v=3.exp&libraries=geometry,places`}
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `400px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
        <WeatherWithWeather />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  getLocation: () => dispatch(getLocation()),
  getWeather: (latitude, longitude) => dispatch(getWeather())
});

export default connect(undefined, mapDispatchToProps)(FeedPage);
