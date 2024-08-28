import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../../component/ui/card";

import { AlertDialogCancel } from "component/ui/alert-dialog";

const AboutTeam = ({ team }) => {
  return (
    <div className="mx-auto w-full flex justify-center items-center">
      <Card className="rounded-none w-full text-purple">
        <CardHeader className="py-0">
          <CardTitle className="text-center border-b border-purple py-6">
            {team.name}
          </CardTitle>
          <AlertDialogCancel className="w-8 h-8 bg-purple relative left-[90%] -top-14 rounded-full flex justify-center items-center hover:bg-purple focus:outline-none text-white text-2xl font-semibold text-center hover:text-white pb-4">
            x
          </AlertDialogCancel>
        </CardHeader>
        <CardContent className="py-0 pb-6 my-0 h-96 overflow-y-auto">
          <p>{team.about}</p>
          <br />
          {team.about2 && <p>{team.about2}</p>}
          <br />
          {team.about3 && <p>{team.about3}</p>}
        </CardContent>
      </Card>
    </div>
  );
};

export default AboutTeam;
