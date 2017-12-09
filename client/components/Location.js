import React from "react";
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";
import setupMap from "../../config/setupMap";
import Loading from "../components/Loading";

class Location extends React.Component {
  renderContent = () => {
    const { longitude: lng, latitude: lat } = this.props.location;
    return (
      <div className="content">
        <GoogleMap
          defaultZoom={14}
          defaultCenter={{ lat, lng }}
          defaultOptions={{
            styles: setupMap,
            streetViewControl: false,
            scaleControl: false,
            mapTypeControl: false,
            panControl: false,
            zoomControl: false,
            rotateControl: false,
            fullscreenControl: false,
            draggable: false,
            scrollwheel: false
          }}
          disableDefaultUI={true}
        />
      </div>
    );
  };
  render() {
    return (
      <section className="location">
        <div className="location__content">{this.props.ready ? this.renderContent() : <Loading />}</div>
      </section>
    );
  }
}

export default withScriptjs(withGoogleMap(Location));
