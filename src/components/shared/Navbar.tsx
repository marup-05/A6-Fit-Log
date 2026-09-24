import Image from "next/image";
import logo from "../../../public/assets/logo.png";
import Link from "next/link";

import NavbarLinks from "./NavbarLinks";
import NavbarStatus from "./NavbarStatus";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 w-full bg-black">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="FitLog Logo" width={28} height={28} />

            <span className="text-xl font-bold text-white">FITLOG</span>
          </Link>

          {/* Main Navigation */}
          <NavbarLinks />

          {/* Plan & Saved */}
          <NavbarStatus />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
