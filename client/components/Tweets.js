import React from "react";
import Loading from "../components/Loading";

const renderContent = props => (
  <ul>
    <li>Lat: {props.geolocation.latitude}</li>
    <li>Lon: {props.geolocation.longitude}</li>
  </ul>
);

const Tweets = props => (
  <section className="section tweets">
    <div className="content-container">
      <div className="tweets__content">
        <h1 className="section__title">Tweets</h1>

        {props.loaded ? renderContent(props) : <Loading />}

        <a rel="external" href="https://www.twitter.com/" className="section__attribution">
          Powered by Twitter
        </a>
      </div>
    </div>
  </section>
);

export default Tweets;
