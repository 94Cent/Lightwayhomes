import AboutHero from "../components/about/AboutHero"
import CoreTeam from "../components/about/CoreTeam"
import CoreValues from "../components/about/CoreValues"
import {Mission, Vision } from "../components/about/Mission"
import TheOrganisation from "../components/about/TheOrganization"

const AboutUs=()=>{
    return(
        <section>
            <AboutHero/>
            <TheOrganisation/>
            <Mission/>
            <Vision/>
            <CoreValues/>
            <CoreTeam/>
        </section>
    )
}
export default AboutUs
