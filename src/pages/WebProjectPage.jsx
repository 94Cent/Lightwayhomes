import { useParams } from "react-router-dom";
import BuildingInsight from "../components/webProject/BuildingInsight";
import Exterior from "../components/webProject/Exterior";
import FAQ from "../components/webProject/Faq";
import FloorStructure from "../components/webProject/FloorStructure";
import FourBedroomMansionatte from "../components/webProject/FourBedroom";
import Interior from "../components/webProject//Interior";
import OneBedroomMansionatte from "../components/webProject/OneBedroom";
import ProjectBronchure from "../components/webProject/ProjectBrochure";
import ProjectMap from "../components/webProject/ProjectMap";
import ProjectUpdate from "../components/webProject/ProjectUpdate";
import PropertiesAmenities from "../components/webProject/PropertiesAmenities";
import WebProject from "../components/webProject/WebProject";
import { useEffect, useState } from "react";

const WebProjectPage = ({ projects }) => {
  const { name } = useParams();
  const [projectCat, setProjectCat] = useState(null);
  const projectName = name.replace(/-/g, " ");
  const project = projects.find(
    (p) => p.name.toLowerCase() === projectName.toLowerCase()
  );
  const projectsName = name
    .replace(/^The-/, "")
    .replace(/-/g, " ")
    .toUpperCase();
  useEffect(() => {
    fetchProjects();
  }, [name]);

  const fetchProjects = async () => {
    try {
      const response = await fetch(
        "http://lightwayhomesltd.com/backend/controller/project.php?action=getProjectByName"
      );
      const data = await response.json();

      if (response.ok) {
        // Find the project category that matches the projectName
        const matchedProjectCat = data.find(
          (p) => p.name.toUpperCase() === projectsName
        );
        console.log("matched", matchedProjectCat);
        setProjectCat(matchedProjectCat);
      } else {
        console.log("Failed to fetch projects");
      }
    } catch (error) {
      console.log("Error fetching project", error);
    }
  };

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <section>
      <div>
        <WebProject project={project} projectCat={projectCat} />
        <BuildingInsight project={project} />
        <Exterior project={project} />
        <Interior project={project} />
        <FloorStructure project={project} />
        <OneBedroomMansionatte project={project} projectCat={projectCat} />
        <PropertiesAmenities project={project} />
        <FourBedroomMansionatte project={project} projectCat={projectCat} />
        <FAQ />
        <ProjectBronchure project={project} />
        <ProjectUpdate project={project} />
        <ProjectMap project={project} />
      </div>
    </section>
  );
};
export default WebProjectPage;
