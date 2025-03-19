"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const technologies = [
  { id: 1, title: "React", image: "/img/react.png" },
  { id: 2, title: "Node.js", image: "/img/node.png" },
  { id: 3, title: "JavaScript", image: "/img/javascript.png" },
  { id: 4, title: "CSS", image: "/img/css.png" },
  { id: 5, title: "FIGMA", image: "/img/figma.png" },
  { id: 6, title: "GitHub", image: "/img/github.png" },
  { id: 7, title: "Git", image: "/img/git.png" },
  { id: 8, title: "Next.js", image: "/img/node.png" },
];

const Technologies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const elements = containerRef.current.children;

    gsap.fromTo(
      elements,
      { 
        opacity: 0,
        y: (i) => (i % 2 === 0 ? 100 : -100), // Some move from bottom, some from top
        x: (i) => (i % 3 === 0 ? -50 : 50), // Some move left, some right
        scale: 0.5,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        duration: 2.2,
        stagger: {
          amount: 0.8,
          grid: [2, 4], // Grid-based stagger
          from: "random", // Randomized animation order
        },
        ease: "elastic.out(1, 0.5)", // Bouncy effect
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play reverse play reverse",
        },
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center py-12 w-full h-screen p-30">
      <h1 className="text-4xl iteam-left font-bold mb-12 mt-60 lilita-one bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-10">Technologies</h1>
      
      <div
        ref={containerRef}
        className="grid grid-cols-4 gap-16 w-full px-10 max-w-5xl"
      >
        {technologies.map((tech) => (
          <div key={tech.id} className="flex flex-col items-center group">
            <div className="relative">
              <img
                src={tech.image}
                alt={tech.title}
                className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-gray-300 transition-all duration-300 group-hover:shadow-[0_0_20px_#0ff]"
              />
            </div>
            <h3 className="text-xl font-medium mt-3 group-hover:text-cyan-400 transition-all duration-300">
              {tech.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;




