import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
import { TestimonialInterface } from "@/types";
import {
  avatar1,
  avatar2,
  avatar4,
  avatar5,
  avatar6,
  avatar7,
  avatar8,
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
    profileImage: avatar1,
    name: "John Doe",
    platform: "twitter",
    testimonialText:
      "This hackathon was an amazing experience! Learned a lot and met great people.",
  },
  {
    profileImage: avatar2,
    name: "Jane Smith",
    platform: "linkedin",
    testimonialText:
      "A well-organized event with lots of opportunities to network and learn. Had a fantastic time! The challenges were tough but rewarding.",
  },
  {
    profileImage: avatar4,
    name: "Bob Brown",
    platform: "linkedin",
    testimonialText:
      "Great event! The mentors were very helpful and the atmosphere was inspiring.",
  },
  {
    profileImage: avatar5,
    name: "Charlie Davis",
    platform: "twitter",
    testimonialText: "Loved every moment of it! Can't wait for the next one.",
  },
  {
    profileImage: avatar6,
    name: "Dana White",
    platform: "linkedin",
    testimonialText:
      "An excellent platform to showcase skills and learn from others.",
  },
  {
    profileImage: avatar7,
    name: "Eve Black",
    platform: "twitter",
    testimonialText:
      "The hackathon was well-organized and the challenges were very engaging. An excellent platform to showcase skills and learn from others",
  },
  {
    profileImage: avatar8,
    name: "Frank Green",
    platform: "linkedin",
    testimonialText:
      "A wonderful experience! The event was both fun and educational.",
  },
  {
    profileImage: avatar7,
    name: "Eve Black",
    platform: "twitter",
    testimonialText:
      "The hackathon was well-organized and the challenges were very engaging.",
  },
];

const Testimonials = ({ className, ...props }: GeneralComponent) => {
  return (
    <section className={cn(className, "mt-20 pb-16 relative")} {...props}>
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
          <CarouselContent className=''>
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
