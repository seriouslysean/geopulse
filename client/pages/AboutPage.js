import React from "react";

const AboutPage = () => (
  <div className="page-about">
    <section className="section section--spacing section--bg-sky-light">
      <div className="content-container">
        <h1 className="section__title">About</h1>
        <div className="content">
          <p>
            Geopulse is a tool that allows you to see content based on your location including a Google Map of the area,
            the local weather from Weather Underground, photos from Instagram, tweets from Twitter and videos from
            YouTube.
          </p>
        </div>
      </div>
    </section>
    <section className="section section--spacing section--bg-earth-light">
      <div className="content-container">
        <h1 className="section__title">Roadmap</h1>
        <div className="content">
          <p>(Roadmap)</p>
        </div>
      </div>
    </section>
    <section className="section section--spacing section--bg-earth-medium">
      <div className="content-container">
        <h1 className="section__title">Privacy</h1>
        <div className="content">
          <p>No data is saved on our servers and is only requested on an as-needed basis.</p>
        </div>
      </div>
    </section>
    <section className="section section--spacing section--bg-earth-dark">
      <div className="content-container">
        <h1 className="section__title">Thanks</h1>
        <div className="content">
          <p>(People)</p>
        </div>
      </div>
    </section>
    <section className="section section--spacing section--bg-earth-darker">
      <div className="content-container">
        <h1 className="section__title">Contact</h1>
        <div className="content">
          <p>(Info)</p>
        </div>
      </div>
    </section>
  </div>
);

export default AboutPage;
