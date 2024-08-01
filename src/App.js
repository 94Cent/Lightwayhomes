import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact"
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import WebProjectPage from "./pages/WebProjectPage";
import data from "./data.json"



function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/projects/:name" element={<WebProjectPage projects={data.projects} />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
