import React from "react";

export const AboutPage = () => (
  <div className="page-about">
    <div className="page-content">
      <section className="section section--spacing section--bg-sky-light">
        <h1 className="section__title">About</h1>
        <div className="content-container">
          <div className="content">
            <p>
              Geopulse is a tool that allows you to see content based on your location including a Google Map of the
              area, the local weather from Weather Underground, photos from Instagram, tweets from Twitter and videos
              from YouTube.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--spacing section--bg-earth-light">
        <h1 className="section__title">Privacy</h1>
        <div className="content-container">
          <div className="content">
            <p>
              No data is saved on our servers and is only requested on an as-needed basis. Your personal information (ip
              address, etc) is not sold, rented or shared with a third party, unless required by law.
            </p>
            <p>
              Anonymous information is tracked via{" "}
              <a rel="external" href="https://www.google.com/analytics/" title="Google Analytics">
                Google Analytics
              </a>{" "}
              (which uses cookies) while you browse the site.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--spacing section--bg-earth-medium">
        <h1 className="section__title">Technology</h1>
        <div className="content-container">
          <div className="content">
            <p>No data is saved on our servers and is only requested on an as-needed basis.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default {
  component: AboutPage
};
