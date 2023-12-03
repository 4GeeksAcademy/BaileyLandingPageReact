import React from "react"

const Navbar = () => {
    return (
        <nav className="nav">
            <a href="/" className="siteTitle">Start Bootstrap</a>
            <ul>
                <li className="active">
                    <a href="/Home">Home</a>
                </li>
                <li className="inactive">
                    <a href="/About">About</a>
                </li>
                <li className="inactive">
                    <a href="/Services">Services</a>
                </li>
                <li className="inactive">
                    <a href="/Contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar