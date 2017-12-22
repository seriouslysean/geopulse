import React from 'react';
import Loading from '../components/Loading';
import VideosVideo from './VideosVideo';

class Videos extends React.Component {
  renderVideos = () => (
    <ul className="videos__list">
      {this.props.videos.collection.map(video => <VideosVideo key={video.id.videoId} video={video} />)}
    </ul>
  );
  renderContent = () => (
    <div className="content">
      {this.props.videos.collection.length ? (
          this.renderVideos()
        ) : (
          <p className="text--center">No videos found</p>
        )}
    </div>
  );
  render() {
    return (
      <section className="section section--spacing section--bg-earth-darker videos">
        <div className="content-container content-container--grid-spacing">
          <div className="videos__content">
            <h1 className="section__title">Videos</h1>

            {this.props.ready && this.props.videos ? this.renderContent() : <Loading />}

            <a
              rel="external"
              href="https://www.youtube.com/"
              className="section__attribution"
              target="_blank"
            >
              Powered by YouTube
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Videos;
