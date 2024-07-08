import React from "react";
import "./login.css";
import { loginEndpoint } from "../spotify";

export default function Loginpage(){
    return (
        <div className="login-main">
            <img src="./ADIDJ.svg"
                className="login-logo"
                alt="logo"
            />
            <a href={loginEndpoint}>
            <div className="login-btn">Log In</div>
            </a>
        </div>
    );
}