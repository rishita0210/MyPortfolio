// import React from "react";
// import { Link } from "react-scroll";

// const Navbar = () => {
//     return (
//         <nav className="w-full bg-black border-b border-gray-500 p-4 flex justify-between items-center z-50">
//             <div className="cursor-pointer">
//                 <img src="/img/logo.jpg" alt="Logo" className="h-18" />
//             </div>
//             <ul className="flex space-x-6 text-xl mr-5.5" style={{ fontFamily: "Arial, sans-serif" }}>
//                 {[
//                     { name: "Projects", id: "Projects" },
//                     { name: "About", id: "Profile" },
//                     { name: "Contact", id: "contact" },
//                 ].map((item, index) => (
//                     <li key={index}>
//                         <Link
//                             to={item.id}
//                             smooth={true}
//                             duration={700}
//                             offset={-70}
//                             className="cursor-pointer hover:text-[#C0C0C0] hover:border-b-2 hover:border-[#C0C0C0] hover:shadow-[0_2px_10px_#C0C0C0] transition duration-300"
//                         >
//                             {item.name}
//                         </Link>
//                     </li>
//                 ))}
//             </ul>
//         </nav>
//     );  
// };

// export default Navbar;


import React, { useState } from "react";
import { Link } from "react-scroll";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-black border-b border-gray-500 p-4 fixed top-0 left-0 z-50">
     
            <div className="flex justify-between items-center">
     
                <div className="cursor-pointer">
                    <img src="/img/logo.jpg" alt="Logo" className="h-16" />
                </div>

                {/* Desktop Navigation */}
                <ul className="hidden md:flex space-x-6 font-semibold text-sm mr-5" style={{ fontFamily: "Arial, sans-serif" }}>
                    {[
                        { name: "Projects", id: "Projects" },
                        { name: "About", id: "Profile" },
                        { name: "Contact", id: "contact" },
                    ].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.id}
                                smooth={true}
                                duration={1500} 
                                offset={-70}
                                className="cursor-pointer hover:text-[#C0C0C0] hover:border-b-2 hover:border-[#C0C0C0] hover:shadow-[0_2px_10px_#C0C0C0] transition duration-500"
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

           
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
                        {isOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

      
            {isOpen && (
                <ul className="absolute top-16 left-0 w-full bg-black flex flex-col items-center space-y-4 py-4 md:hidden">
                    {[
                        { name: "Projects", id: "Projects" },
                        { name: "About", id: "Profile" },
                        { name: "Contact", id: "contact" },
                    ].map((item, index) => (
                        <li key={index}>
                            <Link
                                to={item.id}
                                smooth={true}
                                duration={1500}
                                offset={-70}
                                className="text-white text-xl cursor-pointer hover:text-[#C0C0C0] transition duration-500"
                                onClick={() => setIsOpen(false)} // Close menu on click
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </nav>
    );
};

export default Navbar;





