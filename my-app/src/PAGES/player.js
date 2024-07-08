import React, { useEffect, useState } from "react";
import apiClient from "../spotify"; // Assuming this is where apiClient is defined
import APIKit from "../spotify";
import "./player.css";
import Queue from "../COMPONENTS/queue";
import Songcard from "../COMPONENTS/Songcard/songcard";
import AudioPlayer from "../COMPONENTS/AudioPlayer/audioplayer";
import { useLocation } from "react-router-dom"; // Import useLocation from react-router-dom

export default function Player() {
    const [track, setTrack] = useState([]);
    const [currentTrack, setCurrentTrack] = useState({});
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [loading, setLoading] = useState(false); // Loading state
    const [trend, setTrend] = useState([]); // State for trending albums

    const location = useLocation(); // Use useLocation hook to access location
    let res;
    // Effect to fetch trending albums when location.state.type is "album"
    useEffect(() => {
        if (location.state?.type === "album") {
            APIKit.get("browse/new-releases")
                .then((response) => {
                    setTrend(response.data.albums.items || []);
                    // console.log("Trending Albums:", response.data.albums.items || []); // Log fetched data to understand its structure
                })
                .catch((error) => {
                    console.error("Error fetching trending albums:", error);
                });
        }
    }, [location.state?.type]); // Run this effect whenever location.state.type changes

    // Effect to fetch tracks based on location.state
    useEffect(() => {
        const fetchTracks = async () => {
            setLoading(true); // Set loading state to true
            try {
                
                if (location.state?.type === "playlist") {
                    res = await apiClient.get(`playlists/${location.state?.id}/tracks`);
                } else if (location.state?.type === "album") {
                    res = await apiClient.get(`albums/${location.state?.id}/tracks`);
                } else if (location.state?.type === "trending") {
                    res = await apiClient.get('browse/new-releases');
                    
                }

                if (res && res.data.items) {
                    setTrack(res.data.items.map(item => ({ track: item.track || item }))); // Normalize the response to match the expected format
                    setCurrentTrack(res.data.items[0]?.track || res.data.items[0] || {}); // Ensure setCurrentTrack gets a valid object or default to empty object
                    // console.log(res.data.items);
                    
                }
                
            } catch (error) {
                console.error("Error fetching tracks:", error);
            } finally {
                setLoading(false); // Set loading state to false once fetching is done

            }
        };

        if (location.state) {
            fetchTracks();
        }
    }, [location]); // Run this effect whenever location changes

    useEffect(() => {
        if (track.length > 0 && track[currentIndex]) {
            setCurrentTrack(track[currentIndex]?.track || {}); // Ensure setCurrentTrack gets a valid object or default to empty object
        }
    }, [currentIndex, track]);

    if (loading) {
        return <div>Loading...</div>; // Render a loading indicator while tracks are being fetched
    }
    

    return (
        <div className="base-style">
            <div className="right-player-body">
                <Songcard album={currentTrack.album} currentTrack={currentTrack} trend={trend} res={location.state?.id} />
                <Queue track={track} setCurrentIndex={setCurrentIndex} />
            </div>
            <div className="space"></div>
            <div className="left-player-body">
                <AudioPlayer
                    currentTrack={currentTrack}
                    album={currentTrack.album || {}} // Ensure album is provided as an empty object if it's undefined
                    isPlaying={isPlaying} // Pass isPlaying state
                    setIsPlaying={setIsPlaying} // Pass setIsPlaying function
                    setCurrentIndex={setCurrentIndex}
                    currentIndex={currentIndex}
                    total={track}
                    trend={trend}
                    res={location.state?.id}
                />
            </div>
        </div>
    );
}
