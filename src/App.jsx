import React from "react";
import Header from "./components/Header";
import { useToggleMode } from "./contaxt/DarkLightModeToggle";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";

const App = () => {

  const { isDarkMode } = useToggleMode()

  return (
    <div className=" w-full relative">
      <div className={`${isDarkMode ? 'bg-dark-primary text-dark-color' : 'bg-light-primary text-light-color'} text-primary w-full max-w-[1500px] mx-auto transition-all ease-in-out duration-500`}>
        <Header />
        <HomeSection />
        <AboutSection />
        <Projects />
        <ContactUs />
      </div>
    </div>
  );
};

export default App;
