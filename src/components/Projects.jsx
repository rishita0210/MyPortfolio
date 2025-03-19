
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
    codeLink: "https://punjabi-jutti.vercel.app/",
  },
  {
    id: 2,
    title: "Hostel Management System",
    description:
      "Developed a hostel management system with automated room allocation, fee tracking, and complaint resolution.",
    image: "/img/hostel.webp",
    codeLink: "https://github.com/rishita0210/registartion",
  },
  {
    id: 3,
    title: "QR Generator",
    description:
      "Built a QR-based attendance system ensuring seamless check-ins and real-time tracking.",
    image: "/img/qr.webp",
    codeLink: "https://qr-generator-lake.vercel.app/",
  },
  {
    id: 4,
    title: "Presence Pulse - Attendance System",
    description:
      "A Next.js-powered platform for tracking attendance, generating reports, and monitoring trends.",
    image: "/img/Presence.webp",
    codeLink: "https://github.com/Ady1506/Cloud",
  },
  {
    id: 5,
    title: "Calculator App",
    description: "Developed a user-friendly calculator app with a responsive design, ensuring seamless usability across devices.",
    image: "/img/calculator.webp",
    codeLink: "https://github.com/rishita0210/Calculator_App"
  },
 

];

const Projects = () => {
  const projectsRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    if (!projectsRef.current || !sectionRef.current) return;

    const totalScrollWidth = projectsRef.current.scrollWidth;
    const viewportWidth = window.innerWidth;
    const maxScroll = totalScrollWidth - viewportWidth;

    gsap.to(projectsRef.current, {
      x: -maxScroll,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: () => `+=${maxScroll}`,
        pin: true,
        scrub: 1.5,
        invalidateOnRefresh: true,
        id: "projects-scroll",
      },
    });

    gsap.to("body", {
      backgroundColor: "#001B2E",
      scrollTrigger: {
        trigger: sectionRef.current,
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
    <section ref={sectionRef} id="Projects" className="relative text-white h-screen overflow-hidden">
      <div className="text-center lg:text-left pt-20 pb-10 px-6 md:px-24">
        <h1 className="text-5xl lg:text-5xl font-bold lilita-one bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent">
          My <br /> Projects
        </h1>
      </div>

      <div className="relative w-full h-full overflow-hidden ">
        <div
          ref={projectsRef}
          className="flex space-x-4 sm:space-x-12 md:space-x-20 px-6 md:px-24 items-center snap-x snap-mandatory"
        >
          {projects.map((project) => (
            <div
              key={project.id}
              className="w-64 sm:w-80 gap-15 md:w-96 flex-shrink-0 bg-gray-900 rounded-lg shadow-lg overflow-hidden snap-center"
            >
              <div className="w-full h-56 sm:h-64 md:h-72">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4">
                <h3 className="text-lg sm:text-xl font-semibold text-white">{project.title}</h3>
                <p className="text-gray-300 text-sm mt-2">{project.description}</p>

                <a
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-orange-500 cursor-pointer hover:text-orange-400 transition-colors mt-4"
                >
                  <FaRegFileCode className="h-6 w-6" />
                  <p className="text-sm font-medium">View Code</p>
                </a>
              </div>
            </div>
          ))}

          <div className="w-[60vw] sm:w-[40vw] md:w-[20vw] h-80 flex-shrink-0"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
