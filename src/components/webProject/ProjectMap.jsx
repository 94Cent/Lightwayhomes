const ProjectMap = ({ project }) => {
  return (
    <section className="mt-16 text-purple">
      <div>
        <h2 className="text-2xl py-3 border-b border-b-purple font-bold text-center">
          The Projects Map
        </h2>
      </div>
      <div className="h-96 mt-10 text-2xl font-medium w-full mx-auto">
        <iframe
          className="h-full w-full"
          src={project.location}
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen="true"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          title="Our location"
        ></iframe>
      </div>
    </section>
  );
};
export default ProjectMap;
