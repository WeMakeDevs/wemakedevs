import Footer from "@/components/Footer";
import {
	InitiativeCard,
	InitiativeCardDescription,
	InitiativeCardImage,
	InitiativeCardTitle,
} from "@/components/InitiativeCard";
import Navbar from "@/components/Navbar";
import { ViewContainer } from "@/components/ui/view-container";
import { initiatives } from "@/constants/initiatives";

const InitiativesPage = () => {
	return (
		<>
			<Navbar />
			<main className="py-20">
				<ViewContainer className="my-10">
					<section>
						<h2 className="text-3xl md:text-4xl font-bold mb-8 text-foreground">
							All Initiatives
						</h2>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-6 auto-rows-fr">
							{initiatives.map(initiative => (
								<InitiativeCard
									key={initiative.title}
									href={initiative.url}
								>
									<InitiativeCardImage
										src={initiative.image}
										alt={initiative.title}
									/>
									<InitiativeCardTitle>
										{initiative.title}
									</InitiativeCardTitle>
									<InitiativeCardDescription>
										{initiative.description}
									</InitiativeCardDescription>
								</InitiativeCard>
							))}
						</div>
					</section>
				</ViewContainer>
				<Footer />
			</main>
		</>
	);
};

export default InitiativesPage;
