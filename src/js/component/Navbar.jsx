import React from "react"

const Navbar = () => {
    return (
        <div className="w-full h-[80px] bg-black text-white ">
            <a href="/" className="siteTitle max-w[1480px] m-auto w-full h-full flex justify-between items-center">Start Bootstrap</a>
                <ul className="list-unstyled flex gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
        </div>
    )
}

export default Navbar