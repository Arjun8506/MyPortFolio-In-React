import swiftcart from "../assets/swiftcart.png";
import techblog from "../assets/techblog.png";
import chatapp from "../assets/chatapp.png";
import freeimage from "../assets/freeimage.png";
import todoapp from "../assets/todoapp.png";
import weatherapp from "../assets/weatherapp.png";
import ButtonComp from "./ButtonComp";
import qurilo from "../assets/Qurilo.png";
import onecup from "../assets/onecupmore.png";

const projectsData = [
  {
    image: qurilo,
    title: "Qurilo Solutions",
    description: "Made in Nextjs with SSR and SSG",
    link: "https://qurilo.com/",
  },
  {
    image: onecup,
    title: "One Cup More Cafe",
    description: "Made in Reactjs",
    link: "https://onecupmore-cafe.netlify.app/",
  },
  {
    image: swiftcart,
    title: "SwiftCart Ecommerce Website",
    description: "Made using MERN Stack",
    link: "https://swiftcart-65dk.onrender.com",
  },
  {
    image: techblog,
    title: "TechBlog Website",
    description: "Made using MERN Stack",
    link: "https://tech-blogs-36q1.onrender.com",
  },
  {
    image: chatapp,
    title: "Chat WebApplication",
    description: "Made using MERN Stack",
    link: "https://chatapp-9l1r.onrender.com/login",
  },
  {
    image: freeimage,
    title: "Free Image Downloader",
    description: "Made in HTML, CSS, JS",
    link: "https://arjun8506.github.io/ImageSearchApp",
  },
  {
    image: todoapp,
    title: "ToDo App",
    description: "Made in ReactJS",
    link: "https://voluble-alfajores-4ac836.netlify.app",
  },
  {
    image: weatherapp,
    title: "Weather WebApplication",
    description: "Made in HTML, CSS, JS",
    link: "https://arjun8506.github.io/WEATHER_APP_USING_JS",
  },
];

const Projects = () => {
  return (
    <section>
      <div className="w-full min-h-screen pt-24 px-5" id="projects">
        <h1 className="text-2xl text-center font-bold uppercase mb-5">
          My Projects
        </h1>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="projectDes w-full h-full rounded-lg flex flex-col gap-1"
            >
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg"
              />
              <div className="des px-4 py-2 flex flex-col gap-1">
                <h1>{project.title}</h1>
                <h1>{project.description}</h1>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full flex items-center justify-center">
          <ButtonComp
            link={"https://github.com/Arjun8506"}
            text={"View My GitHub"}
            width={"w-fit"}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
