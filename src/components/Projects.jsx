import swiftcart from "../assets/swiftcart.png";
import techblog from "../assets/techblog.png";
import chatapp from "../assets/chatapp.png";
import freeimage from "../assets/freeimage.png";
import todoapp from "../assets/todoapp.png";
import weatherapp from "../assets/weatherapp.png";

const Projects = () => {
  return (
    <section>
      <div className=" w-full min-h-screen pt-24 px-5" id="projects">
        <h1 className="text-2xl text-center font-bold uppercase mb-5">
          My Projects
        </h1>
        <div className=" grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="projectDes w-full h-full rounded-lg flex flex-col gap-1">
            <img src={swiftcart} alt="" className="rounded-lg" />
            <div className="des px-4 py-2 flex flex-col gap-1">
              <h1>SwiftCart Ecommerce Website</h1>
              <h1>Made using MERN Stack</h1>
              <a
                href="https://swiftcart-65dk.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="projectDes w-full h-full rounded-lg flex flex-col gap-1">
            <img src={techblog} alt="" className="rounded-lg" />
            <div className="des px-4 py-2 flex flex-col gap-1">
              <h1>TechBlog Website</h1>
              <h1>Made using MERN Stack</h1>
              <a
                href="https://tech-blogs-36q1.onrender.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="projectDes w-full h-full rounded-lg flex flex-col gap-1">
            <img src={chatapp} alt="" className="rounded-lg" />
            <div className="des px-4 py-2 flex flex-col gap-1">
              <h1>Chat WebApplication</h1>
              <h1>Made using MERN Stack</h1>
              <a
                href="https://chatapp-9l1r.onrender.com/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="projectDes w-full h-full rounded-lg flex flex-col gap-1">
            <img src={freeimage} alt="" className="rounded-lg" />
            <div className="des px-4 py-2 flex flex-col gap-1">
              <h1>Free Image Downloader</h1>
              <h1>Made in html, css, JS</h1>
              <a
                href="https://arjun8506.github.io/ImageSearchApp"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="projectDes w-full h-full rounded-lg flex flex-col gap-1">
            <img src={todoapp} alt="" className="rounded-lg" />
            <div className="des px-4 py-2 flex flex-col gap-1">
              <h1>ToDo App</h1>
              <h1>Made in ReactJS</h1>
              <a
                href="https://voluble-alfajores-4ac836.netlify.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
          <div className="projectDes w-full h-full rounded-lg flex flex-col gap-1">
            <img src={weatherapp} alt="" className="rounded-lg" />
            <div className="des px-4 py-2 flex flex-col gap-1">
              <h1>Weather WebApplication</h1>
              <h1>Made in HTML, CSS, JS</h1>
              <a
                href="https://arjun8506.github.io/WEATHER_APP_USING_JS"
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        <div className=" w-full flex items-center justify-center">
        <button className=" bg-orange-500 py-1 px-2 rounded-lg hover:opacity-90 mt-5">
          <a href="https://github.com/Arjun8506" target="_blank">View My GitHub</a>
        </button>
        </div>

      </div>
    </section>
  );
};

export default Projects;
