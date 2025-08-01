import React from 'react';

export default function Lecture({ title, src }) {
  const isYouTube = src.includes('youtube.com') || src.includes('youtu.be');
  return (
    <div className="mb-8">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      {isYouTube ? (
        <div className="relative" style={{ paddingTop: '56.25%' }}>
          <iframe className="absolute top-0 left-0 w-full h-full rounded shadow" src={src} allowFullScreen />
        </div>
      ) : (
        <video controls className="w-full rounded shadow">
          <source src={src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}