import { ViewContainer } from "../ui/view-container";

const dates = [
	{
		date: "February 15, 2026",
		title: "Scholarship Application Deadline",
	},
	{
		date: "February 16, 2026",
		title: "Winners Announced",
	},
	{
		date: "March 23 - 26, 2026",
		title: "KubeCon Europe 2026",
	},
];

const Dates = () => {
	return (
		<div className="py-10 bg-white">
			<ViewContainer>
				<h2 className="text-4xl md:text-5xl font-bold font-title text-center">
					Schedule at a glance
				</h2>
				<div className="space-y-2 mt-10">
					{dates.map(date => (
						<div
							key={date.title}
							className="flex md:gap-2 flex-col md:flex-row p-2 md:p-0 bg-primary md:bg-transparent"
						>
							<p className="bg-primary text-white text-lg font-medium md:p-4 min-w-60">
								{date.date}
							</p>
							<p className="bg-primary text-white text-lg font-medium md:p-4 w-full">
								{date.title}
							</p>
						</div>
					))}
				</div>
			</ViewContainer>
		</div>
	);
};

export default Dates;
