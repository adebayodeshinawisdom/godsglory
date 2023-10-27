import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader';

function LiveVideo() {
  const [videoData, setVideoData] = useState([]);

  const fetchChannelVideos = async (channelId) => {
    const part = 'snippet';
    const maxResults = 1;
    const type = 'video';
    const apiKey = 'AIzaSyB5kDGlj_ez1SQBHUO0lSusWZalKAEJeRw'; // Replace with your actual API key
    const eventType = 'live'
    const apiUrl = `https://www.googleapis.com/youtube/v3/search?part=${part}&maxResults=${maxResults}&type=${type}&eventType=${eventType}&channelId=${channelId}&key=${apiKey}`;


    const response = await axios.get(apiUrl);
    return response.data;
  };

  useEffect(() => {
    const fetchChannelLiveVideos = async () => {
      try {
        const channelId = 'UCT2tbCh0APZOTgBh2eMSHeg'; // Replace with the actual channel ID
        const videos = await fetchChannelVideos(channelId);
        setVideoData(videos);
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    };

    fetchChannelLiveVideos();
  }, []);

  if (videoData.length === 0) {
    return <p>Loading...</p>;
  }

  const video = videoData.items[0]; // Assuming you want the first result
  const videoId = video.id.videoId;
  const videoUrl = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div>
      <iframe
        width="560"
        height="315"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
        title="Live Video"
      ></iframe>
    </div>
  );
}

export default LiveVideo;
