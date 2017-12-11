import React from "react";
import Loading from "../components/Loading";

class Videos extends React.Component {
  renderVideos = () => {
    const collection = this.props.videos.collection;
    return collection.map(video => {
      const { id: { videoId }, snippet: { title, thumbnails: { high: image } } } = video;
      return (
        <li key={videoId} className="videos__video">
          <div className="videos__image" style={{ backgroundImage: `url(${image.url})` }}>
            <img src={image.url} height={image.width} width={image.width} alt={title} />
          </div>
          <div className="videos__title">{title}</div>
        </li>
      );
    });
  };
  renderContent = () => {
    return (
      <div className="content">
        <ul className="videos__list">{this.renderVideos()}</ul>
      </div>
    );
  };
  render() {
    return (
      <section className="section section--spacing section--bg-earth-darker videos">
        <div className="content-container content-container--grid-spacing">
          <div className="videos__content">
            <h1 className="section__title">Videos</h1>

            {this.props.ready ? this.renderContent() : <Loading />}

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
