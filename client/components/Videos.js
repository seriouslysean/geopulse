import React from "react";
import Loading from "../components/Loading";

const renderContent = props => (
  <ul>
    <li>Lat: {props.geolocation.latitude}</li>
    <li>Lon: {props.geolocation.longitude}</li>
  </ul>
);

const Videos = props => (
  <section className="section videos">
    <div className="content-container">
      <div className="videos__content">
        <h1 className="section__title">Videos</h1>

        {props.ready ? renderContent(props) : <Loading />}

        <a rel="external" href="https://www.youtube.com/" className="section__attribution">
          Powered by YouTube
        </a>
      </div>
    </div>
  </section>
);

export default Videos;
