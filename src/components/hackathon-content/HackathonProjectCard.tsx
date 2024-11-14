import { cn } from "@/lib/utils";
import { HackathonProjectCardInterface } from "@/types";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const HackathonProjectCard = ({
  className,
  projectTitle,
  description,
  githubLink,
  demoLink,
  ...props
}: HackathonProjectCardInterface) => {
  return (
    <div
      className={cn(
        className,
        "p-4 rounded border-2 border-accent-4 hover:bg-accent-4/10 transition-all hover:-translate-y-2"
      )}
      {...props}
    >
      <div className=''>
        <h3 className='text-lg'>{projectTitle}</h3>
      </div>
      <p className='line-clamp-3'>{description}</p>
      <div className='flex gap-2 mt-2'>
        {githubLink && (
          <Link
            href={githubLink}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary'
          >
            <SiGithub size={18} />
            <span className='sr-only'>GitHub</span>
          </Link>
        )}
        {demoLink && (
          <Link
            href={demoLink}
            target='_blank'
            rel='noopener noreferrer'
            className='hover:text-primary'
          >
            <ExternalLink size={18} />
            <span className='sr-only'>Demo</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default HackathonProjectCard;
