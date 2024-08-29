import { Link } from "react-router-dom";
const ProjectUpdate = ({project}) => {
  return (
    <section className="mt-20 text-center bg-gray-300 text-lg h-80 flex items-center justify-center flex-col gap-y-10 font-medium text-purple px-3">
      <h2 className="text-2xl">Projects Updates</h2>
      <p className="font-normal">
        You can check our updates on {project.name} project
      </p>
      <Link to={`/projects-update/${project.name}`} className="border border-purple py-3 sm:w-[27rem] w-full">
        Get it Now
      </Link>
    </section>
  );
};
export default ProjectUpdate;
