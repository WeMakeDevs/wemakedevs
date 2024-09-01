import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";

const Projects = ({ className, ...props }: GeneralComponent) => {
  return (
    <div className={cn(className, "")} {...props}>
      Projects
    </div>
  );
};

export default Projects;
