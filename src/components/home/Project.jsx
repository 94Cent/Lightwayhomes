import React, { useState, useEffect } from "react";
import "../SliderCard.css";
import ProjectImg from "../../assets/images/project-1.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "component/ui/tabs";
import { Link } from "react-router-dom";

const ProjectCard = ({ images, project }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [prevImage, setPrevImage] = useState(null);

  const nextImage = () => {
    setPrevImage(currentImage);
    setCurrentImage((prev) => (prev + 1) % images.length);
  };

  const prevImageHandler = () => {
    setPrevImage(currentImage);
    setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
  };

  const handleThumbnailClick = (index) => {
    if (index !== currentImage) {
      setPrevImage(currentImage);
      setCurrentImage(index);
    }
  };

  const getProjectLink = (id) => {
    switch (id) {
      case "1":
        return "/The-Naples";
      case "2":
        return "/The-Roman-Heights";
      case "3":
        return "/The-Novara-Courts";
      default:
        return "#";
    }
  };

  return (
    <div className="w-full p-4 rounded-t mx-auto">
      <div className="relative slider-container h-80">
        {project.pic_names.map((image, index) => (
          <img
            key={index}
            src={`http://lightwayhomesltd.com/backend/uploads/${image}`}
            alt={project.pic_names[currentImage]}
            className={`slider-image object-cover rounded-t-lg h-full border border-purple ${
              index === currentImage ? "active" : ""
            } ${index === prevImage ? "prev" : ""}`}
          />
        ))}
        <button
          onClick={prevImageHandler}
          className="absolute top-1/2 transform -translate-y-1/2 left-0 size-9 bg-purple text-2xl font-light text-white rounded-full"
        >
          &#10094;
        </button>
        <button
          onClick={nextImage}
          className="absolute top-1/2 transform -translate-y-1/2 right-0 size-9 text-2xl font-light bg-purple text-white rounded-full"
        >
          &#10095;
        </button>
      </div>
      <div className="max-w-xl grid grid-cols-4 mx-auto gap-4 w-full md:gap-x-4 gap-x-2 gap-y-2 my-4">
        {project.pic_names.map((image, index) => (
          <img
            key={index}
            onClick={() => handleThumbnailClick(index)}
            src={`http://lightwayhomesltd.com/backend/uploads/${image}`}
            alt="Project Thumbnail"
            className={`w-full md:h-24 h-[75px] object-cover cursor-pointer rounded border ${
              index === currentImage ? "border-2 border-purple" : "border-black"
            }`}
          />
        ))}
      </div>
      <div className="max-w-xl mx-auto bg-purple text-white rounded-lg overflow-hidden w-full">
        <div className="p-6 border-b text-center">
          <h2 className="text-xl font-bold">{project.title}</h2>
          <p className="text-gray-200 mt-2">{project.address}</p>
        </div>
        <div className="grid grid-cols-2 gap-px">
          <div className="bg-purple-700 p-4 border-r">
            <p className="text-gray-200">Starting from</p>
            <p className="md:text-2xl text-xl font-normal mt-4">
              {project.pricing}
            </p>
          </div>
          <div>
            <div className="bg-white text-purple p-4 flex items-center justify-center">
              <button className="font-normal">Pre-Order</button>
            </div>
            <Link to={`projects${getProjectLink(project.project_name_id)}`}>
              <div className="bg-purple-700 text-center col-span-2 p-4">
                <button className="font-normal">Learn More</button>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProjectSection = ({ activeIndex, setActiveIndex }) => (
  <TabsList className="relative z-50 flex md:flex-row flex-col justify-between w-[90%] gap-y-4 mx-auto md:my-12 my-6 mb-44 bg-transparent">
    <TabsTrigger
      value="ongoing Projects"
      className={`px-4 md:w-[30%] w-full py-4 text-xl ${
        activeIndex === "ongoing"
          ? "bg-purple text-white"
          : "border-purple border hover:bg-purple hover:text-white text-black"
      }`}
      onClick={() => setActiveIndex("ongoing")}
    >
      Ongoing Projects
    </TabsTrigger>
    <TabsTrigger
      value="completed Projects"
      className={`px-4 py-4 md:w-[30%] w-full text-xl ${
        activeIndex === "completed"
          ? "bg-purple text-white "
          : "border-purple border hover:bg-purple hover:text-white text-black"
      }`}
      onClick={() => setActiveIndex("completed")}
    >
      Completed Projects
    </TabsTrigger>
    <TabsTrigger
      value="upcoming Projects"
      className={`px-4 py-4 md:w-[30%] w-full text-xl ${
        activeIndex === "upcoming"
          ? "bg-purple text-white"
          : "border-purple border hover:bg-purple hover:text-white text-black"
      }`}
      onClick={() => setActiveIndex("upcoming")}
    >
      Upcoming Projects
    </TabsTrigger>
  </TabsList>
);

const Projects = () => {
  const images = [ProjectImg, ProjectImg, ProjectImg, ProjectImg];
  const [projects, setProjects] = useState([]);
  const [activeIndex, setActiveIndex] = useState("ongoing");

  useEffect(() => {
    fetchProject();
  }, []);

  const fetchProject = async () => {
    try {
      const response = await fetch(
        "http://lightwayhomesltd.com/backend/controller/project.php?action=getAllProject"
      );
      const data = await response.json();
      setProjects(data);
    } catch (error) {
      console.log("Error fetching projects", error);
    }
  };

  // Filter projects based on status
  const ongoingProjects = projects.filter((project) => project.status === "in progress");
  const completedProjects = projects.filter((project) => project.status === "completed");
  const upcomingProjects = projects.filter((project) => project.status === "upcoming");

  return (
    <section className="py-8">
      <Tabs
        value={activeIndex}
        onValueChange={setActiveIndex}
        defaultValue="ongoing Projects"
        className="mx-auto text-purple"
      >
        <h2 className="md:text-3xl text-2xl font-normal my-4 text-center mb-8">
          Our Projects
        </h2>
        <ProjectSection
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
        />
        <TabsContent
          value="ongoing"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-4 xl:w-[80%] lg:w-[90%] md:w-full w-full xl:gap-x-16 lg:gap-x-10 gap-x-6 gap-y-4"
        >
          {ongoingProjects.length > 0 ? (
            ongoingProjects.map((project, index) => (
              <ProjectCard key={index} images={images} project={project} />
            ))
          ) : (
            <h2 className="text-center text-xl text-gray-500 font-bold w-[80vw] mx-auto flex justify-center items-center">
              No ongoing projects available.
            </h2>
          )}
        </TabsContent>
        <TabsContent
          value="completed"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-4 xl:w-[80%] lg:w-[90%] md:w-full w-full xl:gap-x-16 lg:gap-x-10 gap-x-6 gap-y-4"
        >
          {completedProjects.length > 0 ? (
            completedProjects.map((project, index) => (
              <ProjectCard key={index} images={images} project={project} />
            ))
          ) : (
            <h2 className="text-center text-xl text-gray-500 font-bold w-[90vw] mx-auto flex justify-center items-center">
              No completed projects available.
            </h2>
          )}
        </TabsContent>
        <TabsContent
          value="upcoming"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-4 xl:w-[80%] lg:w-[90%] md:w-full w-full xl:gap-x-16 lg:gap-x-10 gap-x-6 gap-y-4"
        >
          {upcomingProjects.length > 0 ? (upcomingProjects.map((project, index) => (
              <ProjectCard key={index} images={images} project={project} />
            ))
          ) : (
            <h2 className="text-center text-xl text-gray-500 font-bold w-[90vw] mx-auto flex justify-center items-center">
              No upcoming projects available.
            </h2>
          )}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default Projects;
