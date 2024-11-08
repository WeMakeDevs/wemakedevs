import HackathonFooter from "@/components/HackathonFooter";
import HackathonNavbar from "@/components/HackathonNavbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-white'>
      <HackathonNavbar />
      {children}
      <HackathonFooter />
    </div>
  );
}
