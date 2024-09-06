import { cn } from "@/lib/utils";
import { TestimonialCardType } from "@/types";
import { SiLinkedin, SiX } from "@icons-pack/react-simple-icons";
import Image from "next/image";

const TestimonialCard = ({
    profileImage,
    testimonialText,
    platform,
    name,
    className,
    ...props
}: TestimonialCardType) => {
    return (
        <div
            className={cn(
                className,
                "space-y-10 p-4 md:p-6 border rounded-xl border-tertiary/70 bg-background max-w-[400px] md:max-w-[500px] mx-auto"
            )}
            {...props}
        >
            <div className='flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <Image
                        src={profileImage}
                        alt={name}
                        className='w-6 md:w-8'
                    />
                    <span className='font-title font-medium text-base md:text-lg text-foreground/70'>
                        {name}
                    </span>
                </div>
                {platform === "twitter" ? (
                    <SiX className='text-foreground/50' />
                ) : (
                    <SiLinkedin className='text-foreground/50' />
                )}
            </div>
            <p className='text-xl md:text-2xl'>{testimonialText}</p>
        </div>
    );
};

export default TestimonialCard;
