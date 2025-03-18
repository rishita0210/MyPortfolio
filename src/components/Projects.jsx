import React, { useEffect, useRef } from "react";
import { FaRegFileCode } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    id: 1,
    title: "Punjabi Jutti E-Commerce",
    description:
      "Designed and managed a responsive e-commerce platform for Punjabi juttis, delivering a seamless shopping experience.",
    image: "/img/jutti.webp",
  },
  {
    id: 2,
    title: "Hostel Management System",
    description:
      "Developed a hostel management system with automated room allocation, fee tracking, and complaint resolution.",
    image: "/img/hostel.webp",
  },
  {
    id: 3,
    title: "QR Code Based Attendance",
    description:
      "Built a QR-based attendance system ensuring seamless check-ins and real-time tracking.",
    image: "/img/qr.webp",
  },
  {
    id: 4,
    title: "Presence Pulse - Attendance System",
    description:
      "A Next.js-powered platform for tracking attendance, generating reports, and monitoring trends.",
    image: "/img/Presence.webp",
  },
];

const Projects = () => {
  const projectsRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (containerRef.current) {
      const scrollTween = gsap.to(projectsRef.current, {
        x: () => -(projectsRef.current.scrollWidth - window.innerWidth),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${projectsRef.current.scrollWidth - window.innerWidth}`,
          pin: true,
          scrub: 2, // Slower scroll effect
          invalidateOnRefresh: true,
          id: "projects-pin",
        },
      });

      return () => {
        scrollTween.kill();
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      };
    }
  }, []);

  return (
    <div className="relative bg-black text-white">
      <div className="text-center lg:text-left pt-20 pb-10 px-6 md:px-24">
        <h1 className="text-5xl lg:text-7xl font-bold lilita-one bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          My <br /> Projects
        </h1>
      </div>

      <div ref={containerRef} className="overflow-hidden h-screen">
        <div
          ref={projectsRef}
          className="flex space-x-12 md:space-x-20 px-6 md:px-24 items-center h-full"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-80 sm:w-96 md:w-[28rem] flex-shrink-0 bg-gray-900 rounded-lg shadow-lg overflow-hidden"
            >
              {/* Project Image */}
              <div className="w-full h-64 sm:h-72 md:h-80">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Project Details Below Image */}
              <div className="p-4">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>

                {/* View Code Button */}
                <div className="flex items-center gap-2 text-orange-500 cursor-pointer hover:text-orange-400 transition-colors mt-4">
                  <FaRegFileCode className="h-6 w-6" />
                  <p className="text-sm font-medium">View Code</p>
                </div>
              </div>
            </div>
          ))}

          <div className="w-[30vw] h-80 flex-shrink-0"></div>
        </div>
      </div>

      <div className="min-h-screen  bg-black px-6 md:px-24 py-20">
        <h2 className="text-4xl lg:text-6xl font-bold lilita-one bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-10">
          More About My Work
        </h2>
        <p className="text-lg text-gray-300 max-w-3xl">
          The projects above represent some of my most significant work. I'm passionate about creating 
          intuitive, functional applications that solve real problems. Each project has been carefully 
          crafted to deliver the best possible user experience while maintaining high standards of code quality.
        </p>
        <p className="text-lg text-gray-300 max-w-3xl mt-6">
          I'm always looking for new challenges and opportunities to expand my skills. If you'd like to 
          collaborate or learn more about my development process, please don't hesitate to reach out.
        </p>
      </div>
    </div>
  );
};

export default Projects;
