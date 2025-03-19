import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { title: "Frontend Development", bgColor: "bg-blue-500", direction: "left" },
  { title: "Backend Development", bgColor: "bg-green-500", direction: "right" },
  { title: "UI/UX Design", bgColor: "bg-purple-500", direction: "top" },
  { title: "Tools & Technologies", bgColor: "bg-red-500", direction: "bottom" },

 
];

const SkillsSection = () => {
  const containerRef = useRef(null);
  const skillRefs = useRef([]);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "+=300%",
        scrub: 3,
        pin: true,
      },
    });

    skills.forEach((skill, index) => {
      let xValue = "0%",
        yValue = "0%";

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
          duration: 1.5,
          ease: "power3.out",
        },
        index * 0.5 // Stagger effect
      );
    });
  }, []);

  return (
    <div ref={containerRef} className="relative h-screen w-full overflow-hidden">
      {skills.map((skill, index) => (
        <div
          key={index}
          ref={(el) => (skillRefs.current[index] = el)}
          className={`absolute inset-0 flex items-center justify-center ${skill.bgColor} text-white text-4xl font-bold`}
        >
          {skill.title}
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;









