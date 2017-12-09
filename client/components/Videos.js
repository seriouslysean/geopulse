import React from "react";
import Loading from "../components/Loading";

const renderContent = props => (
  <ul>
    <li>Lat: {props.location.latitude}</li>
    <li>Lon: {props.location.longitude}</li>
  </ul>
);

const Videos = props => (
  <section className="videos">
    <div className="content-container">
      <div className="videos__content">
        <h1>Videos</h1>
        {props.loaded ? renderContent(props) : <Loading />}
      </div>
    </div>
  </section>
);

export default Videos;
