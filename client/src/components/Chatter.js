import React from "react";
import Loading from "./Loading";
import ChatterTweet from "./ChatterTweet";

class Chatter extends React.Component {
  renderChatter = () => {
    return (
      <ul className="chatter__list">
        {this.props.chatter.collection.map(status => {
          return <ChatterTweet key={status.id} tweet={status} />;
        })}
      </ul>
    );
  };
  renderContent = () => {
    return (
      <div className="content">
        {this.props.chatter.collection.length ? this.renderChatter() : <p className="text--center">No chatter found</p>}
      </div>
    );
  };
  render() {
    return (
      <section className="section section--spacing section--bg-earth-dark chatter">
        <div className="content-container content-container--grid-spacing">
          <div className="chatter__content">
            <h1 className="section__title">Chatter</h1>

            {this.props.ready && this.props.chatter ? this.renderContent() : <Loading />}

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
