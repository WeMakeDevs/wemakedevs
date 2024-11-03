import HackathonFooter from "@/components/HackathonFooter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <div className="bg-white">
            {children}
              <HackathonFooter />
        </div>
  );
}
