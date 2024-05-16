import React from "react";
import "../index.css";

const AboutSection = () => {
  return (
    <div className=" w-full min-h-fit pt-24 px-5" id="About">
      <h1 className=" text-2xl text-center font-bold uppercase">About Me</h1>
      <div className=" lg:flex lg:flex-row items-center mt-10 justify-evenly">
        <div className=" flex items-start gap-5 justify-between text-sm flex-col my-5 lg:text-xl">
          <ul>
            <li>
              First Name: <span>Arjun</span>
            </li>
            <li>
              Age: <span>20</span>
            </li>
            <li>
              Phone: <span>+91 8506801098</span>
            </li>
          </ul>
          <ul>
            <li>
              Last Name: <span>Nagar</span>
            </li>
            <li>
              Nationality: <span>Indian</span>
            </li>
            <li>
              Email: <span>arjunnagar801098@gmail.com</span>
            </li>
          </ul>
        </div>

        <div className=" grid grid-cols-2 gap-5 lg:text-xl hover:cursor-pointer">
          <div className="aboutskills py-4 px-4 lg:py-6 lg:px-10 hover:scale-110" >
            <h1>+1</h1>
            <h2>ReactJS</h2>
          </div>
          <div className="aboutskills py-4 px-4 lg:py-6 lg:px-10">
            <h1>+1</h1>
            <h2>NodeJS</h2>
          </div>
          <div className="aboutskills py-4 px-4 lg:py-6 lg:px-10">
            <h1>+1</h1>
            <h2>Backend</h2>
          </div>
          <div className="aboutskills py-4 px-4 lg:py-6 lg:px-10">
            <h1>+2</h1>
            <h2>Frontend</h2>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutSection;
