import React from "react";

export default function Card(props) {
    return (
        <div className="card">
            <img className="card--image" src={props.ele.image} />
            <div className="card--details">
                <h4 className="card--details-location">{props.ele.location}</h4>
                <h2 className="card--details-title">{props.ele.title}</h2>
                <p className="card--details-Date">{props.ele.Date.From} - {props.ele.Date.To}</p>
                <p className="card--details-description">{props.ele.description}</p>
            </div>
        </div>
    )
}