import React from 'react';
import profilePicture from "../../../static/assets/images/Photo-of-me.jpg";

export default function() {
    return (
        <div className="content-page-wrapper">
            <div 
            className="left-column"
            style={{
                background: "url(" + profilePicture + ") no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            }}
            />
            <div className="right-column">
                Bio goes here as well as skills and experiences
            </div>
        </div>
    );
}