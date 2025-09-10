import FutureStackNavbar from "@/components/FutureStackNavbar";
import HackathonFooter from "@/components/HackathonFooter";

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<div className="bg-white">
			<FutureStackNavbar />
			{children}
			<HackathonFooter />
		</div>
	);
}
