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
      // Section animation (fade-in and slide-up/down)
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse", // Plays when scrolling both ways
          },
        }
      );

      // Title animation (scale & fade-in)
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Text animation (slide-in from left)
      gsap.fromTo(
        textRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: textRef.current,
            start: "top 85%",
            end: "bottom 25%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert(); // Cleanup GSAP on unmount
  }, []);

  return (
    <div ref={sectionRef} className="h-screen mt-30 flex flex-col items-center justify-center p-10">
      {/* Title */}
      <div ref={titleRef} className="text-5xl font-bold lilita-one bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent text-center">
        <h1>Work Interest and What I Can Offer</h1>
      </div>

      {/* Text */}
      <div ref={textRef} className="w-3/4 text-xl font-lg mt-6 text-center text-gray-300">
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
