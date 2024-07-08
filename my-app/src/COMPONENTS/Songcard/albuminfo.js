import React from "react";
import "./albuminfo.css";

export default function AlbumInfo({ album , currentTrack }) {
    // console.log(album);

    const artists = [];
    album?.artists?.forEach(element => {
        artists.push(element.name);
    });

    return (
        <div>
            <div className="playing-txt">
                <p>NOW PLAYING</p>
            </div>
            
            <div className="album-container">

                <div className="album-name" >
                    <p>{currentTrack?.name}</p>
                </div>

                {/* <div className="album-name">
                    <p>{album?.name}</p>
                </div> */}

                {/* <div className="album-artists">
                    <p>Artists: {artists?.join(", ")}</p>
                </div> */}
            </div>
        </div>
    );
}
