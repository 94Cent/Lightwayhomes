const BuildingInsight = ({ project }) => {
  return (
    <section className="flex flex-col my-12 gap-y-20 items-center justify-center">
      <div className="bg-white md:rounded-lg rounded overflow-hidden xl:w-[70%] md:w-[80%] w-[90%]">
        <iframe
          className="w-full md:h-[480px] h-80"
          src={project.channelLink}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          frameBorder="0"
          allowTransparency="true"
        ></iframe>
      </div>
      <div className="text-purple font-medium">
        <h2 className="text-2xl pb-4 text-center">
          A CAPTIVATING AND LUXURIOUS LIFESTYLE!!!!
        </h2>
        <p className="md:w-[80%] w-[90%] mx-auto first-letter:text-2xl first-letter:text-purple first-letter:font-medium md:text-left text-center">
          {project.description}
        </p>
      </div>
    </section>
  );
};
export default BuildingInsight;
