import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const HackathonContentTitle = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <div className={cn(className, "flex gap-4 items-center")} {...props}>
      <h2 className='text-2xl md:text-3xl font-medium tracking-wide uppercase mt-6'>
        {children}
      </h2>
    </div>
  );
};

export default HackathonContentTitle;
