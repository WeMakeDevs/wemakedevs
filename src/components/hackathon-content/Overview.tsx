import { HackathonCardStatus } from "@/components/HackathonCard";
import { cn } from "@/lib/utils";
import { HackathonContentOverview } from "@/types";
import HackathonDate from "./HackathonDate";
import HackathonContentTitle from "./HackathonContentTitle";
import HackathonContentBody from "./HackathonContentBody";
import { MDXRemote } from "next-mdx-remote/rsc";

const Overview = ({
  title,
  description,
  status,
  startDate,
  endDate,
  prize,
  about,
  className,
  children,
  ...props
}: HackathonContentOverview) => {
  console.log(title);
  return (
    <div className={cn(className, "")} {...props}>
      <div className="bg-foreground/5 border border-foreground/10 rounded-lg px-6 py-8">
        <HackathonCardStatus className="w-fit" status={status} />
        <h1 className="text-4xl md:text-6xl font-bold mt-6">{title}</h1>
        <p className="text-base md:text-lg text-foreground/90 font-medium leading-snug mt-4 tracking-wide">
          {description}
        </p>
        <HackathonDate startDate={startDate} endDate={endDate} />
        <p className="">Prizes worth: {prize}₹+</p>
      </div>
      <div className="">
        <HackathonContentTitle>Overview</HackathonContentTitle>
        <HackathonContentBody>
          <MDXRemote source={about} />
        </HackathonContentBody>
      </div>
    </div>
  );
};

// TODO: Add UI ELEMENts
// RENDER ALL THE TABS

export default Overview;
