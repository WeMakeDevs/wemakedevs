import {
  HackathonNav,
  HackathonCoverImage,
} from "@/components/hackathon-content";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import { notFound } from "next/navigation";
import { HackathonContentTitle } from "@/components/hackathon-content";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";

const HackathonSubmit = async ({ params }: { params: { slug: string } }) => {
  const hackathons = await fetchHackathonData();
  const hackathon = hackathons.find(
    (hackathon) => hackathon.slug == params.slug
  );

  if (!hackathon) notFound();

  return (
    <div className='mb-10 pt-20'>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page='submit' />
      <ViewContainer>
        <HackathonContentTitle>
          Registration and Submission
        </HackathonContentTitle>
        <div className='mb-4'>
          <h3 className='text-lg md:text-xl font-bold mb-2'>Registration</h3>
          <p className='text-foreground/80'>
            Please ensure you register before the deadline to participate.
          </p>
          <Link
            href={hackathon.registrationLink}
            target='_blank'
            rel='noopener noreferrer'
            className={cn(buttonVariants(), "mt-4 w-fit block")}
          >
            Register Now
          </Link>
        </div>
        <div>
          <h3 className='text-lg md:text-xl font-bold mb-2 mt-12'>
            Submission
          </h3>
          <p className='text-foreground/80 mb-2'>
            Please read the{" "}
            <a
              href={`/hackathons/${hackathon.slug}/rules`}
              className='bg-yellow-100/20 inline px-1 py-0.5 hover:bg-yellow-100/0'
            >
              submission rules
            </a>{" "}
            and{" "}
            <a
              href={`/hackathons/${hackathon.slug}/#requirements`}
              className='bg-yellow-100/20 inline px-1 py-0.5 hover:bg-yellow-100/0'
            >
              submission requirements
            </a>{" "}
            before submitting.
          </p>
          {hackathon.submissionLink ? (
            <Link
              href={hackathon.submissionLink}
              target='_blank'
              rel='noopener noreferrer'
              className={cn(buttonVariants(), "mt-4 w-fit block")}
            >
              Submit Now
            </Link>
          ) : (
            <p className='text-foreground/80'>
              Submissions will open soon. Stay tuned for updates!
            </p>
          )}
        </div>
      </ViewContainer>
    </div>
  );
};

export default HackathonSubmit;
