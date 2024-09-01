import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const Overview = ({ className, ...props }: GeneralComponent) => {
  return (
    <div className={cn(className, "")} {...props}>
      Overview
    </div>
  );
};

export default Overview;
