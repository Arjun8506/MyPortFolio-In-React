import React, { useEffect, useRef, useState } from "react";
import { MdOutlineWbSunny, MdMenu } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { useToggleMode } from "../contaxt/DarkLightModeToggle";
import logo from "../assets/logo.png"

const Header = () => {
  const { isDarkMode, toggleMode } = useToggleMode();
  const [isVisible, setisVisible] = useState(false);
  const [MenuButton, setMenuButton] = useState(false);
  
  useEffect(() => {
    const handleResize = () => {
      setMenuButton(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ToggleMenu = () => {
    setisVisible(!isVisible)
  }

  return (
    <header>
      <div className={`w-full max-w-[1500px] mx-auto h-fit px-4 py-5 lg:py-2 bg-gray-100/95 flex items-center justify-between fixed top-0 left-0 z-50 ${isVisible && "bg-gray-500/90"} max-w-[1500px]
      ${isDarkMode ? "" : "text-black"}
      `}>
        <img src={logo} alt="" className="w-10 lg:w-14 rounded-full " />

        <nav>
          {MenuButton ? (
            <ul className="flex items-center gap-5 text-xl">
              <li>
            <button className=" flex flex-col gap-1" onClick={ToggleMenu}>
              {isVisible ? <RxCross1 /> : <MdMenu />}
            </button>
              </li>
              <li>
              <button onClick={toggleMode}>
                  {isDarkMode ? <MdOutlineWbSunny /> : <LuMoonStar />}
                </button>
              </li>
            </ul>
          ) : (
            <ul className="flex items-center text-sm gap-5">
              <li>
                <a
                  href="#"
                  className="break-after-auto after:w-full after:h-full after:bg-orange-500 after:c"
                >
                  Home
                </a>
              </li>
              <li>
                <a href="#About">About Me</a>
              </li>
              <li>
                <a href="#skills">My Skills</a>
              </li>
              <li>
                <a href="#projects">My Projects</a>
              </li>
              <li>
                <a href="#contact">Contact Me</a>
              </li>
              <li>
                <button onClick={toggleMode}>
                  {isDarkMode ? <MdOutlineWbSunny /> : <LuMoonStar />}
                </button>
              </li>
            </ul>
          )}
        </nav>
        
        {isVisible && (
        <nav className=" w-full h-screen fixed top-[4.6rem] bg-gray-500/90 left-0 text-white">
          <ul className="flex items-center flex-col gap-5 my-10">
            <li>
              <a href="#" className="break-after-auto after:w-full after:h-full after:bg-orange-500 after:c">Home</a>
            </li>
            <li>
              <a href="#About">About Me</a>
            </li>
            <li>
                <a href="#skills">My Skills</a>
              </li>
            <li>
              <a href="#projects">My Projects</a>
            </li>
            <li>
              <a href="#contact">Contact Me</a>
            </li>
          </ul>
        </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
