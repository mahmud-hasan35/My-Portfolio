import React from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import Contact from "./components/Contact/Contact";
import Logo from "./components/Hero/Logo";
import About from "./components/About/About";
import SkillCircle from "./components/SkillCircle/SkillCircle";
import Footer from "./components/Footer/Footer";


const App = () => {
  return (
    <div className="bg-gray-50">
      <Navbar></Navbar>
         <Hero></Hero>
         <Logo></Logo>
         <About></About>
         <SkillCircle></SkillCircle>
        <ProjectSection></ProjectSection>
        <Contact></Contact>
        <Footer></Footer>
    </div>
  );
};

export default App;
