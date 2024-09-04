import { HackathonNav, HackathonCoverImage } from "@/components/hackathon-content"
import { fetchHackathonData } from "@/lib/hackathon"
import { notFound } from "next/navigation"

const HackathonRules = async ({ params }: { params: { slug: string } }) => {
  const hackathons = await fetchHackathonData()
  const hackathon = hackathons.find((hackathon) => hackathon.slug == params.slug);

  if (!hackathon) notFound()

  return (
    <div>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page="rules" />
    </div>
  )
}

export default HackathonRules
