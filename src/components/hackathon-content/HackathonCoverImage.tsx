import { HackathonCoverImageInterface } from "@/types";
import { ViewContainer } from "../ui/view-container";
import Image from "next/image";
import { cn } from "@/lib/utils";

const HackathonCoverImage = ({
  src,
  alt,
  className,
  ...props
}: HackathonCoverImageInterface) => {
  return (
    <ViewContainer>
      <Image src={src} alt={alt} className={cn(className, "mt-4")} {...props} />
    </ViewContainer>
  );
};

export default HackathonCoverImage;
