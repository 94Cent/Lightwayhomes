import romanHeightImg from "../../assets/images/contact-hero.png";
const WebProject = ({project}) => {
  return (
    <section className="w-full overflow-hidden">
      <div className="h-full relative">
        <div>
          <img className="h-48 sm:h-full" src={romanHeightImg} alt="" />
        </div>
        <div className="text-center text-white text-4xl z-10 h-full flex items-center absolute top-0 font-medium w-full">
          <h2 className="w-full">{project.name}</h2>
        </div>
      </div>
      <div className="border-b border-purple border-x py-5">
        <p className="first-letter:font-medium first-letter:text-2xl sm:w-[30rem] w-full px-2 text-lg text-purple text-center mx-auto">
        {project.description}
        </p>
      </div>
    </section>
  );
};
export default WebProject;