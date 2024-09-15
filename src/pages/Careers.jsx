import Career from "../components/careers/Career";
import WhatWeDo from "../components/careers/WhatWeDo";
import Application from "../components/careers/Application";
import CoreValues from "../components/about/CoreValues";
import { Helmet } from "react-helmet";

const Careers = () => {
  return (
    <section>
      <Helmet>
        <title>Careers - Light Way Homes</title>
        <meta
          name="description"
          content="Explore career opportunities with us."
        />
      </Helmet>
      <Career />
      <WhatWeDo />
      <Application />
      <div className="my-6">
        <CoreValues />
      </div>
    </section>
  );
};

export default Careers;
