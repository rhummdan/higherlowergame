import React from 'react';

export const YouTubeVideo = ({ videoId }) => {
    const iframeSrc = `https://www.youtube.com/embed/${videoId}`;
  
    return (
      <div>
        <h1>My YouTube Video</h1>
        <iframe
          width="640"
          height="390"
          src={iframeSrc}
          title="YouTube Video"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />
      </div>
    );
  };
  