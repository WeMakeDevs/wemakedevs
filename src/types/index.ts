import { IconType } from "@icons-pack/react-simple-icons";
import { StaticImageData } from "next/image";

export type navLinksType = {
  name: string;
  url: string;
  type: "link" | "button";
  openInNewTab?: boolean;
}[];

export type numbersType = {
  name: string;
  number: number;
  icon: IconType;
  color: string;
  href: string;
}[];

export interface GeneralComponent extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

type HackathonStatusType = "upcoming" | "ongoing" | "ended";

export interface HackathonData {
  title: string;
  image: {
    thumbnail: StaticImageData;
    cover: StaticImageData;
  };
  status: HackathonStatusType;
  prize: number;
  type: string;
  startDate: string;
  endDate: string;
  description: string;
  slug: string;
  about: string;
  requirements: string;
  resources: string;
  rules: string;
}

export interface HackathonCardType extends GeneralComponent {
  href: string;
}

export interface HackathonCardImageType extends GeneralComponent {
  src: StaticImageData;
  alt: string;
}

export interface HackathonCardStatusType extends GeneralComponent {
  status: HackathonStatusType;
}

export interface HackathonCardDatesType extends GeneralComponent {
  startDate: string;
  endDate: string;
}

export interface HackathonContentType extends GeneralComponent {
  hackathon: HackathonData;
}

export interface HackathonContentOverview extends GeneralComponent {
  title: string;
  description: string;
  status: HackathonStatusType;
  startDate: string;
  endDate: string;
}

export interface HackathonDateInterface extends GeneralComponent {
  status: HackathonStatusType;
  startDate: string;
  endDate: string;
}
