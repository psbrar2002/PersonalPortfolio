import React from "react";
import Navbar from "./sections/Navbar";  // Import Navbar component
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Clients from "./sections/Clients";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import WorkExperience from "./sections/Exeperience";
const App = () => {
  return (
    <main className="max-w-7xl mx-auto">
      <Navbar />  
      <Hero />
      <About/>
      <Projects/>
      <Clients/>
      <WorkExperience/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;
