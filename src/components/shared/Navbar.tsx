import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";

import NavbarLinks from "./NavbarLinks";
import NavbarStatus from "./NavbarStatus";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex min-h-16 items-center justify-between gap-2 py-3 md:h-20 md:py-0">
          <Link
            href="/"
            className="flex shrink-0 items-center gap-1.5 sm:gap-2"
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              width={26}
              height={26}
              className="h-6 w-6 sm:h-7 sm:w-7"
            />

            <span className="text-base font-bold text-white sm:text-lg md:text-xl">
              FITLOG
            </span>
          </Link>

          <NavbarLinks />

          <NavbarStatus />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
