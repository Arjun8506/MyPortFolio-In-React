import React from "react";
import myImage from "../assets/MyImage.png"

const HomeSection = () => {
  return (
    <section>
      <div className=" w-full min-h-fit pt-24 px-5 flex items-center gap-10 justify-center flex-col lg:flex-row">
        <div className=" flex flex-col gap-1 w-full lg:w-[50%]">
          <div className=" w-32 h-1 bg-orange-500"></div>
          <h1 className=" text-2xl lg:text-4xl uppercase font-bold text-yellow-500">
            I'm Arjun nagar
          </h1>
          <h1 className=" text-xl lg:text-2xl uppercase font-bold">
            A full stack web developer
          </h1>
          <p className=" text-sm lg:text-lg">
            With expertise in the complete MERN stack, as well as Git and
            GitHub. I have created several impressive projects that showcase my
            dedication to web development and my commitment to continuous
            learning. I am eager to bring my skills and passion to your
            organization, contributing my potential while gaining deeper
            knowledge about the ever-evolving world of technology.
          </p>

          <button className=" w-fit py-2 px-4 bg-orange-500 rounded-lg hover:opacity-80 mx-auto my-5">Download Resume</button>

        </div>

        <div className="w-full lg:w-[40%] rounded-full border-2 ">
          <img src={myImage} alt="" className=" w-full h-full rounded-full" />
        </div>

      </div>
    </section>
  );
};

export default HomeSection;
