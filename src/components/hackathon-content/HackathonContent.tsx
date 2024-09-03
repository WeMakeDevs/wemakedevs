"use client";

import { cn } from "@/lib/utils";
import { HackathonContentType } from "@/types";
import { useState } from "react";
import { ViewContainer } from "../ui/view-container";
import { MDXRemote } from "next-mdx-remote/rsc";

import { Overview, Resources, Rules, Projects, Submit } from "./index";

const HackathonContent = ({
  hackathon,
  className,
  ...props
}: HackathonContentType) => {
  type TabType = "overview" | "resources" | "rules" | "projects" | "submit";

  const [tab, setTab] = useState<TabType>("overview");

  return (
    <div className={cn(className, "")} {...props}>
      <nav className="bg-foreground/5 border border-foreground/10">
        <ViewContainer className="flex justify-between flex-col md:flex-row">
          <div className="flex flex-col md:flex-row">
            <button
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10",
                tab == "overview" && "shadow-secondaryNav",
              )}
              onClick={() => setTab("overview")}
            >
              Overview
            </button>
            <button
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10",
                tab == "resources" && "shadow-secondaryNav",
              )}
              onClick={() => setTab("resources")}
            >
              Resources
            </button>
            <button
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10",
                tab == "rules" && "shadow-secondaryNav",
              )}
              onClick={() => setTab("rules")}
            >
              Rules
            </button>
            <button
              className={cn(
                "px-6 py-4 font-medium hover:bg-foreground/10",
                tab == "projects" && "shadow-secondaryNav",
              )}
              onClick={() => setTab("projects")}
            >
              Projects
            </button>
          </div>
          <button
            className={cn(
              "px-6 py-4 font-medium bg-blue-600 hover:bg-blue-800",
            )}
            onClick={() => setTab("submit")}
          >
            Submit Project
          </button>
        </ViewContainer>
      </nav>
      <ViewContainer className="py-10">
        {tab == "overview" ? (
          <Overview
            prize={hackathon.prize}
            title={hackathon.title}
            description={hackathon.description}
            status={hackathon.status}
            startDate={hackathon.startDate}
            endDate={hackathon.endDate}
            about={hackathon.about}
          >
            {/* <MDXRemote source={hackathon.about} /> */}
          </Overview>
        ) : tab == "resources" ? (
          <Resources />
        ) : tab == "rules" ? (
          <Rules />
        ) : tab == "projects" ? (
          <Projects />
        ) : (
          <Submit />
        )}
      </ViewContainer>
    </div>
  );
};

// TODO: Render MDX
// TODO : Install next-mdx-remote

export default HackathonContent;
