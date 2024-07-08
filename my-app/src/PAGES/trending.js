import React, { useEffect, useState } from "react";
import APIKit from "../spotify";
import "./trending.css";
import { FaCirclePlay } from "react-icons/fa6";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";

export default function Trending() {
    const [trending, setTrending] = useState(null);


    useEffect(() => {
        APIKit.get("browse/new-releases")
            .then((response) => {
                setTrending(response.data.albums.items);
                console.log("Trending Albums:", response.data.albums.items); // Log fetched data to understand its structure
            })
            .catch((error) => {
                console.error("Error fetching trending albums:", error);
            });
    }, []);

    const navigate = useNavigate();

    const playAlbum = (id) => {
        navigate("/player", { state: { id: id, type: "album" } }); // Navigate to player with album id and type
    };

   


    return (
        <div className="base-style">
            <div className="trending-container">
                {trending?.map((album) => (
                    <div className="trending-block"
                        key={album.id}
                        
                        onClick={() => playAlbum(album.id)}>
                        <img
                        key={album.images}
                            src={album.images[0].url}
                            className="trending-photo"
                            alt={album.name}
                        />
                        <p className="trending-Name">{album.name}</p>
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
