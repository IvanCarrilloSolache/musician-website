import React from 'react';
import './Music.css'
import album from '../../../assets/album.jpg';

const Music = () => (
<div>
    <h1>MUSIC BY METHOD</h1>
    <div style={{backgroundColor: 'red'}}>
        <div className="music-section" style={{backgroundColor: 'green'}}>
            
            <div className="feauture-track">
                <div className="album-img">
                    <img src={album} alt="album image" />
                </div>
                <div className="feature-album">
                    <p>Featured album</p>
                    <h3>ALBUM TITLE</h3>
                    <p>album details</p>
                </div>
            </div>
            <div className="album-details">
            <div className="grid-item"><p>album</p><h2>album name</h2></div>
            <div className="grid-item"><p>album</p><h2>album name</h2></div>
            <div className="grid-item"><p>album</p><h2>album name</h2></div>  
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            <div className="grid-item"><h4>song title</h4><p>album title</p><p>song length</p></div>
            
            
        </div>
            
        </div>
    </div>
</div>
);

export default Music;