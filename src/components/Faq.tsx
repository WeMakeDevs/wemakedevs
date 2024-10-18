import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { ViewContainer } from "./ui/view-container";

type FaqType = {
  question: string;
  answer: string;
};

const FAQS: FaqType[] = [
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laudantium nesciunt pariatur iusto deleniti at ratione aperiam nostrum repellendus. Sequi?",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laudantium nesciunt pariatur iusto deleniti at ratione aperiam nostrum repellendus. Sequi?",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laudantium nesciunt pariatur iusto deleniti at ratione aperiam nostrum repellendus. Sequi?",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laudantium nesciunt pariatur iusto deleniti at ratione aperiam nostrum repellendus. Sequi?",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laudantium nesciunt pariatur iusto deleniti at ratione aperiam nostrum repellendus. Sequi?",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laudantium nesciunt pariatur iusto deleniti at ratione aperiam nostrum repellendus. Sequi?",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laudantium nesciunt pariatur iusto deleniti at ratione aperiam nostrum repellendus. Sequi?",
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur?",
    answer:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi laudantium nesciunt pariatur iusto deleniti at ratione aperiam nostrum repellendus. Sequi?",
  },
];

const halfLength = Math.ceil(FAQS.length / 2);

const Faq = () => {
  return (
    <section id='faq' className='my-32'>
      <ViewContainer>
        <div className='flex justify-between flex-col items-center'>
          <h2 className='text-4xl md:text-5xl'>Frequently Asked Questions</h2>
          <p className='max-w-2xl font-medium leading-snug mt-2 md:mt-3 text-center text-base md:text-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita
            suscipit magni saepe, repellat officia quos earum optio corrupti a
            excepturi ipsum et sunt facilis rerum. Vel doloribus quia ad.
          </p>
        </div>
        <Accordion
          type='single'
          collapsible
          className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-14 mt-14'
        >
          <div className='space-y-6'>
            {FAQS.slice(0, halfLength).map(({ question, answer }, index) => (
              <AccordionItem
                key={index}
                value={`item-${index + 1}`}
                className='shadow-lg'
              >
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </div>
          <div className='space-y-6'>
            {FAQS.slice(halfLength).map(({ question, answer }, index) => (
              <AccordionItem
                key={index}
                className='shadow-lg'
                value={`item-${halfLength + index + 1}`}
              >
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </div>
        </Accordion>
      </ViewContainer>
    </section>
  );
};

export default Faq;
