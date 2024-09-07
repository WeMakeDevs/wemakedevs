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

type PrizeType = {
  name: string;
  description: string;
};

export interface HackathonData {
  title: string;
  image: {
    thumbnail: StaticImageData;
    cover: StaticImageData;
  };
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
  prizes: PrizeType[];
  registrationLink: string;
  submissionLink?: string;
}

export interface HackathonCardType extends GeneralComponent {
  href: string;
}

export interface HackathonCardImageType extends GeneralComponent {
  src: StaticImageData;
  alt: string;
}

export interface HackathonStatusComponentInterface extends GeneralComponent {
  startDate: string;
  endDate: string;
}

export interface HackathonCardDatesType extends GeneralComponent {
  startDate: string;
  endDate: string;
}

export interface HackathonDateInterface extends GeneralComponent {
  startDate: string;
  endDate: string;
}

export type PageType =
  | "overview"
  | "submit"
  | "resources"
  | "rules"
  | "projects";

export interface HackathonNavInterface extends GeneralComponent {
  slug: string;
  page: PageType;
}

export interface HackathonCoverImageInterface extends GeneralComponent {
  src: StaticImageData;
  alt: string;
}

export interface TestimonialInterface {
  profileImage: StaticImageData;
  name: string;
  platform: "twitter" | "linkedin";
  testimonialText: string;
}

export type TestimonialCardType = GeneralComponent & TestimonialInterface;
