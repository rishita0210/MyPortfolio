import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const WorkInterest = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in and pop-up effect for the whole section
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Text animations for the title and paragraph
      gsap.from(titleRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        delay: 0.3,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: -50,
        duration: 1,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <div ref={sectionRef} className="h-screen flex flex-col items-center justify-center p-10">
      <div ref={titleRef} className="text-5xl font-bold lilita-one bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-center">
        <h1>Work Interest and What I Can Offer</h1>
      </div>
      <div ref={textRef} className="w-3/4 text-xl font-semibold mt-6 text-center text-gray-300">
        <p>
          I have a strong desire to work with companies that leverage cutting-edge technologies like 
          <span className="text-orange-400"> React</span>, 
          <span className="text-orange-400"> Node.js</span>, and 
          <span className="text-orange-400"> TypeScript</span>. My ideal role would be a challenging one that encourages 
          personal development through teamwork and collaboration.
        </p>
      </div>
    </div>
  );
};

export default WorkInterest;
