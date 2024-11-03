import { ViewContainer } from "@/components/ui/view-container";
import { fetchHackathonData } from "@/lib/hackathon";
import {
  HackathonCard,
  HackathonCardImage,
  HackathonCardDates,
  HackathonCardTitle,
  HackathonCardDescription,
} from "@/components/HackathonCard";
import HackathonStatus from "@/components/HackathonStatus";
import Footer from "@/components/Footer";

const Hackathons = async () => {
  const hackathons = await fetchHackathonData();

  return (
    <main className='py-20'>
      <ViewContainer className='my-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {hackathons.map((hackathon, index) => (
          <HackathonCard key={index} href={`/hackathons/${hackathon.slug}`}>
            <HackathonCardImage
              src={hackathon.image.thumbnail}
              alt={hackathon.title}
            />
            <HackathonCardTitle>{hackathon.title}</HackathonCardTitle>
            <div className='flex justify-between items-center'>
              <HackathonStatus
                startDate={hackathon.startDate}
                endDate={hackathon.endDate}
              />
              <HackathonCardDates
                startDate={hackathon.startDate}
                endDate={hackathon.endDate}
              />
            </div>
            <HackathonCardDescription>
              {hackathon.description}
            </HackathonCardDescription>
          </HackathonCard>
        ))}
      </ViewContainer>
    <Footer />
    </main>
  );
};

export default Hackathons;
