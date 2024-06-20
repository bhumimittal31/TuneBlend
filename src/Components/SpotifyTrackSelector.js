// frontend/src/components/SpotifyTrackSelector.js
import React, { useState } from 'react';
import axios from 'axios';

const SpotifyTrackSelector = ({ accessToken, onTrackSelect }) => {
    const [query, setQuery] = useState('');
    const [tracks, setTracks] = useState([]);
    const [error, setError] = useState('');

    const handleSearch = async (e) => {
        e.preventDefault();
        if (!query) return;

        try {
            const response = await axios.get('https://api.spotify.com/v1/search', {
                headers: {
                    'Authorization': `Bearer ${accessToken}`,
                },
                params: {
                    q: query,
                    type: 'track',
                    limit: 10,
                },
            });
            console.log('Spotify API response', response.data);
            setTracks(response.data.tracks.items);
            setError('');
        } catch (err) {
            setError('Failed to fetch tracks. Please try again.');
        }
    };
    const handleTrackSelect = (track) => {
        onTrackSelect(track);
    };

    return (
        <div>
            {/* <form onSubmit={handleSearch}> */}
            <input
                style={{borderRadius: '10px'}}
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search for a track"
            />
            <button type="button" onClick={handleSearch} style={{backgroundColor:'black' , color:'white',borderRadius: '10px'}}>Search</button>
            {/* </form> */}
            {error && <p>{error}</p>}
            <ul>
                {tracks.map((track) => (
                    <li key={track.id} onClick={() => handleTrackSelect(track)}>
                        {track.name} by {track.artists[0].name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SpotifyTrackSelector;
