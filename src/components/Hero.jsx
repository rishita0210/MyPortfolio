import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { AiOutlineDownload } from "react-icons/ai";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const techStack = ["React", "Node.js", "Next.js"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const heroRef = useRef(null);
  const textRef = useRef(null);
  const imgRef = useRef(null);
  const stackTextRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(heroRef.current, { opacity: 0, y: 50 }, { opacity: 1, y: 0, duration: 1, ease: "power3.out" });
    gsap.fromTo(textRef.current, { opacity: 0, x: -50 }, { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.3 });

    if (window.innerWidth >= 1024) {
      gsap.to(imgRef.current, { rotate: 360, duration: 8, repeat: -1, ease: "linear", transformOrigin: "center center" });
    }

    const interval = setInterval(() => {
      if (window.innerWidth >= 1024) {
        gsap.to(stackTextRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.inOut",
          onComplete: () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
            gsap.fromTo(stackTextRef.current, { y: -30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, ease: "power2.inOut" });
          },
        });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={heroRef} className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-black px-4 sm:px-4 md:px-12 lg:px-24 py-10 sm:py-8 transition-colors duration-500">

      {/* Text Section */}
      <div className="text-white text-center sm:mb-20 lg:text-left max-w-5xl" ref={textRef}>
        <p className="text-2xl sm:text-2xl md:text-3xl font-extrabold leading-tight text-white mb-4 lilita-one">
          Frontend Developer
        </p>

        <p className="text-gray-300 text-lg sm:text-lg font-bold mb-2 lilita-one">
          Unlock the magic in my code!
        </p>

        <p className="text-3xl sm:text-2xl md:text-4xl leading-relaxed font-bold lilita-one">
          A <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Digital Architect</span> transforming lines <br />
          of code into <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Digital Marvels</span>.
        </p>

        <a href="/resume.pdf" download="Rishita_Dixit_Resume.pdf">
          <button className="mt-6 px-6 py-3 text-lg font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform relative group">
            <span className="group-hover:opacity-0 transition-opacity duration-300">Resume</span>
            <AiOutlineDownload className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </a>
      </div>

      {/* Image & Tech Stack */}
      <div className="hidden lg:flex relative w-72 h-72 justify-center items-center ml-20">
        <div className="relative w-full h-full flex justify-center items-center">
          {/* Rotating Image */}
          <img
            ref={imgRef}
            src="/img/portfolio-illustration.png"
            alt="Animated Logo"
            className="w-full h-full object-cover rounded-lg shadow-lg "
          />

          {/* Centered Tech Stack Text */}
          <div className="absolute inset-0 flex justify-center items-center z-10">
            <p ref={stackTextRef} className="text-yellow-200 text-3xl font-semibold transition-all duration-500">
              {techStack[currentIndex]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero; 



// import React, { useState, useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { AiOutlineDownload } from "react-icons/ai";

// gsap.registerPlugin(ScrollTrigger);

// const Hero = () => {
//   const techStack = ["React", "Node.js", "Next.js"];
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const heroRef = useRef(null);
//   const textRef = useRef(null);
//   const imgRef = useRef(null);
//   const stackTextRef = useRef(null);

//   useEffect(() => {
//     gsap.fromTo(
//       heroRef.current,
//       { opacity: 0, y: 50 },
//       { opacity: 1, y: 0, duration: 1, ease: "power3.out" }
//     );
//     gsap.fromTo(
//       textRef.current,
//       { opacity: 0, x: -50 },
//       { opacity: 1, x: 0, duration: 1.2, ease: "power3.out", delay: 0.3 }
//     );

//     if (window.innerWidth >= 1024) {
//       gsap.to(imgRef.current, {
//         rotate: 360,
//         duration: 8,
//         repeat: -1,
//         ease: "linear",
//         transformOrigin: "center center",
//       });
//     }

//     const interval = setInterval(() => {
//       if (window.innerWidth >= 1024) {
//         gsap.to(stackTextRef.current, {
//           y: 30,
//           opacity: 0,
//           duration: 0.6,
//           ease: "power2.inOut",
//           onComplete: () => {
//             setCurrentIndex((prevIndex) => (prevIndex + 1) % techStack.length);
//             gsap.fromTo(
//               stackTextRef.current,
//               { y: -30, opacity: 0 },
//               { y: 0, opacity: 1, duration: 0.6, ease: "power2.inOut" }
//             );
//           },
//         });
//       }
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div
//       ref={heroRef}
//       className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-black px-6 sm:px-10 md:px-16 lg:px-24 py-10 transition-colors duration-500"
//     >
//       {/* Text Section */}
//       <div
//         className="text-white text-center lg:text-left max-w-4xl lg:max-w-2xl"
//         ref={textRef}
//       >
//         <p className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-extrabold leading-tight text-white mb-6">
//           Frontend Developer
//         </p>

//         <p className="text-gray-300 text-lg sm:text-xl md:text-2xl font-bold mb-4">
//           Unlock the magic in my code!
//         </p>

//         <p className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl leading-relaxed font-bold">
//           A{" "}
//           <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
//             Digital Architect
//           </span>{" "}
//           transforming lines 
//           of code into{" "}
//           <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
//             Digital Marvels
//           </span>
//           .
//         </p>

//         <a href="/resume.pdf" download="Rishita_Dixit_Resume.pdf">
//           <button className="mt-8 px-8 py-4 text-lg md:text-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform relative group">
//             <span className="group-hover:opacity-0 transition-opacity duration-300">
//               Resume
//             </span>
//             <AiOutlineDownload className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//           </button>
//         </a>
//       </div>

//       {/* Image & Tech Stack */}
//       <div className="hidden lg:flex relative max-w-[320px] w-full h-auto justify-center items-center ml-16">
//         <div className="relative w-full h-full flex justify-center items-center">
//           {/* Rotating Image */}
//           <img
//             ref={imgRef}
//             src="/img/portfolio-illustration.png"
//             alt="Animated Logo"
//             className="w-full h-auto object-cover rounded-lg shadow-lg"
//           />

//           {/* Centered Tech Stack Text */}
//           <div className="absolute inset-0 flex justify-center items-center z-10">
//             <p
//               ref={stackTextRef}
//               className="text-yellow-200 text-2xl md:text-3xl font-semibold transition-all duration-500"
//             >
//               {techStack[currentIndex]}
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;


