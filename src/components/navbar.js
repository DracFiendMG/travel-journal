import React from "react";

export default function Navbar() {
    return (
        <nav className="navbar">
            {/* <img src="https://cdn-icons-png.flaticon.com/512/44/44386.png" className="navbar--image"></img> */}
            <div className="navbar--image"><i class="fa-solid fa-earth-americas"></i></div>
            <h1 className="navbar--title">my travel journal</h1>
        </nav>
    )
}