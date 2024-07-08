import React from "react";
import "./queue.css";

export default function Queue({ track, setCurrentIndex }) {
    // console.log(track);

    const formatDuration = (duration_ms) => {
        const totalSeconds = duration_ms / 1000;
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = Math.floor(totalSeconds % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="queue-container">
            <div className="queue">
                <p className="queue-UpNext">UP NEXT</p>
                <div className="queue-list">
                    {track?.map((trackItem, index) => (
                        trackItem?.track && (
                            <div 
                                className="queue-item" 
                                key={trackItem.track.id}
                                onClick={() => setCurrentIndex(index)} 
                            >
                                <p className="track-name">{trackItem.track.name}</p>
                                <p className="track-time">
                                    {formatDuration(trackItem.track.duration_ms)}
                                </p>
                            </div>
                        )
                    ))}
                </div>
            </div>
        </div>
    );
}
