import React from 'react';

export const NotFoundPage = () => (
  <div className="page-not-found">
    <div className="page-content">
      <section className="section section--spacing section--bg-sky-light">
        <div className="content-container">
          <h1 className="section__title">Whoops!</h1>
          <div className="content">
            <p>
              Something isn&apos;t quite right here, we weren&apos;t able to find what you were
              looking for.
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default {
  component: NotFoundPage,
};
