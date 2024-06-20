// frontend/src/components/UploadForm.js
import React, { useState } from 'react';
import SpotifyTrackSelector from './SpotifyTrackSelector';

const UploadForm = ({  accessToken, onSubmit, setVideoFile, setMusicTrack, setSelectedTrack }) => {
    const[localVideofile , setLocalVideoFile] = useState(null);
    const[loaclMusicFile , setLocalMusicFile] = useState(null);
    const[loaclSelectedTrack , setLocalSelectedTrack] = useState(null);

    const handleVideoUpload = (e)=>{
        const file = e.target.files[0];
        setLocalVideoFile(file);
        setVideoFile(file);
    };

    const handleMusicUpload=(e)=>{
        const file = e.target.files[0];
        setLocalMusicFile(file);
        setMusicTrack(file);
    };

    const handleTrackSelect = (track)=>{
        setLocalSelectedTrack(track);
        setSelectedTrack(track);
    };

    const handleSubmit = (e) =>{
        onSubmit(e,localVideofile,loaclMusicFile,loaclSelectedTrack);
    };

    return (
        <>
            <h2 style={{textAlign:'center', marginTop:'30px'}}>Upload your files below</h2>
            <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', padding:'20px', borderRadius: '10px', boxShadow: '0 0 10px rgba(0,0,0,0.1)' }}>
                <form onSubmit={handleSubmit} style={{ backgroundColor:'grey',padding:'30px' , borderRadius:'10px'}}>
                <h4>Upload the video file</h4>
                    <div className="mb-3">
                        <label htmlFor="videoFile" className="form-label" style={{fontSize:'19px', color:'blue',}}>Video File:</label>
                        <input type="file" className="form-control" name="videoFile" id="videoFile" accept="video/*" onChange={handleVideoUpload} required />
                    </div>
                    <h4 style={{marginTop:'60px'}}>Upload the music file or choose the track below</h4>
                    <div className="mb-3">
                        <label htmlFor="musicFile" className="form-label" style={{fontSize:'19px', color:'blue'}}>Music File:</label>
                        <input type="file" className="form-control" name="musicFile" id="musicFile" accept="audio/*" onChange={handleMusicUpload} />
                    </div>
                    <SpotifyTrackSelector accessToken={accessToken} onTrackSelect={handleTrackSelect}></SpotifyTrackSelector>
                    <div style={{display:'flex' , justifyContent:'center'}}>
                        <button type="submit" className="btn btn-primary" style={{ margin:'0 auto'}}>Upload and Process</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UploadForm;
