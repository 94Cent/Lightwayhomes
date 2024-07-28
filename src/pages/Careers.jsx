import Career from "../components/careers/Career";
import WhatWeDo from "../components/careers/WhatWeDo";
import Application from "../components/careers/Application";
import CoreValues from "../components/about/CoreValues";


const Careers = () =>{
    return (
        <section>
            <Career/>
            <WhatWeDo/>
            <Application/>
            <div className="my-6">
            <CoreValues/>
            </div>
        </section>
    )
}

export default Careers;