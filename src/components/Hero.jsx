import React, { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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
    gsap.to(imgRef.current, { rotate: 360, duration: 8, repeat: -1, ease: "linear", transformOrigin: "center center" });

    const interval = setInterval(() => {
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
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // ✅ Scroll-triggered background color change
  useEffect(() => {
    gsap.to(heroRef.current, {
      backgroundColor: "#1E293B",
      duration: 1.5,
      ease: "power2.out",
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top center", // Start changing color when the hero section reaches the center
        end: "bottom top", // Complete color change as the section moves up
        scrub: true, // Smooth transition
      },
    });
  }, []);

  return (
    <div ref={heroRef} className="h-screen flex flex-col lg:flex-row items-center justify-between
     bg-black px-12 lg:px-24 mt-30 transition-colors duration-500">
      <div className="text-white text-left max-w-5xl" ref={textRef}>
        <p className="text-4xl font-extrabold leading-tight text-white mb-6 lilita-one">
          Frontend Developer
        </p>
        
        {/* "Unlock the magic" line with Lilita One font */}
        <p className="text-gray-300 text-xl font-bold mb-2 lilita-one">
          Unlock the magic in my code!
        </p>

        {/* Gradient Text for "Digital Architect" & "Digital Marvels" */}
        <p className="text-5xl leading-relaxed font-bold lilita-one">
          A <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Digital Architect</span> transforming lines <br/> 
          of code into <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">Digital Marvels</span>.
        </p>

        {/* Resume Download Button */}
        <a href="/resume.pdf" download="Rishita_Dixit_Resume.pdf">
          <button className="mt-8 px-8 py-4 text-xl font-semibold bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-lg shadow-md hover:scale-105 transition-transform">
            Download Resume
          </button>
        </a>
      </div>

    
      <div className="relative w-96 h-96 flex justify-center items-center">
        <img ref={imgRef} src="/img/portfolio-illustration.png" alt="Animated Logo" className="w-full h-full object-cover rounded-lg shadow-lg" />
        <div className="absolute inset-0 flex justify-center items-center  rounded-lg">
          <p ref={stackTextRef} className="text-yellow-200 text-4xl font-semibold">
            {techStack[currentIndex]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;


