import oneBedroom from "../../assets/images/1-bedroom.png";
const OneBedroomMansionatte = ({project}) => {
  return (
    <section className="pt-24">
      <div className="pb-5">
        <h2 className="text-purple mb-12 text-2xl border-b-2 border-b-purple py-6 text-center font-bold">
          Building Prototype
        </h2>
      </div>
      <div className="relative md:w-[70%] mx-auto sm:w-[80%] w-[90%] border border-purple">
        <div>
          <img className="w-full mx-auto md:h-[80vh] h-80" src={oneBedroom} alt="" />
        </div>
        <div className="absolute top-6 w-full text-center font-bold text-purple md:text-2xl text-lg px-2">
          <h2>1-BEDROOM MANSIONATTE</h2>
        </div>
        <div className="flex items-center justify-between absolute bottom-10 w-full px-2">
          <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">
            &#10094;
          </button>
          <button className="bg-purple text-white sm:h-10 sm:w-10 w-7 h-7 rounded-full sm:text-2xl md:text-3xl">
            &#10095;
          </button>
        </div>
      </div>
      <div className="text-purple border-b border-x md:w-[70%] mx-auto sm:w-[80%] w-[90%] border-purple pt-10">
        <h2 className="py-4 md:text-2xl text-xl text-center">1-BEDROOM MANSIONATTE</h2>
        <p className="lg:w-[70%] md:w-[80%] w-[90%] mx-auto pb-6 pt-1 font-medium text-lg">
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
export default OneBedroomMansionatte;