import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);


const skills = [
  { title: "Frontend Development", bgColor: "bg-blue-500", direction: "left", description: "Building interactive, scalable, and responsive UIs." },
  { title: "Backend Development", bgColor: "bg-green-500", direction: "right", description: "Creating efficient APIs and managing databases." },
  { title: "UI/UX Design", bgColor: "bg-purple-500", direction: "top", description: "Transforming ideas into visually engaging interfaces." },
  { title: "Tools & Technologies", bgColor: "bg-red-500", direction: "bottom", description: "Working with Next.js, GSAP, Tailwind CSS, and more." },
  { title: "Performance Optimization", bgColor: "bg-yellow-500", direction: "left", description: "Enhancing speed and efficiency for seamless experiences." },
  { title: "State Management", bgColor: "bg-indigo-500", direction: "right", description: "Managing data flow with Context API and Redux." },
  { title: "Animations & Interactions", bgColor: "bg-teal-500", direction: "top", description: "Bringing websites to life using GSAP and Framer Motion." },
];



const SkillsSection = () => {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    if (!containerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=250%", 
        scrub: 2, 
        pin: true,
      },
    });

    skills.forEach((skill, index) => {
      let xValue = "0%", yValue = "0%";

      if (skill.direction === "left") xValue = "-100%";
      if (skill.direction === "right") xValue = "100%";
      if (skill.direction === "top") yValue = "-100%";
      if (skill.direction === "bottom") yValue = "100%";

      tl.fromTo(
        skillRefs.current[index],
        { x: xValue, y: yValue, opacity: 0 },
        {
          x: "0%",
          y: "0%",
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
        },
        index * 0.4 
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative min-h-screen h-[90vh] w-full overflow-hidden">
      {skills.map((skill, index) => (
        <div
          key={index}
          ref={(el) => (skillRefs.current[index] = el)}
          className={`absolute inset-0 flex items-center justify-center ${skill.bgColor} text-white text-2xl sm:text-3xl md:text-4xl font-bold px-4 text-center`}
        >
          <div className="font-bold lilita-one sm:text-xs md:text-xl lg:text-2xl text-black">
          {skill.title}<br/>
          {skill.description}
            </div>
          
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;











