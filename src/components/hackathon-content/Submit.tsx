import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const Submit = ({ className, ...props }: GeneralComponent) => {
  return (
    <div className={cn(className, "")} {...props}>
      Submit
    </div>
  );
};

export default Submit;
