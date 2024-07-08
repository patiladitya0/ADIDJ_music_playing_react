import React from "react";
import "./songcard.css";
import AlbumImg from "./albumimg";
import AlbumInfo from "./albuminfo";

export default function Songcard({ album, currentTrack, trend ,res }) {

    
    // Find the matching album in trend based on currentTrack.album.id
    const matchingAlbum = trend.find(item => item.id === res);

    // Use optional chaining to safely access image URL
    const albumImageUrl = matchingAlbum?.images[0]?.url || ""; 

    return (
        <div className="song-card-body">
            <div className="ratio-img">
                <AlbumImg url={album?.images[0]?.url || albumImageUrl} />
            </div>
            <div className="ratio-info">
                <AlbumInfo album={album} currentTrack={currentTrack} />
            </div>
        </div>
    );
}
