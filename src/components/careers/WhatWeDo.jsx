import together from "../../assets/images/together.png";
import excellently from "../../assets/images/excellently.png";
import clients from "../../assets/images/client.png";
const WhatWeDo = () => {
  return (
    <section className="container relative md:h-[73rem] h-full mb-12 md:mb-0 flex flex-col gap-y-10 items-center justify-center md:mt-8 mt-8">
      <div className="md:absolute md:pb-0 pb-4 top-0 md:left-4 md:border-0 border-b border-purple">
        <div className="w-[1px] hidden md:block h-[32rem] bg-purple left-28 relative"></div>
        <div className="md:w-[27rem] relative md:h-[17rem]">
          <img
            className="w-full h-full md:block hidden"
            src={excellently}
            alt=""
          />
          <div className="md:absolute top-0 md:text-white text-purple md:px-3 md:text-lg">
            <h3 className="md:py-4 py-2 pb-5 md:px-3 text-2xl font-medium text-center">
              We do it excellently
            </h3>
            <p className="md:text-left text-center">
              We’re relentless in our drive to understand our users better
              through data-driven insights, so we can build the most impactful
              financial products. We’re always ready to step-up and challenge
              the status-quo but have the humility to seek feedback, listen and
              learn. We seek continuous improvement in our overall pursuit of
              excellence.
            </p>
          </div>
        </div>
      </div>
      <div className="md:absolute md:pb-0 pb-4 flex flex-col items-center top-0 left-96 md:border-0 border-b border-purple">
        <div className="w-[1px] hidden md:block h-48 bg-purple"></div>
        <div className="md:w-[26rem] md:text-lg relative md:h-60">
          <img
            className="w-full h-full md:block hidden"
            src={together}
            alt=""
          />
          <div className="md:absolute top-0 px-3 md:text-white text-purple md:px-3 md:text-lg">
            <h3 className="py-4 pb-5 md:px-3 text-2xl font-medium text-center">
              We do it together
            </h3>
            <p className="md:text-left text-center">
              You ‘never walk alone’ working at Lightway; we collaborate
              fiercely to protect our vision. It’s ‘Our. We. Us.’ over here and
              that means we take deep ownership of our work, our users, our
              challenges and our opportunities. We do great things as a team
            </p>
          </div>
        </div>
      </div>
      <div className="md:absolute md:pb-0 pb-4 top-0 right-4 md:border-0 border-b border-purple">
        <div className="w-[1px] hidden md:block h-[53rem] bg-purple relative left-80"></div>
        <div
          className="relative md:w-[28rem] md:h-72
        "
        >
          <img className="w-full h-full md:block hidden" src={clients} alt="" />
          <div className="md:absolute top-0 md:text-white text-purple md:px-3 md:text-lg">
            <h3 className="py-4 pb-5 md:px-3 text-2xl font-medium text-center">
              We do it for our esteemed clients
            </h3>
            <p className="md:text-left text-center">
              The experience of our users matter deeply to us because they’re
              the core of our existence. Everything we think, build, iterate and
              refine is for because our users are worth it. So we’ll work
              everyday to simplify complexity, improve speed & accessibility and
              create outstanding service experiences.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default WhatWeDo;
