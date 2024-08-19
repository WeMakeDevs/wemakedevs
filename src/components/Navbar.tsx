import { logo } from "@/assets/images";
import Image from "next/image";
import Link from "next/link";
import { ViewContainer } from "./ui/view-container";

const Navbar = () => {
  return (
    <nav className="">
      <ViewContainer className="my-6 flex justify-between">
        <Link href="https://wemakedevs.org/">
          <Image src={logo} alt="WeMakeDevs Logo" className="min-w-14" />
        </Link>
        <ul className="flex list-none gap-8 text-lg">
          <li className="">
            <Link
              href="#"
              className="hover:text-foreground/80 transition-colors"
            >
              Header
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className="hover:text-foreground/80 transition-colors"
            >
              About
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className="hover:text-foreground/80 transition-colors"
            >
              Testimonials
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className="hover:text-foreground/80 transition-colors"
            >
              Sponsors
            </Link>
          </li>
          <li className="">
            <Link
              href="#"
              className="hover:text-foreground/80 transition-colors"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link
              href=""
              className="px-5 py-3 rounded bg-foreground text-background text-base font-bold hover:bg-foreground/80 transition-colors"
            >
              Hackathons
            </Link>
          </li>
        </ul>
      </ViewContainer>
    </nav>
  );
};

export default Navbar;
