// frontend/src/App.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { HashRouter as Router, Route, Routes,} from 'react-router-dom'; //change
import UploadForm from './Components/UploadForm';
import Preview from './Components/Preview';
import Navbar from './Components/Navbar';
import Download from './Components/Download'
import Home from './Components/Home';


function App() {
    const [videoFile, setVideoFile] = useState(null);
    const [musicTrack, setMusicTrack] = useState(null);
    const [accessToken, setAccessToken] = useState(null);
    const [processedVideo, setProcessedVideo] = useState(null);
    const [selectTrack, setSelectedTrack] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const access_token = params.get('access_token');
        if (access_token) {
            sessionStorage.setItem('access_token', access_token);
            setAccessToken(access_token);
        } else {
            const token = sessionStorage.getItem('access_token');
            if (token) {
                setAccessToken(token);
            }
        }
    }, []);

    const handleSubmit = async (e, videoFile, musicTrack, selectTrack) => {
        console.log("Submit button clicked");
        e.preventDefault();
        if (!videoFile || (!musicTrack && !selectTrack)) {
            alert('Please upload both video and music files and select the Spotify track');
            return;
        }
        const formData = new FormData();
        formData.append('video', videoFile);

        if (selectTrack) {
            try {
                const trackResponse = await axios.get(`https://api.spotify.com/v1/tracks/${selectTrack.id}`, {
                    headers: {
                        Authorization: `Bearer ${accessToken}`
                    }
                });
                const previewUrl = trackResponse.data.preview_url;
                const preventResponse = await axios.get(previewUrl, { responseType: 'blob' });
                const spotifytrack = new File([preventResponse.data], 'spotify_track.mp3', { type: 'audio/mpeg' });
                formData.append('music', spotifytrack);
                // console.log(formData.get('music'));              
            } catch (error) {
                console.error('Error fetching spotify track priview:', error);
                return;
            }
        } else {
            formData.append('music', musicTrack)
            // console.log(formData.get('music'));
        }

        try {
            console.log('Uploading files...');
            const response = await axios.post('http://localhost:5000/upload', formData, {
                responseType: 'blob',
            });
            console.log('Files uploaded successfully', response);
            setProcessedVideo(URL.createObjectURL(response.data));
        } catch (error) {
            console.error('Error uploading files', error);
        }
    };

    const handleLogin = () => {
        window.location.href = 'http://localhost:5000/login';
    };


    return (
        <Router>
            <Navbar accessToken={accessToken} handleLogIn={handleLogin} />
            <Routes>
                <Route path="/" element={<Home></Home>}></Route>
                <Route path="/upload" element={
                    <div>
                        {!accessToken ? (null)
                            : (
                                <>
                                    <UploadForm accessToken={accessToken} onSubmit={handleSubmit} setVideoFile={setVideoFile} setMusicTrack={setMusicTrack} setSelectedTrack={setSelectedTrack} />
                                    {(videoFile || (musicTrack && selectTrack)) ?
                                        <Preview videoSrc={videoFile ? URL.createObjectURL(videoFile) : null} musicSrc={musicTrack ? URL.createObjectURL(musicTrack) : null} />
                                        : null}
                                    {processedVideo && (
                                        <div>
                                            <h2 style={{ textAlign: 'center' }}>ProcessedVideo</h2>
                                            <div style={{ textAlign: 'center', marginTop: '20px', display: 'flex', justifyContent:'center' , alignItems:'center'}}>
                                                <video controls width="200"><source src={processedVideo} type="video/mp4"></source></video>
                                            </div>
                                        </div>
                                    )}
                                    <Download downloadLink={processedVideo} />
                                </>
                            )}
                    </div>
                } />
            </Routes>
        </Router>
    );
}

export default App;
