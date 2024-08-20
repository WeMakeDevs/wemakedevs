export type navLinksType = {
  name: string;
  url: string;
  type: "link" | "button";
  openInNewTab?: boolean;
}[];

export interface GeneralComponent extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}
