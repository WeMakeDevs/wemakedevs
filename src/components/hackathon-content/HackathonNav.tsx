import { HackathonNavInterface } from "@/types"
import { ViewContainer } from "../ui/view-container"
import { cn } from "@/lib/utils"
import Link from 'next/link'

const HackathonNav = ({ page, slug, className, ...props }: HackathonNavInterface) => {
  return (
    <nav aria-label="secondary nav" className={cn(className, "bg-foreground/5 border border-foreground/10")} {...props}>
      <ViewContainer className="flex justify-between flex-col md:flex-row">
        <ul className="flex flex-col md:flex-row">
          <li>
            <Link href={`/hackathons/${slug}/overview`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10",
                page == "overview" && "shadow-secondaryNav",
              )}
            >
              Overview</Link>
          </li>
          <li>
            <Link href={`/hackathons/${slug}/resources`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10",
                page == "resources" && "shadow-secondaryNav",
              )}
            >
              Resources</Link>
          </li>
          <li>
            <Link href={`/hackathons/${slug}/rules`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10",
                page == "rules" && "shadow-secondaryNav",
              )}
            >
              Rules</Link>
          </li>
          <li>
            <Link href={`/hackathons/${slug}/projects`}
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10",
                page == "projects" && "shadow-secondaryNav",
              )}
            >
              Projects</Link>
          </li>
        </ul>
        <li>
          <Link href={`/hackathons/${slug}/submit`}
            className={cn(
              "px-6 py-4 font-medium bg-blue-600 hover:bg-blue-800",
            )}
          >

            Submit Project
          </Link>
        </li>
      </ViewContainer >
    </nav >
  )
}

export default HackathonNav
