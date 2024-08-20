import { IconType } from "@icons-pack/react-simple-icons";

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
