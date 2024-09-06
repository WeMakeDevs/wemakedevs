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
  avatar7,
  avatar8,
  testimonialBg,
} from "@/assets/images/testimonials";
import { ViewContainer } from "./ui/view-container";
import TestimonialCard from "./TestimonialCard";
import Image from "next/image";

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
    profileImage: avatar3,
    name: "Alice Johnson",
    platform: "twitter",
    testimonialText:
      "Had a fantastic time! The challenges were tough but rewarding.",
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
      <ViewContainer>
        <h2 className="text-4xl md:text-5xl text-center">
          Testimonials<span className="text-primary">_</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 my-10">
          <div className="space-y-4 md:space-y-6">
            <TestimonialCard {...testimonials[0]} />
            <TestimonialCard {...testimonials[1]} />
            <TestimonialCard {...testimonials[2]} />
          </div>
          <div className="space-y-4 md:space-y-6">
            <TestimonialCard {...testimonials[3]} />
            <TestimonialCard {...testimonials[4]} />
            <TestimonialCard {...testimonials[5]} />
          </div>
          <div className="space-y-4 md:space-y-6 md:hidden lg:block">
            <TestimonialCard {...testimonials[6]} />
            <TestimonialCard {...testimonials[7]} />
            <TestimonialCard {...testimonials[8]} />
          </div>
        </div>
        <Image
          src={testimonialBg}
          alt="testimonial mesh gradient bg"
          className="absolute w-full bottom-0 left-0 -z-10 h-[80%]"
        />
      </ViewContainer>
    </section>
  );
};

export default Testimonials;
