import React from 'react';

const VideosVideo = ({ video }) => {
  const { id: { videoId }, snippet: { title, thumbnails: { high: image } } } = video;
  return (
    <li className="videos__video">
      <a rel="external" href={`https://www.youtube.com/watch?v=${videoId}`} target="_blank">
        <div className="videos__image" style={{ backgroundImage: `url(${image.url})` }}>
          <img src={image.url} height={image.width} width={image.width} alt={title} />
        </div>
        <div className="videos__title">{title}</div>
      </a>
    </li>
  );
};

export default VideosVideo;
