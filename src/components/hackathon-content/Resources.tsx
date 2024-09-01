import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const Resources = ({ className, ...props }: GeneralComponent) => {
  return (
    <div className={cn(className, "")} {...props}>
      Resources
    </div>
  );
};

export default Resources;
