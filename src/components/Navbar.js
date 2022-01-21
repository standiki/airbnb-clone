import React from "react"

export default function Navbar() {
    return (
        <nav>
            <img src={process.env.PUBLIC_URL + "assets/airbnb-logo.png"} alt="airbnb logo" className="nav--logo" />
        </nav>
    )
}