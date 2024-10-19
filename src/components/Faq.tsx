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
    question: "Is WeMakeDevs community beginner friendly?",
    answer:
      "Yes! Even non-coders are welcome. Our courses are designed in such a way that anyone can get started with it. Even people who have never programmed before!",
  },
  {
    question: "How do I stay up to date on the latest updates?",
    answer:
      "Please subscribe to our newsletter to stay up to date on the latest updates.",
  },
  {
    question: "What are the types of events hosted at WeMakeDevs?",
    answer:
      "We host all types of events such as online, in-person and hybrid events.",
  },
  {
    question: "How do I join WeMakeDevs community?",
    answer:
      "Make sure to join our Discord and Telegram channels. You can find us on all social media platforms as @wemakedevs",
  },
  {
    question: "How to take part in events hosted?",
    answer:
      "For hackathons, you can use our website to register. For meetups, you can visit our guild page.",
  },
  {
    question:
      "Do I have to pay for registering/attending events at WeMakeDevs?",
    answer: "No! All events from WeMakeDevs are absolutely free to attend.",
  },
];

const halfLength = Math.ceil(FAQS.length / 2);

const Faq = () => {
  return (
    <section id='faq' className='my-14 md:my-32 scroll-m-[100px] realtive'>
      <ViewContainer>
        <div className='flex justify-between flex-col items-center'>
          <h2 className='text-4xl md:text-5xl'>Frequently Asked Questions</h2>
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
