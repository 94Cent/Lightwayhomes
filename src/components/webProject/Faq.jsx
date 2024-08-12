import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../component/ui/accordion";
const FAQ = () => {
  return (
    <section className="pt-28 text-purple">
      <div>
        <h2 className="sm:text-2xl text-lg py-3 border-b border-b-purple font-bold text-center w-[90%]">
          Frequently Asked Questions
        </h2>
      </div>
      <Accordion
        type="single"
        collapsible
        className="md:w-[70%] w-[90%] mx-auto mt-6"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Who we are?</AccordionTrigger>
          <AccordionContent>
            Light Way Homes and Investment Company Limited in partnership with
            Casamia International Limited are developing The Roman height,
            Arepo. Our mission is to support Nigerians, especially first time
            home buyers achieve their dream of owning a home in a seamless and
            financially less stressful manner. We are committed to delivering
            houses that meet the yearnings of teaming customers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>About the Roman height</AccordionTrigger>
          <AccordionContent>
            Light Way Homes and Investment Company Limited in partnership with
            Casamia International Limited are developing The Roman height,
            Arepo. Our mission is to support Nigerians, especially first time
            home buyers achieve their dream of owning a home in a seamless and
            financially less stressful manner. We are committed to delivering
            houses that meet the yearnings of teaming customers.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Where is the Roman height ?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left">
            What title do you have over Roman height ?
          </AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </section>
  );
};
export default FAQ;
