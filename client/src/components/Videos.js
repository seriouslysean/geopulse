import React from "react";
import Loading from "../components/Loading";
import VideosVideo from "./VideosVideo";

class Videos extends React.Component {
  renderContent = () => {
    return (
      <div className="content">
        <ul className="videos__list">
          {this.props.videos.collection.map(video => {
            return <VideosVideo key={video.id.videoId} video={video} />;
          })}
        </ul>
      </div>
    );
  };
  render() {
    return (
      <section className="section section--spacing section--bg-earth-darker videos">
        <div className="content-container content-container--grid-spacing">
          <div className="videos__content">
            <h1 className="section__title">Videos</h1>

            {this.props.ready || this.props.videos ? this.renderContent() : <Loading />}

            <a rel="external" href="https://www.youtube.com/" className="section__attribution" target="_blank">
              Powered by YouTube
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Videos;
