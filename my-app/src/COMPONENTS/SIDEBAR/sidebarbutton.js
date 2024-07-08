import React from "react";
import "./sidebarbutton.css";
import { Link, useLocation } from "react-router-dom";
import {IconContext} from "react-icons";

export default function Sidebarbutton(props) {
    const location =  useLocation();
    const isActive =location.pathname === props.to;
    const iconbody = isActive ? "icon-body active" : "icon-body";
    return ( /* to set the size of the icon */
        <Link to = {props.to}>

            <div className={iconbody}>
            <IconContext.Provider value ={ {size:"20px" , className : "btn-icon"}}> 
                {props.icon}
                <p className="icon-title">{props.title}</p>
                </IconContext.Provider>
            </div>
        </Link>
    );
}