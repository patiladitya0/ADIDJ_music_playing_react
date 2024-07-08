import React, { useRef, useState, useEffect } from "react";
import "./audioplayer.css";
import ProgressCircle from "./progresscircle";
import Waves from "./waves";
import Controls from "./control";

export default function AudioPlayer({ currentTrack, album, isPlaying, setIsPlaying, setCurrentIndex, total, currentIndex , res , trend}) {
    const [trackProgress, setTrackProgress] = useState(0);
    const [audioSrc, setAudioSrc] = useState("");

    const artists = album?.artists?.map(artist => artist.name).join(", ");

    const audioRef = useRef(new Audio());
    const intervalRef = useRef();

    const { duration } = audioRef.current;

    const currentPercentage = duration ? (trackProgress / duration) * 100 : 0;

    const startTimer = () => {
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                handleNext();
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, 1000);
    };

    useEffect(() => {
        if (total[currentIndex]?.track.preview_url) {
            setAudioSrc(total[currentIndex]?.track.preview_url);
            // console.log("Selected Track:", total[currentIndex]); // Log selected track data
        }
    }, [currentIndex, total]);

    useEffect(() => {
        audioRef.current.pause();
        audioRef.current = new Audio(audioSrc);

        setTrackProgress(audioRef.current.currentTime);

        if (isPlaying) {
            audioRef.current.play().catch(error => {
                console.log("Play was interrupted by pause:", error);
            });
            startTimer();
        } else {
            clearInterval(intervalRef.current);
            audioRef.current.pause();
        }

        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, [audioSrc, isPlaying]);

    const handleNext = () => {
        if (currentIndex < total.length - 1) {
            setCurrentIndex(currentIndex + 1);
        } else {
            setCurrentIndex(0);
        }
    };

    const handlePrev = () => {
        if (currentIndex - 1 < 0) {
            setCurrentIndex(total.length - 1);
        } else {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const addZero = (n) => {
        return n > 9 ? "" + n : "0" + n;
    };
console.log("res", res)
console.log("trend",trend)


const matchingAlbums = trend.find(item => item.id === res);
const albumImageUrl = matchingAlbums?.artists?.map(artist => artist.name).join(", "); 


    return (
        <div className="player-container">
            <div className="circle">
                <ProgressCircle
                    percentage={currentPercentage}
                    isPlaying={isPlaying}
                    size={275}
                    color="#ef2f52"
                />
                <div>
                    <p className="album-title">Album: {album?.name || "Not-Available"}</p>
                </div>

                <div className="album-title1">
                    <p>Artists: {artists || albumImageUrl}</p>
                </div>

                <div className="Song-duration">
                    <p className="duration">
                        {addZero(Math.floor(trackProgress / 60))}:{addZero(Math.floor(trackProgress % 60))}
                    </p>
                    <Waves isPlaying={isPlaying} />
                    <p className="duration">
                        {addZero(Math.floor(currentTrack.duration_ms / 60000))}:{addZero(Math.floor((currentTrack.duration_ms % 60000) / 1000))}
                    </p>
                </div>
                <div>
                    <Controls
                        isPlaying={isPlaying}
                        setIsPlaying={() => setIsPlaying(!isPlaying)} // Ensure setIsPlaying is defined
                        handleNext={handleNext}
                        handlePrev={handlePrev}
                        total={total}
                    />
                </div>
            </div>
        </div>
    );
}
