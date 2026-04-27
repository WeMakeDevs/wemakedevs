# Implementation Plan: OpenMetadata Hackathon Ended

## Overview

Mark the OpenMetadata "Back to the Metadata" hackathon and the iPad giveaway as ended across the WeMakeDevs website. All changes are content/configuration edits to existing files — no new components or APIs are introduced. The implementation follows existing patterns already established in the codebase (e.g., `listAs: "previous"`, `cta.disabled`, conditional rendering on falsy `submissionFormUrl`).

## Tasks

- [ ] 1. Remove GiveawayBar from the Homepage
  - [ ] 1.1 Remove GiveawayBar import, constant, logic, padding, and render from `src/app/page.tsx`
    - Remove the `import GiveawayBar from "@/components/GiveawayBar"` import statement
    - Remove the `GIVEAWAY_END_DATE` constant
    - Remove the `showGiveawayBar` variable
    - Remove the conditional padding class (`showGiveawayBar ? "pb-[5.5rem] sm:pb-24" : undefined`) from the root `<div>`, leaving a plain `<div>`
    - Remove the `{showGiveawayBar && <GiveawayBar />}` render at the bottom of the JSX
    - _Requirements: 1.1, 1.2_

- [ ] 2. Move OpenMetadata to Previous Hackathons
  - [ ] 2.1 Add `listAs: "previous"` to the OpenMetadata entry in `src/constants/hackathons.ts`
    - Add `listAs: "previous"` to the OpenMetadata hackathon object in the `hackathons` array, following the same pattern used by tambo, 2fast2mcp, and February entries
    - _Requirements: 2.1, 2.2, 2.3_

- [ ] 3. Disable registration and submission on the OpenMetadata hackathon page
  - [ ] 3.1 Update CTA and submission URL in `src/app/hackathons/openmetadata/data.ts`
    - Set `cta.disabled` to `true` (changed from `false`)
    - Set `submissionFormUrl` to `""` (empty string, changed from the Google Forms URL)
    - The existing HeroSection already handles `cta.disabled` by rendering a non-clickable div with `opacity-60 cursor-not-allowed pointer-events-none`
    - The existing conditionals `{DATA.submissionFormUrl && (...)}` in both `page.tsx` and `HeroSection.tsx` already handle hiding submit links when the URL is falsy
    - _Requirements: 3.1, 3.2, 3.3, 3.4, 3.5_

- [ ] 4. Checkpoint - Verify hackathon changes
  - Ensure the project builds successfully with `npm run build` or equivalent. Ensure all tests pass, ask the user if questions arise.

- [ ] 5. Update the Giveaways page
  - [ ] 5.1 Add Ayaan as a giveaway winner in `src/app/giveaways/page.tsx`
    - Add `import ayaanImage from "./images/Ayaan.png"` at the top with the other image imports
    - Add Ayaan as the first entry in the `pastWinners` array with `{ image: ayaanImage, name: "Ayaan", prize: "Apple iPad", worth: "₹50,000" }`
    - Placing Ayaan first ensures the most recent winner appears first in the grid
    - _Requirements: 4.1, 4.2, 4.3_

  - [ ] 5.2 Mark the iPad giveaway as ended in `src/app/giveaways/page.tsx`
    - Replace the hero pill text from `"🎉 Live Giveaway"` to `"Giveaway Ended"` and remove the `animate-pulse` class from the pill
    - Replace the "Live Now" badge: change text to "Ended", remove the `animate-ping` span (pulsing green dot), and update styling to a neutral/muted appearance (e.g., `border-slate-500/40 bg-slate-500/15 text-slate-400`)
    - Replace the `<Link>` CTA button ("Fill the Survey & Enter") with a disabled `<span>` or `<div>` displaying "This Giveaway Has Ended" with muted/disabled styling (reduced opacity, `cursor-not-allowed`, no hover effects)
    - _Requirements: 5.1, 5.2, 5.3, 5.4_

  - [ ] 5.3 Add newsletter prompt below the disabled CTA in `src/app/giveaways/page.tsx`
    - Add a `<p>` element below the disabled CTA button with text like "Stay updated via our newsletter below for future giveaways!" styled as `text-sm text-slate-400`
    - Ensure the existing `<Newsletter />` component at the bottom of the page is retained
    - _Requirements: 6.1, 6.2_

- [ ] 6. Final checkpoint - Build verification
  - Run the project build command to confirm no TypeScript errors, no broken imports, and no build failures. Ensure all tests pass, ask the user if questions arise.

## Notes

- All changes are static content/configuration updates — no new components, APIs, or data models
- The codebase already has patterns for ended hackathons (`listAs: "previous"`) and disabled CTAs (`cta.disabled`) that are reused here
- The Ayaan.png image already exists at `src/app/giveaways/images/Ayaan.png`
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation after related groups of changes
