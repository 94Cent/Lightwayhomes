import exterior from "../../assets/images/exterior.png";
const Exterior = () => {
  return (
    <section className="pt-10">
      <div className="pb-5">
        <h2 className="text-purple text-2xl border-b-2 border-b-purple py-3 text-center">
          Building Structure
        </h2>
      </div>
      <div className="relative md:w-[80%] mx-auto sm:w-full">
        <div>
          <img className="w-full mx-auto md:h-screen" src={exterior} alt="" />
        </div>
        <div className="absolute top-6 right-5 text-purple sm:text-2xl text-lg">
          <h2>THE EXTERIORS STRUCTURE</h2>
        </div>
        <div className="flex items-center justify-between h-full absolute top-0 w-full px-2">
          <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">
            &#10094;
          </button>
          <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">
            &#10095;
          </button>
        </div>
      </div>
      <div className="text-purple pt-16 text-center">
        <h2 className="pb-8 text-2xl">THE EXTERIORS</h2>
        <p className="sm:w-[90%] mx-auto">
          Careful attention was paid to developing The Naples apartments, with
          manifest emphasis on simple shapes, purposeful functionality,
          intentional asymmetry, clean lines, natural lighting, open floor
          concept and smart home features. Apartments comes with balconies to
          give a panoramic view of the environment, aesthetics, outdoor space,
          fresh air and allow natural light into your apartment.
        </p>
      </div>
    </section>
  );
};
export default Exterior;