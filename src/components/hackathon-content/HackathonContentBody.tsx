import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const HackathonContentBody = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <div className={cn(className, "")} {...props}>
      {children}
    </div>
  );
};

export default HackathonContentBody;
