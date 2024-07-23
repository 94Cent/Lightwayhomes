import React from 'react';
import Project1 from "../../assets/images/project-1.png";
import ProjectSm from "../../assets/images/project-1.png";

function Projects() {
  const ProjectCard = () => (
    <div className="w-full p-4 rounded-t mx-auto">
      <img src={Project1} alt="Project" className="w-full md:h-80 h-64 object-cover rounded mb-4" />
      <div className="grid grid-cols-4 mx-auto gap-4 w-full md:gap-x-4 gap-x-2 gap-y-2">
        {Array(4).fill().map((_, index) => (
          <img key={index} src={ProjectSm} alt="Project Thumbnail" className="w-full md:h-24 h-[75px] object-cover rounded mb-4" />
        ))}
      </div>
      <div className="max-w-xl mx-auto bg-purple text-white rounded-lg overflow-hidden w-full">
        <div className="p-6 border-b text-center">
          <h2 className="text-xl font-bold">Life worth complex</h2>
          <p className="text-gray-200 mt-2">Ajah, off cement road block d</p>
        </div>
        <div className="grid grid-cols-2 gap-px">
          <div className="bg-purple-700 p-4 border-r">
            <p className="text-gray-200">Starting from</p>
            <p className="md:text-2xl text-xl font-normal mt-4">#30,000,000</p>
          </div>
          <div>
            <div className="bg-white text-purple p-4 flex items-center justify-center">
              <button className="font-normal">Pre-Order</button>
            </div>
            <div className="bg-purple-700 text-center col-span-2 p-4">
              <button className="font-normal">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const ProjectSection = () => (
    <div className="flex md:flex-row flex-col justify-between w-[90%] gap-y-4 mx-auto md:my-12 my-6">
      <button className="px-4 md:w-[30%] py-4 bg-purple text-white text-xl">Ongoing Projects</button>
      <button className="px-4 py-4 md:w-[30%] border border-purple text-xl">Completed Projects</button>
      <button className="px-4 py-4 border border-purple md:w-[30%] text-xl">Upcoming Projects</button>
    </div>
  );

  return (
    <section className="md:py-16 py-8">
      <div className="container mx-auto text-purple">
        <h2 className="md:text-3xl text-2xl font-normal my-4 text-center mb-8">Our Projects</h2>
        <ProjectSection />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 mx-auto gap-4 md:w-[80%] w-full gap-x-16 gap-y-4">
          {Array(4).fill().map((_, index) => (
            <ProjectCard key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
