import About from "@/components/About";
import Header from "@/components/Header";
import Numbers from "@/components/Numbers";
import { fetchHackathonData } from "@/lib/hackathons";

export default async function Home() {
  const hackathons = await fetchHackathonData();
  console.log(hackathons);
  return (
    <div>
      <Header />
      <About />
      <Numbers />
    </div>
  );
}
