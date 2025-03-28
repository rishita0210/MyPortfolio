

// import React, { useEffect, useRef } from "react";
// import { CiLinkedin } from "react-icons/ci";
// import { FaGithub } from "react-icons/fa";
// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

// const Profile = () => {
//   const profileRef = useRef(null);
//   const textRef = useRef(null);
//   const socialIconsRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       gsap.from(profileRef.current, {
//         opacity: 0,
//         scale: 0.5,
//         duration: 1,
//         ease: "back.out(1.7)",
//         scrollTrigger: {
//           trigger: profileRef.current,
//           start: "top 80%",
//           toggleActions: "play reverse play reverse",
//         },
//       });

//       gsap.from(textRef.current, {
//         opacity: 0,
//         y: 50,
//         duration: 1,
//         delay: 0.3,
//         ease: "power3.out",
//         scrollTrigger: {
//           trigger: textRef.current,
//           start: "top 80%",
//           toggleActions: "play none none none",
//         },
//       });

//       gsap.from(socialIconsRef.current.children, {
//         opacity: 0,
//         scale: 0.5,
//         duration: 0.8,
//         delay: 0.8,
//         stagger: 0.2,
//         ease: "back.out(1.5)",
//         scrollTrigger: {
//           trigger: socialIconsRef.current,
//           start: "top 85%",
//           toggleActions: "play none none none",
//         },
//       });
//     });

//     return () => ctx.revert();
//   }, []);

//   return (
//     <div id="Profile" className="min-h-screen mt-40 flex flex-col lg:flex-row items-center justify-center bg-black text-white px-6 md:px-16 py-16 space-y-10 lg:space-y-0 lg:space-x-16">
   
//       <div
//         ref={profileRef}
//         className="w-full sm:w-96 p-6 rounded-2xl border-2 border-white bg-gray-900 shadow-lg text-center flex flex-col items-center"
//       >
     
//         <img
//           src="/img/passport_rishita.jpeg"
//           className="w-40 sm:w-48 h-40 sm:h-48 object-cover rounded-full shadow-lg border-4 border-white"
//           alt="Profile"
//         />

    
//         <p className="mt-4 text-lg font-semibold text-gray-300 px-4">
//           Designing, developing, and delivering digital excellence.
//         </p>

//         <div className="flex flex-wrap justify-center mt-4 gap-3">
//           <span className="text-sm sm:text-lg bg-gray-400 px-4 py-2 rounded-2xl text-black shadow-md">
//             Web Developer
//           </span>
//           <span className="text-sm sm:text-lg bg-gray-400 px-4 py-2 rounded-2xl text-black shadow-md">
//             Freelancer
//           </span>
//         </div>

      
//         <div ref={socialIconsRef} className="flex justify-center space-x-6 mt-4">
//           <a
//             href="https://www.linkedin.com/in/rishita-dixit-6588a3264/"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-4xl sm:text-5xl text-white hover:text-orange-400 transition-transform transform hover:scale-125"
//           >
//             <CiLinkedin />
//           </a>
//           <a
//             href="https://github.com/rishita0210"
//             target="_blank"
//             rel="noopener noreferrer"
//             className="text-4xl sm:text-5xl text-white hover:text-orange-400 transition-transform transform hover:scale-125"
//           >
//             <FaGithub />
//           </a>
//         </div>
//       </div>

//       {/* Introduction Section */}
//       <div ref={textRef} className="w-full lg:w-2/3 text-center lg:text-left">
//         <h1 className="text-4xl sm:text-5xl font-bold text-orange-400 animate-pulse">
//           Hello!!
//         </h1>
//         <p className="mt-6 text-base sm:text-lg text-gray-400 leading-relaxed">
//           Hi, I'm <span className="text-orange-400">Rishita Dixit</span>, a passionate web developer with a strong focus on creating engaging and dynamic user experiences.
//           My journey in web development began with crafting intuitive interfaces using HTML and CSS, and over time, I have deepened my expertise in JavaScript, React, and Next.js.
//         </p>
//         <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
//           Beyond coding, I enjoy sharing knowledge and collaborating on innovative projects that push the boundaries of web development.
//           Whether it's building scalable applications or experimenting with new technologies, I'm always eager to learn and contribute.
//         </p>
//         <p className="mt-4 text-base sm:text-lg text-gray-400 leading-relaxed">
//           I'm open to exciting opportunities and collaborations, especially in{" "}
//           <span className="text-orange-400 font-semibold">React</span> and{" "}
//           <span className="text-orange-400 font-semibold">Next.js</span>.
//           If you have an idea in mind, let’s bring it to life together!
//         </p>
//       </div>
//     </div>
//   );
// };

// export default Profile;


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
      gsap.from(profileRef.current, {
        opacity: 0,
        scale: 0.8,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: profileRef.current,
          start: "top 90%",
          toggleActions: "play reverse play reverse",
        },
      });

      gsap.from(textRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power3.out",
        scrollTrigger: {
          trigger: textRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
      });

      gsap.from(socialIconsRef.current.children, {
        opacity: 0,
        scale: 0.8,
        duration: 0.6,
        delay: 0.6,
        stagger: 0.15,
        ease: "back.out(1.5)",
        scrollTrigger: {
          trigger: socialIconsRef.current,
          start: "top 95%",
          toggleActions: "play none none none",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id="Profile" className="min-h-screen mt-20 flex flex-col lg:flex-row items-center justify-center bg-black text-white px-4 sm:px-8 py-12 space-y-8 lg:space-y-0 lg:space-x-12">
      
      {/* Profile Card */}
      <div
        ref={profileRef}
        className="w-full sm:w-80 p-4 rounded-xl border border-white bg-gray-900 shadow-lg text-center flex flex-col items-center"
      >
        <img
          src="/img/passport_rishita.jpeg"
          className="w-32 sm:w-40 h-32 sm:h-40 object-cover rounded-full shadow-lg border-2 border-white"
          alt="Profile"
        />
        <p className="mt-3 text-sm sm:text-base font-semibold text-gray-300 px-2">
          Designing, developing, and delivering digital excellence.
        </p>

        <div className="flex flex-wrap justify-center mt-3 gap-2">
          <span className="text-xs sm:text-sm bg-gray-400 px-3 py-1 rounded-xl text-black shadow-md">
            Web Developer
          </span>
          <span className="text-xs sm:text-sm bg-gray-400 px-3 py-1 rounded-xl text-black shadow-md">
            Freelancer
          </span>
        </div>

        {/* Social Icons */}
        <div ref={socialIconsRef} className="flex justify-center space-x-4 mt-3">
          <a
            href="https://www.linkedin.com/in/rishita-dixit-6588a3264/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl text-white hover:text-orange-400 transition-transform transform hover:scale-110"
          >
            <CiLinkedin />
          </a>
          <a
            href="https://github.com/rishita0210"
            target="_blank"
            rel="noopener noreferrer"
            className="text-3xl sm:text-4xl text-white hover:text-orange-400 transition-transform transform hover:scale-110"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      {/* Introduction Section */}
      <div ref={textRef} className="w-full lg:w-2/3 text-center lg:text-left">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-400">
          Hello!!
        </h1>
        <p className="mt-4 text-sm sm:text-base text-gray-400 leading-relaxed">
          Hi, I'm <span className="text-orange-400">Rishita Dixit</span>, a passionate web developer with a strong focus on creating engaging and dynamic user experiences.
          My journey in web development began with crafting intuitive interfaces using HTML and CSS, and over time, I have deepened my expertise in JavaScript, React, and Next.js.
        </p>
        <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
          Beyond coding, I enjoy sharing knowledge and collaborating on innovative projects that push the boundaries of web development.
          Whether it's building scalable applications or experimenting with new technologies, I'm always eager to learn and contribute.
        </p>
        <p className="mt-3 text-sm sm:text-base text-gray-400 leading-relaxed">
          I'm open to exciting opportunities and collaborations, especially in{" "}
          <span className="text-orange-400 font-semibold">React</span> and{" "}
          <span className="text-orange-400 font-semibold">Next.js</span>.
          If you have an idea in mind, let’s bring it to life together!
        </p>
      </div>
    </div>
  );
};

export default Profile;


