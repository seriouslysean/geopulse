import React from 'react';
import Loading from './Loading';
import PhotosPhoto from './PhotosPhoto';

class Photos extends React.Component {
  renderPhotos = () => (
    <ul className="photos__grid">
      {this.props.photos.collection.map(photo => <PhotosPhoto key={photo.id} photo={photo} />)}
    </ul>
  );
  renderContent = () => (
    <div className="content">
      {this.props.photos.collection.length ? (
          this.renderPhotos()
        ) : (
          <p className="text--center">No photos found</p>
        )}
    </div>
  );
  render() {
    return (
      <section className="section section--spacing section--bg-earth-medium photos">
        <div className="content-container content-container--grid-spacing">
          <div className="photos__content">
            <h1 className="section__title">Photos</h1>

            {this.props.ready && this.props.photos ? this.renderContent() : <Loading />}

            <a
              rel="external"
              href="https://www.instagram.com/"
              className="section__attribution"
              target="_blank"
            >
              Powered by Instagram
            </a>
          </div>
        </div>
      </section>
    );
  }
}

export default Photos;
