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
                <div className="name">Dayne J. Bechtold</div>
                <div className="bio">
                This is my Portfolio which I built during my coding course. I will be uploading a finalized version of my portfolio once I have completed my course.
                </div>
            </div>
        </div>
    );
}