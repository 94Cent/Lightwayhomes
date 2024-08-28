import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../component/ui/accordion";
const FAQ = ({faqs}) => {
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
        {faqs.map((faq, index) => (
          <AccordionItem value={`item-${index}`}>
          <AccordionTrigger>{faq.question}</AccordionTrigger>
          <AccordionContent>
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
export default FAQ;
