import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <nav className="w-full bg-black border-b border-gray-500 p-4 flex justify-between items-center z-50">
            <div className="cursor-pointer">
                <img src="/img/logo.jpg" alt="Logo" className="h-18" />
            </div>
            <ul className="flex space-x-6 text-xl mr-5.5" style={{ fontFamily: "Arial, sans-serif" }}>
                {[
                    { name: "Projects", id: "projects" },
                    { name: "About", id: "about" },
                    { name: "Contact", id: "contact" },
                ].map((item, index) => (
                    <li key={index}>
                        <Link
                            to={item.id}
                            smooth={true}
                            duration={700}
                            offset={-70}
                            className="cursor-pointer hover:text-[#C0C0C0] hover:border-b-2 hover:border-[#C0C0C0] hover:shadow-[0_2px_10px_#C0C0C0] transition duration-300"
                        >
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );  
};

export default Navbar;


