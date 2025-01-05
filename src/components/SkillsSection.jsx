import "boxicons";

const SkillsSection = () => {
  const skillsContent = [
    {
      name: "html5",
      h1: "HTML",
      color: "#ff9200",
    },
    {
      name: "css3",
      h1: "CSS",
      color: "#00FFFE",
    },
    {
      name: "javascript",
      h1: "JS",
      color: "#FBFF00",
    },
    {
      name: "react",
      h1: "ReactJS",
      color: "#00E4FF",
    },
    {
      name: "nodejs",
      h1: "NodeJS",
      color: "#2AFF00",
    },
    {
      name: "server",
      h1: "ExpressJS",
      color: "#929292",
    },
    {
      name: "mongodb",
      h1: "MongoDB",
      color: "#0000ff",
    },
    {
      name: "gitlab",
      h1: "Git",
      color: "#FF009F",
    },
    {
      name: "github",
      h1: "GitHub",
      color: "#B400FF",
    },
    {
      name: "tailwind-css",
      h1: "TailwindCSS",
      color: "#00BEFF",
    },
    {
      name: "nextjs",
      h1: "Next.js",
      color: "#000000", // Black for Next.js
    },
    {
      name: "remix",
      h1: "Remix.js",
      color: "#3f51b5", // A purple shade for Remix.js
    },
  ];

  return (
    <div className=" w-full min-h-fit pt-24 px-5" id="skills">
      <h1 className=" text-2xl text-center font-bold uppercase">My Skills</h1>
      <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
        {skillsContent.map((skill, index) => (
          <div className="skill w-full h-full px-6 py-4" key={skill.name}>
            <div className="skillcontent w-full">
              <box-icon
                name={skill.name}
                type="logo"
                animation="burst"
                color={skill.color}
                size="lg"
                flip = {index % 2 === 0 ? "vertical" : "horizontal"}
              ></box-icon>
              <h1>{skill.h1}</h1>
            </div>
          </div>
        ))}
      </div>
        <div className="w-full mt-5 flex items-center justify-center">
            <button className="bg-orange-500 px-2 py-1 rounded-lg hover:opacity-80">
            <a href="https://drive.google.com/file/d/1_i71FX48ntCVSC4QypA5quFH_TNWf2xQ/view" target="_blank" >Download Resume</a>
            </button>
        </div>
    </div>
  );
};

export default SkillsSection;
