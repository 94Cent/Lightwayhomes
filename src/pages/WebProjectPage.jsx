import BuildingInsight from "../components/webProject/BuildingInsight"
import Exterior from "../components/webProject/Exterior"
import FAQ from "../components/webProject/Faq"
import FloorStructure from "../components/webProject/FloorStructure"
import FourBedroomMansionatte from "../components/webProject/FourBedroom"
import Interior from "../components/webProject//Interior"
import OneBedroomMansionatte from "../components/webProject/OneBedroom"
import ProjectBronchure from "../components/webProject/ProjectBrochure"
import ProjectMap from "../components/webProject/ProjectMap"
import ProjectUpdate from "../components/webProject/ProjectUpdate"
import PropertiesAmenities from "../components/webProject/PropertiesAmenities"
import WebProject from "../components/webProject/WebProject"

const WebProjectPage=()=>{
    return(
<section>
    <WebProject/>
    <BuildingInsight/>
    <Exterior/>
    <Interior/>
    <FloorStructure/>
    <OneBedroomMansionatte/>
    <PropertiesAmenities/>
    <FourBedroomMansionatte/>
    <FAQ/>
    <ProjectBronchure/>
    <ProjectUpdate/>
    <ProjectMap/>
</section>
    )
}
export default WebProjectPage