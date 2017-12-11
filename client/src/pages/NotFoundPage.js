import React from "react";

const NotFoundPage = () => (
  <div className="page-not-found">
    <section className="section section--spacing section--bg-sky-light">
      <div className="content-container">
        <h1 className="section__title">Whoops!</h1>
        <div className="content">
          <p>Something isn't quite right here, we weren't able to find what you were looking for.</p>
        </div>
      </div>
    </section>
  </div>
);

export default {
  component: NotFoundPage
};
