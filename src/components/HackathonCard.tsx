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
      className={cn(
        className,
        "relative hover:-translate-x-4 hover:-translate-y-4 transition-all group"
      )}
    >
      <div
        className={cn(
          "absolute top-0 left-0 w-full h-full p-2 md:p-4 -z-10 overflow-clip border-4 border-tertiary bg-tertiary/20",
          "group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"
        )}
      ></div>
      <div
        className={cn(
          "border-4 border-primary p-2 md:p-4 space-y-4 bg-background"
        )}
      >
        {children}
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
    <p className={cn(className, "leading-snug")} {...props}>
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
      className={cn(className, "aspect-video object-cover")}
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
    <p className={cn(className, "flex gap-2 items-center")} {...props}>
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
