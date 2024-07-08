import React from "react";
import "./albumimg.css";

export default function AlbumImg({ url }) {
    return (
        <div className="album-img">
            <div className="both-img">
            <img src={url} alt="play-img" className="play-img" />
            <img src={url} alt="play-img-shadow" className="play-img-shadow" />
            </div>
        </div>
    );
}