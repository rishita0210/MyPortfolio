import React, { useEffect, useRef } from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Profile = () => {
  const profileRef = useRef(null);
  const textRef = useRef(null);
  const socialIconsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Pop-out animation for Profile Card when scrolled into view
      gsap.from(profileRef.current, {
        opacity: 0,
        scale: 0.5,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 80%", // Triggers animation when it enters 80% of the viewport
          toggleActions: "play reverse play reverse",
        },
      });

      // Slide-up + Fade-in animation for Text
      gsap.from(textRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
      });

      // Pop-out Social Icons one by one
      gsap.from(socialIconsRef.current.children, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        delay: 0.8,
        stagger: 0.2,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: socialIconsRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <div className="h-screen flex flex-col sm:flex-row items-center justify-center bg-black text-white p-10 space-y-10 sm:space-y-0">
      {/* Profile Card */}
      <div
        ref={profileRef}
        className="w-80 sm:w-96 p-6 rounded-2xl border-2 border-white relative 
                   shadow-lg bg-gray-900 neon-border items-center text-center"
      >
        {/* Profile Image */}
        <div className="flex justify-center">
          <img
            src="/img/passport_rishita.jpeg"
            className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-white"
            alt="Profile"
          />
        </div>

        {/* Description */}
        <div className="text-center mt-4">
          <p className="text-lg font-semibold text-gray-300">
            Designing, developing, and delivering digital excellence.
          </p>
        </div>

        {/* Roles */}
        <div className="flex flex-row items-center justify-center mt-4 gap-3">
          <p className="text-lg text-center rounded-2xl bg-gray-400 p-2 text-black shadow-md">
            Web Developer
          </p>
          <p className="text-lg text-center rounded-2xl bg-gray-400 p-2 text-black shadow-md">
            Freelancer
          </p>
        </div>

        {/* Social Links */}
        <div ref={socialIconsRef} className="flex justify-center space-x-6 mt-4">
          <a
            href="https://www.linkedin.com/in/rishitadixit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-7xl text-white hover:text-orange-400 transition-transform transform hover:scale-125"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://github.com/rishitadixit"
            target="_blank"
            rel="noopener noreferrer"
            className="text-7xl text-white hover:text-orange-400 transition-transform transform hover:scale-125"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Introduction Section */}
      <div ref={textRef} className="sm:w-2/3 p-5 sm:p-10">
        <h1 className="text-5xl font-bold animate-pulse text-orange-400">
          Hello!!
        </h1>
        <p className="mt-6 text-lg text-gray-400">
          Hi, I'm <span className="text-orange-400">Rishita Dixit</span>, a
          passionate web developer with a strong focus on creating engaging and
          dynamic user experiences. My journey in web development began with
          crafting intuitive interfaces using HTML and CSS, and over time, I
          have deepened my expertise in JavaScript, React, and Next.js.
        </p>
        <p className="mt-4 text-lg text-gray-400">
          Beyond coding, I enjoy sharing knowledge and collaborating on
          innovative projects that push the boundaries of web development.
          Whether it's building scalable applications or experimenting with new
          technologies, I'm always eager to learn and contribute.
        </p>
        <p className="mt-4 text-lg text-gray-400">
          I'm open to exciting opportunities and collaborations, especially in{" "}
          <span className="text-orange-400 font-semibold">React</span> and{" "}
          <span className="text-orange-400 font-semibold">Next.js</span>{" "}
          projects. If you have an idea in mind, let’s bring it to life
          together!
        </p>
      </div>
    </div>
  );
};

export default Profile;





