import React from 'react';
import Loading from './Loading';
import ChatterTweet from './ChatterTweet';
import chatterProp from '../../../data/fixtures/chatter';

class Chatter extends React.Component {
  renderChatter = () => (
    <ul className="chatter__list">
      {this.props.chatter.collection.map(status => <ChatterTweet key={status.id} tweet={status} />)}
    </ul>
  );
  renderContent = () => (
    <div className="content">
      {this.props.chatter.collection.length ? (
          this.renderChatter()
        ) : (
          <p className="text--center">No chatter found</p>
        )}
    </div>
  );
  render() {
    return (
      <section className="section section--spacing section--bg-earth-dark chatter">
        <div className="content-container content-container--grid-spacing">
          <div className="chatter__content">
            <h1 className="section__title">Chatter</h1>

            {this.props.ready && this.props.chatter ? this.renderContent() : <Loading />}

            <a
              rel="external"
              href="https://www.twitter.com/"
              className="section__attribution"
              target="_blank"
            >
              Powered by Twitter
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Chatter;
