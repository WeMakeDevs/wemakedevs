import { cn } from "@/lib/utils";
import { HackathonWinningProjectCardInterface } from "@/types";
import Link from "next/link";
import { ExternalLink } from "lucide-react";
import { SiGithub } from "@icons-pack/react-simple-icons";

const HackathonWinningProjectCard = ({
  className,
  projectTitle,
  description,
  githubLink,
  demoLink,
  category,
  ...props
}: HackathonWinningProjectCardInterface) => {
  const getYoutubeVideoId = (url: string) => {
    if (!url) return null;
    const watchPattern = /(?:youtube\.com\/watch\?v=)([^&]+)/;
    const shortPattern = /(?:youtu\.be\/)([^?]+)/;

    const watchMatch = url.match(watchPattern);
    const shortMatch = url.match(shortPattern);

    return watchMatch?.[1] || shortMatch?.[1] || null;
  };

  const videoId = demoLink ? getYoutubeVideoId(demoLink) : null;

  return (
    <div
      className={cn(
        "p-4 rounded border-2 border-accent-4 hover:bg-accent-4/10 transition-all hover:-translate-y-2",
        className
      )}
      {...props}
    >
      {videoId && (
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title='YouTube video player'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          referrerPolicy='strict-origin-when-cross-origin'
          allowFullScreen
        ></iframe>
      )}
      <h3 className='text-lg mt-3'>{projectTitle}</h3>
      <p className='line-clamp-2 mt-3'>{description}</p>
      <div className='flex items-center justify-between flex-wrap mt-4 gap-4'>
        {category && (
          <span
            className={cn(
              "font-semibold rounded-full px-3 py-1 uppercase",
              !category.bgColor && "bg-accent-4",
              !category.textColor && "text-white"
            )}
            style={{
              backgroundColor: category.bgColor || undefined,
              color: category.textColor || undefined,
            }}
          >
            {category.title}
          </span>
        )}
        <div className='flex gap-3'>
          {githubLink && (
            <Link
              href={githubLink}
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-primary'
            >
              <SiGithub size={20} />
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
              <ExternalLink size={20} />
              <span className='sr-only'>Demo</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default HackathonWinningProjectCard;
