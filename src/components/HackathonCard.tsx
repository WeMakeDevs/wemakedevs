import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  GeneralComponent,
  HackathonCardDatesType,
  HackathonCardImageType,
  HackathonCardType,
} from "@/types";
import Link from "next/link";
import { CalendarIcon } from "@radix-ui/react-icons";

const HackathonCard = ({ className, children, href }: HackathonCardType) => {
  return (
    <Link
      href={href}
      className={cn(className, "rounded group relative shadow-xl")}
    >
      <div className='rounded border-4 border-primary p-2 md:p-4 space-y-4 bg-card'>
        {children}
      </div>
      <div className='absolute bottom-0 left-0 rounded-b group-hover:translate-y-[90%] -z-10 transition-transform w-full bg-primary border-b-4 border-t-4 border-primary font-medium tracking-wider uppercase text-white flex justify-center items-center'>
        Explore
      </div>
    </Link>
  );
};

const HackathonCardTitle = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <h3 className={cn(className, "text-2xl md:text-3xl")} {...props}>
      {children}
    </h3>
  );
};

const HackathonCardDescription = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <p className={cn(className, "leading-snug font-medium")} {...props}>
      {children}
    </p>
  );
};

const HackathonCardImage = ({
  className,
  src,
  alt,
  ...props
}: HackathonCardImageType) => {
  return (
    <Image
      className={cn(className, "aspect-video object-cover rounded")}
      {...props}
      src={src}
      alt={alt}
    />
  );
};

const HackathonCardDates = ({
  startDate,
  endDate,
  className,
  ...props
}: HackathonCardDatesType) => {
  return (
    <p
      className={cn(className, "flex gap-2 items-center font-medium")}
      {...props}
    >
      <CalendarIcon className='size-5' />
      {new Date(startDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}{" "}
      -{" "}
      {new Date(endDate).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })}
    </p>
  );
};

export {
  HackathonCard,
  HackathonCardTitle,
  HackathonCardDates,
  HackathonCardImage,
  HackathonCardDescription,
};
