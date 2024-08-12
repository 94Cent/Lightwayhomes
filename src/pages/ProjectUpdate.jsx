import WebProject from "components/projectUpdate/WebProject";
import React from "react";
import Exterior from "components/projectUpdate/Exterior";
import { useParams } from "react-router-dom";
import PropertiesAmenities from "components/webProject/PropertiesAmenities";
import Shop from "../assets/icons/buy.svg";
import ProjectBronchure from "components/webProject/ProjectBrochure";
import FAQ from "components/webProject/Faq";
import ProjectMap from "components/webProject/ProjectMap";
import { Bell, Clock, Truck, MapPin } from "lucide-react";

const ProjectUpdate = ({ project }) => {
  const { name } = useParams();
  const projectName = name.replace(/-/g, " ");
  const projectUpdates = project.find(
    (p) => p.name.toLowerCase() === projectName.toLowerCase()
  );
  if (!projectUpdates) {
    return <div>Project not found</div>;
  }
  console.log(projectUpdates, "updates");
  return (
    <section className="mb-12">
      <WebProject project={projectUpdates} />
      {projectUpdates.projects.map((details) => (
        <section className="mb-20">
          <h2 className="border-purple border-b w-full text-purple text-2xl font-bold text-center py-12">
            {details.name}
          </h2>
          <Exterior project={details} />
          <div className="flex md:flex-row flex-col gap-y-8 justify-between p-4 bg-white relative lg:w-[70%] mx-auto sm:w-[80%] w-[90%] items-center">
            <div className="text-center">
            <h2 className="text-purple mt-2 font-semibold md:text-2xl text-lg">Project Duration</h2>
              <Clock className="text-purple size-12 mx-auto my-4" />
              <p className="text-purple text-xl">1 year 4 months</p>
            </div>
            <div className="text-center">
              <h2 className="text-purple mt-2 font-semibold md:text-2xl text-lg">
                Project Engineer
              </h2>
              <Truck className="text-purple size-12 mx-auto my-4" />
              <p className="text-purple text-xl">Julius Berger</p>
            </div>
            <div className="text-center">
              <h2 className="text-purple mt-2 font-semibold md:text-2xl text-lg">
                Project Location
              </h2>
              <MapPin className="text-purple size-12 mx-auto my-4" />
              <p className="text-purple text-xl">Lagos, Ikeja</p>
            </div>
          </div>
          <PropertiesAmenities />
          <div className="mt-14 flex flex-col justify-center lg:w-[70%] md:w-[83%] mx-auto sm:w-[80%] w-[90%]">
            <button className="w-full md:gap-x-12 gap-x-4 border bg-transparent border-purple py-4 rounded-none hover:text-white hover:bg-purple text-purple flex xl:px-44 md:px-28 px-6 items-center">
              <Bell style={{ fill: "purple" }} className="md:size-10 size-6" />
              <p className="lg:text-2xl sm:text-xl text-lg text-center mx-auto">
                Get notified on the project progress
              </p>
            </button>
            <button className="w-full md:gap-x-12 gap-x-4 border bg-transparent border-purple py-4 rounded-none text-purple flex xl:px-44 md:px-28 px-6 items-center mt-6">
              <img src={Shop} alt="bells" className="md:size-10 size-6" />
              <p className="lg:text-2xl sm:text-xl text-lg text-center mx-auto">
                Pre-order the project
              </p>
            </button>
          </div>
        </section>
      ))}
      <ProjectBronchure />
      <FAQ />
      <ProjectMap />
    </section>
  );
};

export default ProjectUpdate;
