import { HackathonNav, HackathonCoverImage } from "@/components/hackathon-content"
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody"
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle"
import { fetchHackathonData } from "@/lib/hackathon"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"
import { ViewContainer } from "@/components/ui/view-container"

const HackathonRules = async ({ params }: { params: { slug: string } }) => {
  const hackathons = await fetchHackathonData()
  const hackathon = hackathons.find((hackathon) => hackathon.slug == params.slug);

  if (!hackathon) notFound()

  return (
    <div>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page="rules" />
      <ViewContainer className="">
        <HackathonContentTitle>Rules of the hackathon</HackathonContentTitle>
        <HackathonContentBody>
          <MDXRemote source={hackathon.rules} />
        </HackathonContentBody>
      </ViewContainer>
    </div >
  )
}

export default HackathonRules
