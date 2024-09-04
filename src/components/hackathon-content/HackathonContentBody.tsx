"use server";
import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const HackathonContentBody = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <div className={cn(className, "my-5")} {...props}>
      {children}
    </div>
  );
};

export default HackathonContentBody;
