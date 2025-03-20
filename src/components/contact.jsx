
// "use client";
// import React from "react";

// const Contact = () => {
//   return (
//     <div className="flex flex-col mt-50 md:flex-row items-center justify-center px-6 py-16 md:py-24 space-y-12 md:space-y-0 md:space-x-16">
//       {/* Left Section */}
//       <div className="text-center md:text-left max-w-lg">
//         {/* Heading */}
//         <h1 className="font-bold text-4xl md:text-5xl lilita-one bg-gradient-to-r 
//              from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
//           Get In Touch
//         </h1>

//         {/* Subtext */}
//         <p className="font-semibold text-base md:text-lg text-white leading-relaxed">
//           I'm always open to new opportunities and collaborations! <br />
//           Whether you just want to connect or discuss a development project, feel free to reach out.
//         </p>

//         {/* Email */}
//         <div className="mt-8 text-lg">
//           <h2>
//             <a
//               href="mailto:rishitadixit02@gmail.com"
//               className="text-gray-400 font-bold hover:text-orange-500 transition-all duration-300"
//             >
//               rishitadixit02@gmail.com
//             </a>
//           </h2>
//         </div>
//       </div>

//       {/* Right Section: Image */}
//       <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
//         <img
//           src="/img/email.gif"
//           alt="Animated Email"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </div>
//   );
// };

// export default Contact;
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const Contact = () => {
  const titleRef = useRef(null);

  useEffect(() => {
    const title = titleRef.current;

    // Apply "giggle" animation on hover
    const handleMouseEnter = () => {
      gsap.to(title, {
        x: 3,
        y: 3,
        rotation: 2,
        repeat: 3,
        yoyo: true,
        duration: 0.1,
        ease: "power1.inOut",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(title, { x: 0, y: 0, rotation: 0, duration: 0.2 });
    };

    title.addEventListener("mouseenter", handleMouseEnter);
    title.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      title.removeEventListener("mouseenter", handleMouseEnter);
      title.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div id="contact" className="flex flex-col mt-30 md:flex-row items-center justify-center px-6 py-16 md:py-24 space-y-12 md:space-y-0 md:space-x-16">
      {/* Left Section */}
      <div className="text-center md:text-left max-w-lg">
        {/* Heading with Giggle Animation */}
        <h1
          ref={titleRef}
          className="font-bold text-4xl md:text-5xl lilita-one bg-gradient-to-r 
                   from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6 inline-block cursor-pointer"
        >
          Get In Touch
        </h1>

        {/* Subtext */}
        <p className="font-lg text-base md:text-lg text-white leading-relaxed">
          I'm always open to new opportunities and collaborations! <br />
          Whether you just want to connect or discuss a development project, feel free to reach out.
        </p>

        {/* Email */}
        <div className="mt-8 text-lg">
          <h2>
            <a
              href="mailto:rishitadixit02@gmail.com"
              className="text-gray-400 font-bold hover:text-orange-500 transition-all duration-300"
            >
              rishitadixit02@gmail.com
            </a>
          </h2>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full max-w-sm md:max-w-md lg:max-w-lg h-64 md:h-80 overflow-hidden rounded-lg shadow-lg">
        <img
          src="/img/email.gif"
          alt="Animated Email"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;
