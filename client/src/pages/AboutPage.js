import React from 'react';

export const AboutPage = () => (
  <div className="page-about">
    <div className="page-content">
      <section className="section section--spacing section--bg-sky-light">
        <h1 className="section__title">About</h1>
        <div className="content-container">
          <div className="content">
            <p>
              Geopulse is a tool that allows you to see content based on your location including a
              Google Map of the area, the local weather from Weather Underground, photos from
              Instagram, tweets from Twitter and videos from YouTube.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--spacing section--bg-earth-light">
        <h1 className="section__title">Privacy</h1>
        <div className="content-container">
          <div className="content">
            <p>
              No data is saved on our servers and is only requested on an as-needed basis. Your
              personal information (ip address, etc) is not sold, rented or shared with a third
              party, unless required by law.
            </p>
            <p>
              Anonymous information is tracked via{' '}
              <a rel="external" href="https://www.google.com/analytics/" title="Google Analytics">
                Google Analytics
              </a>{' '}
              (which uses cookies) while you browse the site.
            </p>
          </div>
        </div>
      </section>
      <section className="section section--spacing section--bg-earth-medium technology">
        <h1 className="section__title">Technology</h1>
        <div className="content-container">
          <div className="content">
            <p>The following technologies were used in the creation of Geopulse.</p>
            <ul className="technology__list">
              <li>
                <a rel="external" href="https://nodejs.org/en/" title="Node.js" target="_blank">
                  Node.js
                </a>
              </li>
              <li>
                <a rel="external" href="https://expressjs.com/" title="Express" target="_blank">
                  Express
                </a>
              </li>
              <li>
                <a rel="external" href="https://ifconfig.io/" title="ifconfig.io" target="_blank">
                  ifconfig.io
                </a>
              </li>
              <li>
                <a
                  rel="external noopener noreferrer"
                  href="https://freegeoip.net/"
                  title="freegeoip.net"
                  target="_blank"
                >
                  freegeoip.net
                </a>
              </li>
              <li>
                <a
                  rel="external noopener noreferrer"
                  href="https://developers.google.com/maps/"
                  title="Google Maps"
                  target="_blank"
                >
                  Google Maps
                </a>
              </li>
              <li>
                <a
                  rel="external noopener noreferrer"
                  href="https://www.wunderground.com/weather/api/"
                  title="Weather Underground"
                  target="_blank"
                >
                  Weather Underground
                </a>
              </li>
              <li>
                <a
                  rel="external noopener noreferrer"
                  href="https://www.instagram.com/developer/"
                  title="Instagram"
                  target="_blank"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  rel="external noopener noreferrer"
                  href="https://developer.twitter.com/"
                  title="Twitter"
                  target="_blank"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  rel="external noopener noreferrer"
                  href="https://developers.google.com/youtube/"
                  title="YouTube"
                  target="_blank"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a rel="external" href="https://www.heroku.com/" title="Heroku" target="_blank">
                  Heroku
                </a>
              </li>
              <li>
                <a
                  rel="external noopener noreferrer"
                  href="https://www.cloudflare.com/"
                  title="Cloudflare"
                  target="_blank"
                >
                  Cloudflare
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default {
  component: AboutPage,
};
