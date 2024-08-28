const WebProject = ({project}) => {
  return (
    <section className="w-full overflow-hidden">
      <div className="h-full relative">
        <div>
          <img className="w-full md:h-[90vh] h-[400px] object-cover zoom-in-150" src={project.image} alt="" />
        </div>
        <div className="md:px-12 px-6 absolute md:h-[90vh] h-full inset-0 bg-black bg-opacity-50 flex flex-col text-white text-center text-6xl font-bold justify-center items-center">
          <h2 className="w-full">{project.name}</h2>
        </div>
      </div>
      {/* <div className="border-b border-purple border-x py-5">
        <p className="first-letter:font-medium first-letter:text-2xl sm:w-[80%] w-full px-2 text-lg text-purple text-center mx-auto">
        {project.description}
        </p>
      </div> */}
    </section>
  );
};
export default WebProject;