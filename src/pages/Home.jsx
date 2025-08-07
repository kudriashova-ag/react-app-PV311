import React, { useEffect, useRef } from 'react';
import video from '../assets/video/mov_bbb.mp4';

const Home = () => {
    const videoRef = useRef();

    useEffect(() => {
        videoRef.current.currentTime = localStorage.getItem('currentTime') || 0;
    }, []);

    const playVideo = () => {
        videoRef.current.play();
    }

     const pauseVideo = () => {
       videoRef.current.pause();
     };

    return (
      <div>
        <h1>Home</h1>
        <video src={video} ref={videoRef} onTimeUpdate={() => { localStorage.setItem('currentTime', videoRef.current.currentTime); }}></video>
        <button onClick={playVideo}>Play</button>
        <button onClick={pauseVideo}>Pause</button>
      </div>
    );
}

export default Home;
