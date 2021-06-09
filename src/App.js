import { useState } from 'react';
import SearchForm from './components/SearchForm';
import VideoData from './components/VideoData';
import './App.css';

const API_KEY = process.env.REACT_APP_YOUTUBE_API_KEY;

function App() {
  async function searchForId(id) {
    console.log(id);
    const data = await getVideoInfo(id);
    setData(data);
  }

  async function getVideoInfo(videoId) {
    videoId = encodeURIComponent(videoId);
    const response = await fetch(`https://youtube.googleapis.com/youtube/v3/videos?id=${videoId}&key=${API_KEY}&part=snippet,statistics`, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    if (!response.ok) {
      return null;
    }
    const data = await response.json();
    if (!data.items || data.items.length === 0) {
      return null;
    }

    const item = data.items[0];
    console.log(item);
    return {
      title: item.snippet.title,
      channelTitle: item.snippet.channelTitle,
      tags: item.snippet.tags,
      thumbnail: item.snippet.thumbnails.high,
      statistics: item.statistics,
    };
  }

  const [data, setData] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Youtube Stats</h1>
      </header>
      <SearchForm searchForId={searchForId}></SearchForm>
      <VideoData data={data}></VideoData>
      <footer className="app-footer">
        <h3>Youtube Stats by Michael Truscott - 2021</h3>
      </footer>
    </div>
  );
}

export default App;