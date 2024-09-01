import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const Rules = ({ className, ...props }: GeneralComponent) => {
  return (
    <div className={cn(className, "")} {...props}>
      Rules
    </div>
  );
};

export default Rules;
