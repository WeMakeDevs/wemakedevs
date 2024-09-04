import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const HackathonContentTitle = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <div className={cn(className, "flex gap-4 items-center mt-10 mb-5")} {...props}>
      <h2 className="text-3xl md:text-4xl font-medium uppercase tracking-wide">{children}</h2>
      <div className="h-0.5 w-max bg-foreground/10 grow"></div>
    </div>
  );
};

export default HackathonContentTitle;
