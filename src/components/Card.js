import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.ele.image} />
            <div className="card--details">
                <div className="card--details-location">
                    <p className="card--details-place"><i className="fa-solid fa-location-dot"></i>{props.ele.location.place}</p>
                    <a href={props.ele.map} className="card--details-map">View on Google Maps</a>
                </div>
                
                <h0 className="card--details-title">{props.ele.title}</h0>
                <p className="card--details-Date">{props.ele.Date.From} - {props.ele.Date.To}</p>
                <p className="card--details-description">{props.ele.description}</p>
            </div>
        </div>
    )
}