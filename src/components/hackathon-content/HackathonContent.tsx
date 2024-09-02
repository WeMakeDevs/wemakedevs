"use client";

import { cn } from "@/lib/utils";
import { HackathonContentType } from "@/types";
import { useState } from "react";
import { ViewContainer } from "../ui/view-container";

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
      <ViewContainer>
        {tab == "overview" ? (
          <Overview
            title={hackathon.title}
            description={hackathon.description}
            status={hackathon.status}
            startDate={hackathon.startDate}
            endDate={hackathon.endDate}
          />
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

export default HackathonContent;
