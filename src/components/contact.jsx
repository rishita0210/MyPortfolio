"use client";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col mt-50 p-50 md:flex-row items-center justify-center  md:p-20 space-y-10 md:space-y-0 md:space-x-20">
      {/* Left Section */}
      <div className="text-center md:text-left md:w-1/2">
        {/* Heading */}
        <h1 className="font-bold text-5xl lilita-one bg-gradient-to-r 
             from-orange-500 to-yellow-400 bg-clip-text text-transparent mb-6">
          Get In Touch
        </h1>

        {/* Subtext */}
        <p className=" font-semibold text-lg text-white">
          "I'm always open to new opportunities and collaborations! <br />
          Whether you just want to connect or discuss a development project, feel free to reach out."
        </p>

        {/* Email */}
        <div className="mt-10 text-lg">
          <h2>
            <a
              href="mailto:rishitadixit02@gmail.com"
              className="text-gray-400 font-bold hover:text-orange-500 transition-all duration-300"
            >
              rishitadixit02@gmail.com
            </a>
          </h2>
        </div>
      </div>

      {/* Right Section: Image */}
      <div className="w-full md:w-1/2 h-72 md:h-96 overflow-hidden rounded-lg shadow-lg">
        <img
          src="/img/email.gif"
          alt="Animated Email"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Contact;
