import React, { useEffect, useState } from 'react';
import axios from 'axios';

function LiveVideo() {
  // const [videoData, setVideoData] = useState(null);

  // const fetchChannelVideos = async (channelId) => {
  //   const part = 'snippet';
  //   const maxResults = 1;
  //   const type = 'video';
  //   const eventType = 'live'; // Filter for live videos
  //   const apiKey = 'AIzaSyB5kDGlj_ez1SQBHUO0lSusWZalKAEJeRw'; // Replace with your actual API key

  //   const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=${part}&maxResults=${maxResults}&type=${type}&eventType=${eventType}&channelId=${channelId}&key=${apiKey}`;

  //   try {
  //     const response = await axios.get(apiUrl);
  //     if (response.data.items.length > 0) {
  //       setVideoData(response.data.items[0]);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching videos:', error);
  //   }
  // };

  // useEffect(() => {
  //   const channelId = 'UCT2tbCh0APZOTgBh2eMSHeg'; // Replace with the actual channel ID
  //   fetchChannelVideos(channelId);
  // }, []);

  // if (!videoData) {
  //   return <p>Loading...</p>;
  // }

  // const videoId = videoData.id.videoId;
  // const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/live_stream?channel=UCT2tbCh0APZOTgBh2eMSHeg"
        frameBorder="0"
        allowFullScreen
        title="Live Video"
      ></iframe>
    </div>
  );
}

export default LiveVideo;
