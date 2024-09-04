import { HackathonNav, HackathonCoverImage } from "@/components/hackathon-content"
import HackathonContentBody from "@/components/hackathon-content/HackathonContentBody"
import HackathonContentTitle from "@/components/hackathon-content/HackathonContentTitle"
import { ViewContainer } from "@/components/ui/view-container"
import { fetchHackathonData } from "@/lib/hackathon"
import { MDXRemote } from "next-mdx-remote/rsc"
import { notFound } from "next/navigation"

const HackathonResources = async ({ params }: { params: { slug: string } }) => {
  const hackathons = await fetchHackathonData()
  const hackathon = hackathons.find((hackathon) => hackathon.slug == params.slug);

  if (!hackathon) notFound()

  return (
    <div>
      <HackathonCoverImage src={hackathon.image.cover} alt={hackathon.title} />
      <HackathonNav slug={hackathon.slug} page="resources" />
      <ViewContainer>
        <HackathonContentTitle>Resources</HackathonContentTitle>
        <HackathonContentBody>
          <MDXRemote source={hackathon.resources} />
        </HackathonContentBody>
      </ViewContainer>
    </div>
  )
}

export default HackathonResources
