import React from "react";
import Loading from "../components/Loading";

const renderContent = props => (
  <ul>
    <li>Lat: {props.geolocation.latitude}</li>
    <li>Lon: {props.geolocation.longitude}</li>
  </ul>
);

const Photos = props => (
  <section className="section photos">
    <div className="content-container">
      <div className="photos__content">
        <h1 className="section__title">Photos</h1>

        {props.loaded ? renderContent(props) : <Loading />}

        <a rel="external" href="https://www.instagram.com/" className="section__attribution">
          Powered by Instagram
        </a>
      </div>
    </div>
  </section>
);

export default Photos;
