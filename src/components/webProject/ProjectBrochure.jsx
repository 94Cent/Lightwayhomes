const ProjectBronchure = ({ project }) => {
  return (
    <div>
      {project.brochure && (
        <section className="mt-20 bg-gray-300 text-lg h-80 flex items-center justify-center flex-col gap-y-10 font-medium text-purple text-center px-3">
          <h2 className="text-2xl">Download The Project Bronchure</h2>
          <a href={project.brochure} download={project.name}>
            <button className="border border-purple py-3 sm:w-[27rem] w-full">
              Get it Now
            </button>{" "}
          </a>
        </section>
      )}
    </div>
  );
};
export default ProjectBronchure;
