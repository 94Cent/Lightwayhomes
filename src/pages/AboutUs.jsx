import Appreciation from "../components/about/Appreciation";
import AboutHero from "../components/about/AboutHero";
import CoreTeam from "../components/about/CoreTeam";
import CoreValues from "../components/about/CoreValues";
import { Mission, Vision } from "../components/about/Mission";
import TheOrganisation from "../components/about/TheOrganization";
import { Helmet } from "react-helmet";

const AboutUs = ({ testimonials, teams }) => {
  return (
    <section>
      <Helmet>
        <title>About Us - Light Way Homes</title>
        <meta
          name="description"
          content="Learn more about us, our team, and customer testimonials."
        />
      </Helmet>

      <AboutHero />
      <TheOrganisation />
      <Mission />
      <Vision />
      <CoreValues />
      <CoreTeam teams={teams} />
      <Appreciation testimonial={testimonials} />
    </section>
  );
};
export default AboutUs;
