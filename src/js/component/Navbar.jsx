import React from "react"

const Navbar = () => {
    return (
        <div className="w-full h-[80px] bg-black">
            <div className="max-w[1480px] m-auto w-full h-full flex justify-between items-center">
                <h1>Start Bootstrap</h1>
            </div>
            <div className="flex items-right">
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar