import {
  FaLightbulb,
  FaLock,
  FaRoad,
  FaSquareParking,
  FaToilet,
  FaToriiGate,
  FaWater,
} from "react-icons/fa6";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import {
  FaChild,
  FaHouseUser,
  FaWalking,
  FaSwimmingPool,
  FaTools,
} from "react-icons/fa";
import { LuArrowUpCircle, LuMonitor } from "react-icons/lu";
import { PiGarageFill } from "react-icons/pi";
import { MdStoreMallDirectory } from "react-icons/md";

const PropertiesAmenities = ({ project }) => {
  const iconSize = 48; // size of the icon

  const ammenitiesIcon = [
    {
      "The Naples": {
        features: [
          {
            icon: <FaSquareParking size={iconSize} />,
            label: "Parking Space",
          },
          {
            icon: <FaTools size={iconSize} />,
            label: "Utility and Management Service",
          },
          {
            icon: <FaLightbulb size={iconSize} />,
            label: "24 Hours Power Supply",
          },
          {
            icon: <FaChild size={iconSize} />,
            label: "Glazed Balcony",
          },
          {
            icon: <FaToriiGate size={iconSize} />,
            label: "24/7 Hours Security",
          },
          {
            icon: <FaWalking size={iconSize} />,
            label: "Playground and Greenery",
          },
        ],
      },
    },
    {
      "The Roman Heights": {
        features: [
          {
            icon: <FaLightbulb size={iconSize} />,
            label: "Uninterrupted Power Supply",
          },
          {
            icon: <FaToilet size={iconSize} />,
            label: "Central Sewage System",
          },
          {
            icon: <FaWater size={iconSize} />,
            label: "Central Water Treatment",
          },
          {
            icon: <HiOutlineOfficeBuilding size={iconSize} />,
            label: "Rooftop Lounge",
          },
          {
            icon: <FaHouseUser size={iconSize} />,
            label: "Co-working Space",
          },
          {
            icon: <FaToriiGate size={iconSize} />,
            label: "Automated Gate Access",
          },
          {
            icon: <LuMonitor size={iconSize} />,
            label: "CCTV Cover",
          },
          {
            icon: <LuArrowUpCircle size={iconSize} />,
            label: "Elevator",
          },
          {
            icon: <FaSwimmingPool size={iconSize} />,
            label: "Swimming Pool",
          },
          {
            icon: <FaLock size={iconSize} />,
            label: "Uniformed Security",
          },
          {
            icon: <FaLightbulb size={iconSize} />,
            label: "Adequate Lighting",
          },
          {
            icon: <FaChild size={iconSize} />,
            label: "Standard Gym",
          },
          {
            icon: <PiGarageFill size={iconSize} />,
            label: "Perimeter Fencing",
          },
        ],
      },
    },
    {
      "The Novara Courts": {
        features: [
          {
            icon: <PiGarageFill size={iconSize} />,
            label: "Gate House/ Security",
          },
          {
            icon: <FaLightbulb size={iconSize} />,
            label: "Street Light",
          },
          {
            icon: <FaWater size={iconSize} />,
            label: "Central Drainage System",
          },
          {
            icon: <FaLightbulb size={iconSize} />,
            label: "Electricity Connection",
          },
          {
            icon: <FaRoad size={iconSize} />,
            label: "Motorable Road",
          },
          {
            icon: <FaSwimmingPool size={iconSize} />,
            label: "Recreational/Family Entertainment",
          },
          {
            icon: <FaWater size={iconSize} />,
            label: "Beautiful Landscape Environment/ Green Areas",
          },
          {
            icon: <FaChild size={iconSize} />,
            label: "Gymnasium",
          },
          {
            icon: <MdStoreMallDirectory size={iconSize} />,
            label: "Estate Mall",
          },
          {
            icon: <PiGarageFill size={iconSize} />,
            label: "Perimeter Fencing",
          },
        ],
      },
    },
  ];

  const projectName = project.name; // Assuming project.name contains "The Naples", "The Roman Heights", or "The Novara Courts"
  const projectFeatures =
    ammenitiesIcon.find((item) => item[projectName])?.[projectName].features ||
    [];

  return (
    <section className="md:mt-24 mt-8">
      <div>
        <h2 className="text-2xl py-3 font-bold text-center text-purple">
          Properties Amenities
        </h2>
        <div className="border-purple lg:w-[70%] md:w-[83%] mx-auto sm:w-[80%] w-[90%] border-x border text-purple md:py-8 py-4">
          <h5 className="xl:md:w-[40%] md:w-[80%] w-[90%] mx-auto">
            {project.amenitiesDescription}
          </h5>
        </div>
        <div className="grid sm:grid-cols-3 grid-cols-2 place-items-center gap-y-16 md:text-base text-sm mx-auto text-purple md:w-[83%] sm:w-[80%] w-[90%]">
          {projectFeatures.length > 0 ? (
            projectFeatures.map((amenity, index) => (
              <div
                key={index}
                className="border border-purple text-center px-1 sm:w-48 w-[90%] justify-center h-44 flex flex-col items-center"
              >
                {amenity.icon}
                <div className="pt-6">{amenity.label}</div>
              </div>
            ))
          ) : (
            <p>No features available for this project.</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PropertiesAmenities;
