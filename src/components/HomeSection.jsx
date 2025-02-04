import React from "react";
import myImage from "../assets/MyImage.png";
import ButtonComp from "./ButtonComp";

const HomeSection = () => {
  return (
    <section>
      <div className=" w-full min-h-fit pt-28 px-5 flex items-center gap-10 justify-between flex-col lg:flex-row">
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
            GitHub. I worked as a Frontend Developer at Qurilo Solutions Pvt Ltd
            for 6 months, where I collaborated with a diverse team of
            professionals, leveraging Git and GitHub for seamless version
            control and team coordination. During this tenure, I gained valuable
            experience working on various projects and enhancing my ability to
            thrive in a collaborative environment. I am eager to bring my skills
            and passion to your organization, contributing my potential while
            gaining deeper knowledge about the ever-evolving world of
            technology.
          </p>

          <ButtonComp
            link={
              "https://drive.google.com/file/d/1_i71FX48ntCVSC4QypA5quFH_TNWf2xQ/view"
            }
            text={"Download Resume"}
            width={"w-fit"}
          />
        </div>

        <div className="w-full lg:w-[35%] rounded-full border-2 image-container overflow-hidden">
          <img src={myImage} alt="" className=" w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
