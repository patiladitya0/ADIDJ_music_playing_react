import React from "react";
import "./control.css";
import { FaPlay } from "react-icons/fa";
import { IconContext } from "react-icons";
import { MdSkipPrevious } from "react-icons/md";
import { CgPlayTrackNext } from "react-icons/cg";
import { FaPause } from "react-icons/fa";

export default function Controls({ handlePrev, handleNext, isPlaying, setIsPlaying }) {
    return (
        <IconContext.Provider value={{ size: "35px", color: "#ffffff" }}>
            <div className="control-container">
                <div className="action-btn" onClick={handlePrev}>
                    <MdSkipPrevious />
                </div>

                <div className="ply-pau-btn"
                    onClick={() => setIsPlaying(!isPlaying)}>
                    {isPlaying ? <FaPause /> : <FaPlay />}
                </div>

                <div className="action-btn" onClick={handleNext}>
                    <CgPlayTrackNext />
                </div>
            </div>
        </IconContext.Provider>
    );
}
