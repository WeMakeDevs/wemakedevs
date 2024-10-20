import { cn } from "@/lib/utils";
import { GeneralComponent } from "@/types";
import Image, { StaticImageData } from "next/image";

const PartnerCard = ({ className, children, ...props }: GeneralComponent) => {
  return (
    <div
      className={cn(
        className,
        "rounded shadow-xl bg-white p-5 h-[380px] xl:h-[320px] max-w-[340px] md:max-w-none mx-auto"
      )}
      {...props}
    >
      {children}
    </div>
  );
};

const PartnerCardQuote = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <p className={cn(className, "font-medium text-base md:text-lg")} {...props}>
      {children}
    </p>
  );
};

const PartnerCardAuthorName = ({
  className,
  children,
  ...props
}: GeneralComponent) => {
  return (
    <h3 className={cn(className, "")} {...props}>
      {children}
    </h3>
  );
};

interface PartnerCardAuthorImageInterface {
  className?: string;
  img: StaticImageData;
  title: string;
}
const PartnerCardAuthorImage = ({
  className,
  img,
  title,
}: PartnerCardAuthorImageInterface) => {
  return <Image src={img} alt={title} className={cn("w-12", className)} />;
};

interface PartnerCardLogoInterface {
  className?: string;
  img: StaticImageData;
  title: string;
}
const PartnerCardLogo = ({
  className,
  img,
  title,
}: PartnerCardLogoInterface) => {
  return <Image src={img} alt={title} className={cn(className, "w-36")} />;
};

export {
  PartnerCard,
  PartnerCardQuote,
  PartnerCardAuthorImage,
  PartnerCardAuthorName,
  PartnerCardLogo,
};
