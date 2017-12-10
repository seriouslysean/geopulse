import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import setupMap from "../../config/setupMap";
import Loading from "../components/Loading";

class Location extends React.Component {
  renderContent = () => {
    const { longitude: lng, latitude: lat } = this.props.geolocation;
    return (
      <div className="content">
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{ lat, lng }}
          defaultOptions={{
            backgroundColor: "#90acf3",
            clickableIcons: false,
            disableDefaultUI: true,
            draggable: false,
            fullscreenControl: false,
            gestureHandling: "none",
            keyboardShortcuts: false,
            mapTypeControl: false,
            maxZoom: 14,
            minZoom: 14,
            panControl: false,
            rotateControl: false,
            scaleControl: false,
            scrollwheel: false,
            streetViewControl: false,
            styles: setupMap,
            zoomControl: false
          }}
        />
      </div>
    );
  };
  render() {
    return (
      <section className="section section--no-space location">
        <div className="location__content">{this.props.ready ? this.renderContent() : <Loading />}</div>
      </section>
    );
  }
}

export default withScriptjs(withGoogleMap(Location));
