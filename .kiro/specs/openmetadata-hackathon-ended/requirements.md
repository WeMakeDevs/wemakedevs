# Requirements Document

## Introduction

Mark the OpenMetadata "Back to the Metadata" hackathon and the iPad giveaway as ended across the WeMakeDevs website. This involves updating the homepage, hackathons listing page, OpenMetadata hackathon detail page, and giveaways page to reflect that both events have concluded. A new giveaway winner (Ayaan) must be added, and users should be directed to the newsletter for future giveaway announcements.

## Glossary

- **Homepage**: The root page of the website (`src/app/page.tsx`) that displays a summary of hackathons, a newsletter section, and the GiveawayBar.
- **GiveawayBar**: A fixed floating bar at the bottom of the Homepage promoting the iPad giveaway survey (`src/components/GiveawayBar.tsx`).
- **Hackathons_Listing_Page**: The page at `/hackathons` that categorises hackathons into "Upcoming Hackathons" and "Previous Hackathons" sections based on the `listAs` field or end date (`src/app/hackathons/page.tsx`).
- **Hackathons_Constant**: The central hackathon data array in `src/constants/hackathons.ts` that drives both the Homepage hackathon cards and the Hackathons_Listing_Page.
- **OpenMetadata_Page**: The hackathon detail page at `/hackathons/openmetadata` that displays the hero section with register and submit buttons, schedule, prizes, and FAQ (`src/app/hackathons/openmetadata/page.tsx`).
- **OpenMetadata_Data**: The data module at `src/app/hackathons/openmetadata/data.ts` containing the CTA configuration and `submissionFormUrl`.
- **HeroSection**: The hero component on the OpenMetadata_Page that renders the register CTA button and the "Submit Project" link (`src/app/hackathons/openmetadata/components/HeroSection.tsx`).
- **Giveaways_Page**: The page at `/giveaways` that shows the current live giveaway, how-it-works section, and past winners grid (`src/app/giveaways/page.tsx`).
- **Past_Winners_Array**: The `pastWinners` data array in the Giveaways_Page that populates the "Past Winners" grid.

## Requirements

### Requirement 1: Remove the GiveawayBar from the Homepage

**User Story:** As a visitor, I want the homepage to no longer show the iPad giveaway floating bar, so that I am not prompted to participate in a giveaway that has already ended.

#### Acceptance Criteria

1. THE Homepage SHALL NOT render the GiveawayBar component.
2. THE Homepage SHALL NOT apply the bottom padding class that was used to accommodate the GiveawayBar.

### Requirement 2: Move OpenMetadata hackathon to "Previous Hackathons" on the Hackathons Listing Page

**User Story:** As a visitor browsing hackathons, I want the OpenMetadata hackathon to appear under "Previous Hackathons", so that I can see it has concluded.

#### Acceptance Criteria

1. THE Hackathons_Constant SHALL set the `listAs` field for the OpenMetadata hackathon entry to `"previous"`.
2. WHEN the Hackathons_Listing_Page renders, THE OpenMetadata hackathon SHALL appear in the "Previous Hackathons" section.
3. WHEN the Hackathons_Listing_Page renders, THE OpenMetadata hackathon SHALL NOT appear in the "Upcoming Hackathons" section.

### Requirement 3: Remove register and submit buttons from the OpenMetadata hackathon page

**User Story:** As a visitor viewing the OpenMetadata hackathon detail page, I want the registration and project submission buttons to be hidden, so that I am not misled into thinking the hackathon is still accepting entries.

#### Acceptance Criteria

1. THE OpenMetadata_Data SHALL set the CTA `disabled` field to `true` so the register button is visually disabled.
2. THE OpenMetadata_Data SHALL set `submissionFormUrl` to an empty string or a falsy value so the "Submit Project" link is not rendered.
3. WHEN the OpenMetadata_Page renders, THE "Submit your project" CTA banner in the page body SHALL NOT be displayed.
4. WHEN the HeroSection renders, THE "Submit Project" link SHALL NOT be displayed.
5. WHEN the HeroSection renders, THE register CTA button SHALL appear disabled and non-clickable.

### Requirement 4: Add Ayaan as a giveaway winner

**User Story:** As a visitor, I want to see Ayaan listed as a past giveaway winner, so that I know the iPad giveaway has been awarded.

#### Acceptance Criteria

1. THE Giveaways_Page SHALL import the Ayaan winner image from `src/app/giveaways/images/Ayaan.png`.
2. THE Past_Winners_Array SHALL include an entry for Ayaan with the prize "Apple iPad" and worth "₹50,000".
3. WHEN the Giveaways_Page renders the "Past Winners" section, THE Ayaan winner card SHALL be displayed alongside existing winners.

### Requirement 5: Mark the iPad giveaway as ended on the Giveaways Page

**User Story:** As a visitor, I want the giveaways page to clearly indicate that the iPad giveaway has ended, so that I do not attempt to fill out the survey.

#### Acceptance Criteria

1. THE Giveaways_Page SHALL replace the "Live Now" badge with an "Ended" badge or equivalent indicator.
2. THE Giveaways_Page SHALL replace the "🎉 Live Giveaway" hero pill text with text indicating the giveaway has ended (e.g., "Giveaway Ended").
3. THE Giveaways_Page SHALL replace the "Fill the Survey & Enter" button with a disabled or non-clickable element displaying text such as "This Giveaway Has Ended".
4. THE Giveaways_Page SHALL remove the animated ping indicator that signals a live giveaway.

### Requirement 6: Direct visitors to the newsletter for future giveaways

**User Story:** As a visitor, I want to know how to stay informed about future giveaways, so that I can participate when the next one is announced.

#### Acceptance Criteria

1. THE Giveaways_Page SHALL display a message near the ended giveaway section encouraging visitors to subscribe to the newsletter for future giveaway announcements (e.g., "Stay updated via our newsletter for future giveaways").
2. THE Giveaways_Page SHALL retain the existing Newsletter component at the bottom of the page.
