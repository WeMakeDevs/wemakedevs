import { notFound } from "next/navigation";
import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import Image from "next/image";
import { HackathonContent } from "@/components/hackathon-content";

export async function generateStaticParams() {
  let hackathons = await fetchHackathonData();

  return hackathons.map((hackathon) => ({
    slug: hackathon.slug,
  }));
}

const HackathonPage = async ({ params }: { params: { slug: string } }) => {
  let hackathons = await fetchHackathonData();
  let hackathon = hackathons.find((hackathon) => hackathon.slug == params.slug);

  if (!hackathon) notFound();

  return (
    <main>
      <ViewContainer>
        <Image
          src={hackathon.image.cover}
          alt={hackathon.title}
          className="my-4"
        />
      </ViewContainer>
      <HackathonContent hackathon={hackathon} />
    </main>
  );
};

export default HackathonPage;
