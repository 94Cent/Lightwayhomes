import React from "react";
// import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import WebProjectPage from "./pages/WebProjectPage";
import data from "./data.json"
import ProjectUpdate from "pages/ProjectUpdate";
import Header from "components/header/Header";
import ScrollToTopButton from "components/ScrollToTopButton";



function App() {
  return (
    <div className="overflow-x-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs testimonials={data.testimonials} teams={data.teams} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/projects/:name" element={<WebProjectPage projects={data.projects} />} />
        <Route path="/projects-update/:name" element={<ProjectUpdate project={data.projectsUpdate} />} />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
