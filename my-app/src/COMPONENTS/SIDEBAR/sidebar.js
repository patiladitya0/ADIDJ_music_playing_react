import React, { useState, useEffect } from "react";
import "./sidebar.css"
import Sidebarbutton from "./sidebarbutton";
import { MdFavorite } from "react-icons/md";
import { ImFeed } from "react-icons/im";
import { MdLibraryMusic } from "react-icons/md";
import { FaPlay } from "react-icons/fa6";
import { BsFire } from "react-icons/bs";
import { FaSignOutAlt } from "react-icons/fa";
import apiClient from "../../spotify";
// icon are added through react icon library




export default function Sidebar() {
    const [image, setImage] = useState("./user.png");

    useEffect(() => {
        apiClient.get("me").then(Response => {
            // console.log(Response.data.images[0].url);  to retrive image of the user
            setImage(Response.data.images[0].url);
        })
    }, []);
    return (
        <div className="sidebar-container">
            <img
                src={image}
                className="profile-pic"
                alt="profile"
            />
            <div>
                {/* <Sidebarbutton title="Favorite" to="/" icon={<MdFavorite />} /> */}
                {/* <Sidebarbutton title="Feed" to="/feed" icon={<ImFeed />} /> */}
                
                <Sidebarbutton title="Library" to="/library" icon={< MdLibraryMusic />} />
                <Sidebarbutton title="Player" to="/player" icon={<FaPlay />} />
                <Sidebarbutton title="Trending" to="/trending" icon={<BsFire />} />
            </div>
            <Sidebarbutton title="Sign out" to="" icon={<FaSignOutAlt />} />


        </div>
    );
}