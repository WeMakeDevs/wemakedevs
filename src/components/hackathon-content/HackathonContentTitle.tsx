import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const HackathonContentTitle = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <h2 className={cn(className, "")} {...props}>
      {children}
    </h2>
  );
};

export default HackathonContentTitle;
