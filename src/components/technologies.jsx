
// "use client";
// import React, { useEffect, useRef } from "react";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const technologies = [
//   { id: 1, title: "React", image: "/img/react.png" },
//   { id: 2, title: "Node.js", image: "/img/node.png" },
//   { id: 3, title: "JavaScript", image: "/img/javascript.png" },
//   { id: 4, title: "CSS", image: "/img/css.png" },
//   { id: 5, title: "Figma", image: "/img/figma.png" },
//   { id: 6, title: "GitHub", image: "/img/github.png" },
//   { id: 7, title: "Git", image: "/img/git.png" },
//   { id: 8, title: "Next.js", image: "/img/next.png" },
// ];

// const Technologies = () => {
//   const containerRef = useRef(null);

//   useEffect(() => {
//     if (!containerRef.current) return;

//     const elements = containerRef.current.children;

//     gsap.fromTo(
//       elements,
//       { opacity: 0, y: 80, scale: 0.5 },
//       {
//         opacity: 1,
//         y: 0,
//         scale: 1,
//         duration: 1.5,
//         stagger: { amount: 0.5 },
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: containerRef.current,
//           start: "top 85%",
//           toggleActions: "play none none reverse",
//         },
//       }
//     );

//     gsap.to("body", {
//       backgroundColor: "#111827", // Dark blueish-black when section is active
//       scrollTrigger: {
//         trigger: containerRef.current,
//         start: "top 50%",
//         end: "bottom 50%",
//         toggleActions: "play reverse play reverse",
//       },
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
//     };
//   }, []);

//   return (
//     <div className="flex flex-col h-screen mt-40 items-center py-12 w-full min-h-screen px-6 sm:px-8 lg:px-12 transition-colors duration-500 items-center">
//       <h1 className="text-3xl sm:text-5xl lg:text-5xl font-bold mb-10 lilita-one bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
//         Technologies
//       </h1>

//       <div
//         ref={containerRef}
//         className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 sm:gap-12 lg:gap-16 w-full max-w-6xl"
//       >
//         {technologies.map((tech) => (
//           <div key={tech.id} className="flex flex-col items-center group">
//             <div className="relative">
//               <img
//                 src={tech.image}
//                 alt={tech.title}
//                 className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full border-2 sm:border-4 border-gray-300 transition-all duration-300 group-hover:shadow-[0_0_20px_#0ff]"
//               />
//             </div>
//             <h3 className="text-lg sm:text-xl font-medium mt-3 group-hover:text-cyan-400 transition-all duration-300">
//               {tech.title}
//             </h3>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Technologies;


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
  { id: 5, title: "Figma", image: "/img/figma.png" },
  { id: 6, title: "GitHub", image: "/img/github.png" },
  { id: 7, title: "Git", image: "/img/git.png" },
  { id: 8, title: "Next.js", image: "/img/next.png" },
];

const Technologies = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;

    gsap.fromTo(
      elements,
      { opacity: 0, y: 40, scale: 0.7 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        stagger: { amount: 0.4 },
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    gsap.to("body", {
      backgroundColor: "#111827",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top 50%",
        end: "bottom 50%",
        toggleActions: "play reverse play reverse",
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col md:mt-30 h-screen mt-20 items-center py-10 w-full min-h-screen px-4 sm:px-6 lg:px-10 transition-colors duration-500">
      <h1 className="text-4xl sm:text-3xl font-bold mb-6 bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
        Technologies
      </h1>

      <div
        ref={containerRef}
        className="grid grid-cols-3 sm:grid-cols-4 gap-6 sm:gap-8 w-full max-w-4xl"
      >
        {technologies.map((tech) => (
          <div key={tech.id} className="flex flex-col items-center group">
            <div className="relative">
              <img
                src={tech.image}
                alt={tech.title}
                className="w-14 h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full border border-gray-300 transition-all duration-300 group-hover:shadow-[0_0_15px_#0ff]"
              />
            </div>
            <h3 className="text-sm sm:text-base font-medium mt-2 group-hover:text-cyan-400 transition-all duration-300">
              {tech.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
