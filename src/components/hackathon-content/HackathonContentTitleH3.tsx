import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const HackathonContentTitleH3 = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <div className={cn(className, "flex gap-4 items-center mb-5")} {...props}>
      <h3 className='text-xl md:text-2xl font-medium uppercase tracking-wide'>
        {children}
      </h3>
    </div>
  );
};

export default HackathonContentTitleH3;
