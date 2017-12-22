import React from 'react';

class ChatterTweetMedia extends React.Component {
  renderPhoto = () => {
    const {
      entity: {
        expanded_url: href,
        media_url_https: src,
        sizes: { large: { h: height, w: width } },
      },
    } = this.props;
    return (
      <a rel="external" href={href} target="_blank">
        <img src={src} height={height} width={width} />
      </a>
    );
  };
  render() {
    const { entity } = this.props;
    let content = '';
    switch (entity.type) {
      case 'photo':
        content = this.renderPhoto();
        break;
    }
    return <div className="chatter__media">{content}</div>;
  }
}

export default ChatterTweetMedia;
