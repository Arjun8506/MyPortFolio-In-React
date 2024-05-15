import React, { useEffect, useRef, useState } from "react";
import { MdOutlineWbSunny, MdMenu } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { RxCross1 } from "react-icons/rx";
import { useToggleMode } from "../contaxt/DarkLightModeToggle";

const Header = () => {
  const { isDarkMode, toggleMode } = useToggleMode();
  const [isVisible, setisVisible] = useState(false);
  const [MenuButton, setMenuButton] = useState(false);
  const windowSize = window.innerWidth;
  
  useEffect(() => {
    const handleResize = () => {
      setMenuButton(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const ToggleMenu = () => {
    setisVisible(!isVisible)
  }

  return (
    <header>
      <div className=" w-full max-w-[1500px] mx-auto h-fit px-4 py-5 bg-gray-100/50 flex items-center justify-between fixed top-0 left-0">
        <h1 className=" text-4xl font-extrabold leading-none">AN</h1>

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
            <ul className="flex items-center gap-5">
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
        <nav className=" w-full h-screen fixed top-[4.6rem] bg-gray-100/50 left-0">
          <ul className="flex items-center flex-col gap-5 my-10">
            <li>
              <a href="#" className="break-after-auto after:w-full after:h-full after:bg-orange-500 after:c">Home</a>
            </li>
            <li>
              <a href="#About">About Me</a>
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

        bfgbsgirbgiubreuibgrieubgiuerbgreiubguirebgiuergbuirbibruibier

    </header>
  );
};

export default Header;
