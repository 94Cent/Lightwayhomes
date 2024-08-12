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

const WebProjectPage = ({ projects }) => {
  const { name } = useParams();
  const projectName = name.replace(/-/g, " ");
  const project = projects.find(
    (p) => p.name.toLowerCase() === projectName.toLowerCase()
  );
  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <section>
      <WebProject project={project} />
      <BuildingInsight project={project} />
      <Exterior project={project} />
      <Interior project={project} />
      <FloorStructure project={project} />
      <OneBedroomMansionatte project={project} />
      <PropertiesAmenities project={project} />
      <FourBedroomMansionatte project={project} />
      <FAQ />
      <ProjectBronchure />
      <ProjectUpdate />
      <ProjectMap />
    </section>
  );
};
export default WebProjectPage;
