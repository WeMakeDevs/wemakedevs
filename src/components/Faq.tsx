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
    question: "How can I join the community?",
    answer:
      'Simply head over to the "Join" section on this page, where you’ll find links to our Discord and Telegram groups.',
  },
  {
    question: "What kind of events do you host?",
    answer:
      "We regularly organize hackathons and meetups to bring developers together for learning and collaboration.",
  },
  {
    question: "How can I partner with WeMakeDevs?",
    answer:
      "To explore partnership opportunities, send an email to contact@wemakedevs.org.",
  },
  {
    question: "How do I stay updated with the latest events?",
    answer:
      "Sign up for our newsletter to receive the latest news and updates on upcoming hackathons and tech events",
  },
  {
    question: "Who can participate in the events?",
    answer:
      "Our events are open to developers of all levels, from beginners to experts, and anyone passionate about technology.",
  },
  {
    question: "Are the events free to join?",
    answer:
      "Yes, all of our hackathons are free to join for community members.",
  },
];

const halfLength = Math.ceil(FAQS.length / 2);

const Faq = () => {
  return (
    <section id='faq' className='my-14 md:my-24 scroll-m-[100px] realtive'>
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
