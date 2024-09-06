import { HackathonNavInterface } from "@/types";
import { ViewContainer } from "../ui/view-container";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { buttonVariants } from "../ui/button";

const HackathonNav = ({
  page,
  slug,
  className,
  ...props
}: HackathonNavInterface) => {
  return (
    <nav
      aria-label='secondary nav'
      className={cn(
        className,
        "bg-foreground/5 border-t border-b border-foreground/10"
      )}
      {...props}
    >
      <ViewContainer className='flex justify-between flex-col md:flex-row'>
        <ul className='flex flex-col md:flex-row list-none'>
          <li>
            <Link
              href={`/hackathons/${slug}`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10 inline-block",
                page == "overview" && "shadow-secondaryNav"
              )}
            >
              Overview
            </Link>
          </li>
          <li>
            <Link
              href={`/hackathons/${slug}/resources`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10 inline-block",
                page == "resources" && "shadow-secondaryNav"
              )}
            >
              Resources
            </Link>
          </li>
          <li>
            <Link
              href={`/hackathons/${slug}/rules`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10 inline-block",
                page == "rules" && "shadow-secondaryNav"
              )}
            >
              Rules
            </Link>
          </li>
          <li>
            <Link
              href={`/hackathons/${slug}/projects`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10 inline-block",
                page == "projects" && "shadow-secondaryNav"
              )}
            >
              Projects
            </Link>
          </li>
        </ul>
        <Link
          href={`/hackathons/${slug}/submit`}
          className={cn(buttonVariants(), "inline-block ml-auto")}
        >
          Submit Project
        </Link>
      </ViewContainer>
    </nav>
  );
};

export default HackathonNav;
