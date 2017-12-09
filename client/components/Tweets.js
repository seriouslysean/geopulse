import React from "react";
import Loading from "../components/Loading";

const renderContent = props => (
  <ul>
    <li>Lat: {props.location.latitude}</li>
    <li>Lon: {props.location.longitude}</li>
  </ul>
);

const Tweets = props => (
  <section className="tweets">
    <div className="content-container">
      <div className="tweets__content">
        <h1>Tweets</h1>
        {props.loaded ? renderContent(props) : <Loading />}
      </div>
    </div>
  </section>
);

export default Tweets;
