import React from 'react';
import './YoutubeComp.css';

const YoutubeComp = () => {
    return (
        <div className="youtube-wrapper">
            <div className="img-thumb">
                <img src="https://images6.alphacoders.com/124/1242360.jpg" alt=""/>
                <p className="time">7.12</p>
            </div>
            <p className="title">title here</p>
            <p className="desc">desc here</p>
        </div>
    )
}

export default YoutubeComp;