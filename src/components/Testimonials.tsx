import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
import { TestimonialInterface } from "@/types";
import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  avatar6,
} from "@/assets/images/testimonials";
import { ViewContainer } from "./ui/view-container";
import TestimonialCard from "./TestimonialCard";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";

const testimonials: TestimonialInterface[] = [
  {
    profileImage: avatar4,
    name: "Rahul Kumar",
    platform: "twitter",
    testimonialText:
      "The way this guy is teaching me Java is just Mind Blowing and Brilliant. I've never thought that these topics would be that much easier. Kudos to @kunalstwt #DSAwithKunal",
  },
  {
    profileImage: avatar2,
    name: "Ekjot Singh",
    platform: "twitter",
    testimonialText:
      "Thanks @kunalstwt for helping me understand the benefits of Binary Search and how it's a lot effective than linear search. Understood the theory now and will be solving questions with @WeMakeDevs and build up the concept. #DSAwithKunal",
  },
  {
    profileImage: avatar5,
    name: "Sajjan Yadav",
    platform: "twitter",
    testimonialText:
      "Done with amazing playlist of Object Oriented Programming by @kunalstwt bhaiya. Every concept was explained very well and got to know so many new things. Thanks kunal bhaiya for such an amazing playlist. #DSAwithKunal",
  },
  {
    profileImage: avatar1,
    name: "Anurag Pathak",
    platform: "twitter",
    testimonialText:
      "Completed @kunalstwt's DevOps bootcamp networking video. Really awesome explanation, got a clear overview of whole networking process. Application layer is perfectly understood. #DevOpswithkunal  #networking",
  },
  {
    profileImage: avatar3,
    name: "Prasanna",
    platform: "twitter",
    testimonialText:
      "Finally, completed 4 hour long video on computer networking. Amazing content @kunalstwt. Thanks for creating such an educational content for us 🙌🙌 #DevOpswithkunal",
  },
  {
    profileImage: avatar6,
    name: "Siva Nithin",
    platform: "twitter",
    testimonialText:
      "What an explanation 🔥 on recursion! This dsa course is just absolutely amazing. Thank you Kunal Kushwaha for this amazing course. #DSAwithKunal #dsa",
  },
];

const Testimonials = ({ className, ...props }: GeneralComponent) => {
  return (
    <section
      className={cn(className, "mt-20 pb-16 relative scroll-m-[100px]")}
      {...props}
      id='testimonials'
    >
      <div className='w-full h-[400px] absolute bottom-0 left-0 bg-gradient-to-b from-background to-white -z-10'></div>
      <ViewContainer className=''>
        <h2 className='text-4xl md:text-5xl text-center mx-auto'>
          Testimonials
        </h2>
        <Carousel
          className='mt-10 overflow-clip md:overflow-visible'
          opts={{
            align: "center",
            loop: true,
          }}
        >
          <CarouselContent className='h-[480px]'>
            {testimonials.map((item, index) => (
              <CarouselItem key={index} className='md:basis-1/2 lg:basis-1/3'>
                <TestimonialCard
                  {...item}
                  className={cn(
                    index % 4 == 0 && "bg-accent-1",
                    index % 4 == 1 && "bg-accent-2",
                    index % 4 == 2 && "bg-accent-3",
                    index % 4 == 3 && "bg-accent-4"
                  )}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </ViewContainer>
    </section>
  );
};

export default Testimonials;
