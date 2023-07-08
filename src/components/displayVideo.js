import React from 'react';

export const YouTubeVideo = ({ videoId, title, views }) => {
    const iframeSrc = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <>
        <div>
          <iframe
            width="400"
            height="250"
            src={iframeSrc}
            title="YouTube Video"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
          <h3>{title}</h3>
          <p>Views: {views}</p>
        </div>
      </>
    );
  };
  