import React from "react"

const Navbar = () => {
    return (
        <div className="w-full h-[80px] bg-black text-white ">
            <div className="max-w[1480px] m-auto w-full h-full flex justify-between items-center">
                Start Bootstrap
                <div>
                    <ul className="gap-4">
                        <li>Home</li>
                        <li>About</li>
                        <li>Services</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar