import React from "react";
import Loading from "../components/Loading";

class Photos extends React.Component {
  renderPhotos = () => {
    const collection = this.props.photos.collection;
    return collection.map(photo => {
      const {
        id,
        caption: { text: alt },
        images: { standard_resolution: image },
        likes,
        link,
        user: { username }
      } = photo;
      return (
        <li key={id} className="photos__photo">
          <a rel="external" href={link} title={alt}>
            <div className="photos__image" style={{ backgroundImage: `url(${image.url})` }}>
              <img src={image.url} width={image.width} height={image.height} alt={alt} />
            </div>
            <div className="photos__username">{username}</div>
          </a>
        </li>
      );
    });
  };
  renderContent = () => {
    return (
      <div className="content">
        <ul className="photos__grid">{this.renderPhotos()}</ul>
      </div>
    );
  };
  render() {
    return (
      <section className="section section--spacing section--bg-earth-medium photos">
        <div className="content-container content-container--grid-spacing">
          <div className="photos__content">
            <h1 className="section__title">Photos</h1>

            {this.props.ready ? this.renderContent() : <Loading />}

            <a rel="external" href="https://www.instagram.com/" className="section__attribution" target="_blank">
              Powered by Instagram
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Photos;
