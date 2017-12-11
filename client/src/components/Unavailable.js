import React from "react";

const Unavailable = () => (
  <section className="section section--spacing section--bg-sky-light unavailable">
    <div className="content-container">
      <h1 className="section__title">Unavailable</h1>
      <div className="content">
        <p>Geolocation is unavailable. Check your settings to verify access or try again later.</p>
      </div>
    </div>
  </section>
);

export default Unavailable;
