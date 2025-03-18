import React from "react";

const Navbar = () => {
    return (
        <nav className="fixed top-0 left-0 w-full bg-black border-b border-gray-500 p-4 flex justify-between items-center z-50">
            <div className="cursor-pointer">
                <img src="/img/logo.jpg" alt="Logo" className="h-18" />
            </div>
            <ul className="flex space-x-6 text-xl mr-5.5" style={{ fontFamily: "Arial, sans-serif" }}>
                {['Projects', 'About', 'Contact'].map((item, index) => (
                    <li
                        key={index}
                        className="cursor-pointer hover:text-[#C0C0C0] hover:border-b-2 hover:border-[#C0C0C0] hover:shadow-[0_2px_10px_#C0C0C0] transition duration-300"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </nav>
    );
};

export default Navbar;


