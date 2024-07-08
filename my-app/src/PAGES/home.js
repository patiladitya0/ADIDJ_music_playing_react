import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Favorite from "./favorite";
import Feed from "./feed";
import Library from "./library";
import Player from "./player";
import Trending from "./trending";
import "./home.css";
import Sidebar from "../COMPONENTS/SIDEBAR/sidebar";
import Loginpage from "../AUTH/login";
import { setClientToken } from "../spotify";

export default function Home() {
    const [token, setToken] = useState("");

    useEffect(() => {
        const token = window.localStorage.getItem("token");
        const hash = window.location.hash;
        window.location.hash =""; // to remove token display from the url
        if (!token && hash) {

            // console.log(hash.split("&")[0].split("=")[1])  
            const _token = hash.split("&")[0].split("=")[1];
            window.localStorage.setItem("token", _token);  // stores the value of the found token in the local windows localstorage {to access it inspect/application/localstoreage/localhost/3000}
            setToken(_token);
            setClientToken(_token);
        } else {
            setToken(token);
            setClientToken(token);
        }

    }, []);
    return (!token ?  //condition is added if token is not present it will take us to login screen else to the rest of the pages
        <Loginpage /> :
        <Router>
            <div className="main-body">

                <Sidebar />
                <Routes>
                    {/* <Route path="/" element={<Favorite />} /> */}
                    {/* <Route path="/feed" element={<Feed />} /> */}
                    <Route path="/player" element={<Player />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/trending" element={<Trending />} />
                </Routes>
            </div>

        </Router>

    );
}

