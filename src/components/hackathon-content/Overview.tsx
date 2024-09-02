import { cn } from "@/lib/utils";
import { HackathonContentOverview } from "@/types";
import { HackathonCardStatus } from "@/components/HackathonCard";

const Overview = ({
  title,
  description,
  status,
  startDate,
  endDate,
  className,
  ...props
}: HackathonContentOverview) => {
  console.log(title);
  return (
    <div className={cn(className, "")} {...props}>
      <div className="">
        <HackathonCardStatus className="w-fit" status={status} />
        <h1>{title}</h1>
        <p className="">{description}</p>
      </div>
    </div>
  );
};

export default Overview;
