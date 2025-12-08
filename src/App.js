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
import AdminBlog from "pages/admin/AdminBlog";
import AdminLogin from "pages/admin/AdminLogin";
import AdminSignup from "pages/admin/AdminSignup";
import AdminProjects from "pages/admin/AdminProjects";
import AdminDashboard from "pages/admin/AdminDashboard";
import ProtectedRoute from "pages/admin/ProtectedRoute";
import LogoColoured from "./assets/images/logo-colured.png";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AutoScroll from "components/AutoScroll";
import LandingPage from "pages/LandingPage";
import InspectionPage from "pages/InspectionPage";
import LandingPage2 from "pages/LandingPage2";
import SuccessPage from "pages/SuccessPage";
import PdfLandingPage from "pages/PdfLandingPage";
import Blog from "pages/Blog"
import BlogDetails from "pages/BlogDetails"

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
              <Link to="/admin/blogs" className={isActive("/admin/blogs")}>Blogs</Link>
            </div>
            <div className="md:block hidden"></div>
          </div>
        ) : (
          <Header />
        )
      }
      <Routes>
        <Route path="/pdf-page" element={<PdfLandingPage />} />

        <Route path="/Naples-landing-page" element={<LandingPage />} />
        <Route path="/Novara-landing-page" element={<LandingPage2 />} />
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs testimonials={data.testimonials} teams={data.teams} />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/career" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogDetails />} />
        <Route path="/inspection" element={<InspectionPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/projects/:name" element={<WebProjectPage projects={data.projects} />} />
        <Route path="/blogs/:name" element={<WebProjectPage blogs={data.blogs} />} />
        <Route path="/projects-update/:name" element={<ProjectUpdate project={data.projectsUpdate} />} />
        <Route path="/blogs-update/:name" element={<ProjectUpdate project={data.blogsUpdate} />} />
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
         <Route path="/admin/blogs" element={
  <ProtectedRoute>
    <AdminBlog />
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
      <AutoScroll />
    </div>
  );
}

export default App;
