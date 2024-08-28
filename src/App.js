import React from "react";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutUs from "./pages/AboutUs";
import Careers from "./pages/Careers";
import WebProjectPage from "./pages/WebProjectPage";
import data from "./data.json";
import ProjectUpdate from "pages/ProjectUpdate";
import Header from "components/header/Header";
import ScrollToTopButton from "components/ScrollToTopButton";
import Reservation from "pages/admin/Reservation";
import AdminLogin from "pages/admin/AdminLogin";
import AdminSignup from "pages/admin/AdminSignup";
import AdminProjects from "pages/admin/AdminProjects";
import AdminDashboard from "pages/admin/AdminDashboard";
import ProtectedRoute from "pages/admin/ProtectedRoute";
import LogoColoured from "./assets/images/logo-colured.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const location = useLocation();
  
  const isAdminRoute = location.pathname.startsWith('/admin') && !['/admin/auth/login', '/admin/auth/signup'].includes(location.pathname);
  
  const isActive = (path) => {
    return location.pathname === path ? "text-purple font-bold" : "text-purple font-medium";
  };

  return (
    <div className="overflow-x-hidden">
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} />
      {
        isAdminRoute ? (
          <div className="flex gap-x-4 justify-between items-center p-3">
            <img src={LogoColoured} alt="header" className="md:w-32 w-22 h-12 md:h-20" />
            <div className="flex md:gap-x-12 gap-x-2.5">
              <Link to="/admin" className={isActive("/admin")}>Home</Link>
              <Link to="/admin/projects" className={isActive("/admin/projects")}>Projects</Link>
              <Link to="/admin/reservations" className={isActive("/admin/reservations")}>Reservations</Link>
            </div>
            <div className="md:block hidden"></div>
          </div>
        ) : (
          <Header />
        )
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs testimonials={data.testimonials} teams={data.teams} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/projects/:name" element={<WebProjectPage projects={data.projects} />} />
        <Route path="/projects-update/:name" element={<ProjectUpdate project={data.projectsUpdate} />} />
        <Route path="/admin/auth/login" element={<AdminLogin />} />
        <Route path="/admin/auth/signup" element={<AdminSignup />} />
        <Route path="/admin/reservations" element={
          <ProtectedRoute>
            <Reservation />
          </ProtectedRoute>
        } />
        <Route path="/admin/projects" element={
          <ProtectedRoute>
            <AdminProjects />
          </ProtectedRoute>
        } />
        <Route path="/admin" element={
          <ProtectedRoute>
            <AdminDashboard />
          </ProtectedRoute>
        } />
      </Routes>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
}

export default App;
