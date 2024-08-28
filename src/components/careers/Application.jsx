import applicationImg from "../../assets/images/application.png";
const Application = () => {
  return (
    <section className="relative w-full md:h-[70vh] h-96">
      <img className="h-full w-full" src={applicationImg} alt="" />
      <div className="absolute sm:px-0 px-4 top-0 left-0 flex items-center flex-col justify-center text-center w-full h-full">
        <h3 className="text-white text-2xl font-medium sm:w-96 w-full text-center sm:pb-16 pb-8">
          Apply today and be part of this great vision
        </h3>
        <a href="https://www.linkedin.com/company/light-way-homes-and-investment/">
          <button className="text-white border-white border sm:px-24 px-16 py-3 rounded-lg font-medium">
            See Available Jobs
          </button>{" "}
        </a>
      </div>
    </section>
  );
};
export default Application;
