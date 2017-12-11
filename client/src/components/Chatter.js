import React from "react";
import { getTwitterUserUrl, setupTweetText } from "../helpers/chatter";
import Loading from "../components/Loading";

class Chatter extends React.Component {
  renderChatter = () => {
    const collection = this.props.chatter.collection;
    return collection.map(status => {
      let originalStatus = {};
      if (status.retweeted_status) {
        originalStatus = status;
        status = status.retweeted_status;
      }
      const { id, user: { screen_name } } = status;

      return (
        <li key={id} className="chatter__status">
          <div className="chatter__text" dangerouslySetInnerHTML={{ __html: setupTweetText(status) }} />
          <div className="chatter__details">
            {status.retweeted_status && (
              <div className="status__rt">
                RT /{" "}
                <a
                  rel="external"
                  href={getTwitterUserUrl(originalStatus.user.screen_name)}
                  title={`Follow ${originalStatus.user.screen_name} on Twitter`}
                  target="_blank"
                >
                  @{screen_name}
                </a>
              </div>
            )}
            <div className="status__username">
              <a
                rel="external"
                href={getTwitterUserUrl(screen_name)}
                title={`Follow ${screen_name} on Twitter`}
                target="_blank"
              >
                @{screen_name}
              </a>
            </div>
          </div>
        </li>
      );
    });
  };
  renderContent = () => {
    return (
      <div className="content">
        <ul className="chatter__list">{this.renderChatter()}</ul>
      </div>
    );
  };
  render() {
    return (
      <section className="section section--spacing section--bg-earth-dark chatter">
        <div className="content-container content-container--grid-spacing">
          <div className="chatter__content">
            <h1 className="section__title">Chatter</h1>

            {this.props.ready ? this.renderContent() : <Loading />}

            <a rel="external" href="https://www.twitter.com/" className="section__attribution" target="_blank">
              Powered by Twitter
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Chatter;
