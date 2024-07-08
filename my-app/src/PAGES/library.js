import React, { useEffect, useState } from "react";
import APIKit from "../spotify";
import "./library.css";
import { FaCirclePlay } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export default function Library() {
    const [playlist, setPlaylist] = useState(null);

    useEffect(() => {
        APIKit.get("me/playlists")
            .then(response => {
                setPlaylist(response.data.items);
            })
            .catch(error => {
                console.error(error);
            });
    }, []);

    const navigate = useNavigate();

    const playPlaylist = (id) => {
        navigate("/player", { state: { id: id, type: 'playlist' } });
    };

    return (
        <div className="base-style">
            <div className="library-body">
                {playlist?.map((playlist) => (
                    <div className="playlist-block" key={playlist.id} onClick={() => playPlaylist(playlist.id)}>
                        <img src={playlist.images[0].url} className="playlist-Image" alt="playlistIMG"></img>
                        <p className="playlist-Name">{playlist.name}</p>
                        <p className="playlist-Subname">{playlist.tracks.total} Songs</p>
                        <div className="play-btn">
                            <IconContext.Provider value={{ size: "40px", color: "#F5F5DC" }}>
                                <FaCirclePlay />
                            </IconContext.Provider>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
