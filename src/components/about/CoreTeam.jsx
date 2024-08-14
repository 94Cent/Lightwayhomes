import React, { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "component/ui/tabs";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "component/ui/popover";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "component/ui/alert-dialog"
import AboutTeam from "./AboutTeam";

const CoreTeam = ({ teams }) => {
  const [activeIndex, setActiveIndex] = useState("management");

  return (
    <section>
      <Tabs
        value={activeIndex}
        onValueChange={(value) => setActiveIndex(value)}
        defaultValue="management"
        className="container px-0 mb-12 md:mt-0 mt-20"
      >
        <h2 className="text-purple w-full py-6 border-b-purple border-b text-2xl font-medium text-center">
          Meet Our Core Team
        </h2>
        <TabsList className="relative z-10 sm:w-[65%] text-purple flex md:flex-row flex-col items-center mx-auto justify-center md:mt-2.5 mt-12 mb-10 gap-y-4 bg-transparent">
          <TabsTrigger
            value="management"
            className="px-4 w-[90%] py-4 text-xl cursor-pointer border-purple border hover:bg-purple hover:text-white text-purple"
            style={{
              backgroundColor: activeIndex === "management" ? "purple" : "transparent",
              color: activeIndex === "management" ? "white" : "purple",
            }}
          >
            Management
          </TabsTrigger>
          <TabsTrigger
            value="Board of Directors"
            className="px-4 w-[90%] py-4 text-xl cursor-pointer border-purple border hover:bg-purple hover:text-white text-purple"
            style={{
              backgroundColor: activeIndex === "Board of Directors" ? "purple" : "transparent",
              color: activeIndex === "Board of Directors" ? "white" : "purple",
            }}
          >
            Board of Directors
          </TabsTrigger>
        </TabsList>

        <TabsContent
          value="management"
          className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center mx-auto gap-y-10 md:mt-0 mt-24"
        >
          {teams.map((team, index) => (
            <div
              key={index}
              className="w-64 rounded-sm overflow-hidden"
            >
              <div className="bg-gray-300 md:h-64 h-56">
                <img
                  src={team.img}
                  alt="team-img"
                  className="h-full w-full object-cover"
                />
              </div>
              <AlertDialog className="bg-transparent">
              <AlertDialogTrigger
                className="bg-gray-300 border-2 w-full text-purple text-sm font-medium
                  py-2 border-purple"
              >
                Learn More
              </AlertDialogTrigger>
              <AlertDialogContent className="w-full bg-transparent border-0 ">
                <AboutTeam team={team} />
              </AlertDialogContent>
              </AlertDialog>
              <div className="bg-purple text-white text-center pb-3">
                <h2 className="pt-3 pb-1 font-medium">{team.name}</h2>
                <p className="font-extralight">{team.role}</p>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent
          value="Board of Directors"
          className="grid lg:grid-cols-3 sm:grid-cols-2 place-items-center gap-y-10"
        >
          {teams.map((team, index) => (
            <div
              key={index}
              className="w-64 rounded-sm overflow-hidden"
            >
              <div className="bg-gray-300 md:h-64 h-56">
                <img
                  src={team.img}
                  alt="team-img"
                  className="h-full w-full object-cover"
                />
              </div>
              <button
                className="bg-gray-300 border-2 w-full text-purple text-sm font-medium
                  py-2 border-purple"
              >
                Learn More
              </button>
              <div className="bg-purple text-white text-center pb-3">
                <h2 className="pt-3 pb-1 font-medium">{team.name}</h2>
                <p className="font-extralight">{team.role}</p>
              </div>
            </div>
          ))}
        </TabsContent>
      </Tabs>
    </section>
  );
};

export default CoreTeam;
