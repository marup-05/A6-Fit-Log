import Image from "next/image";
import logo from "../../../public/assets/logo.png"
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 bg-black">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">

          
          <Link href="/" className="flex items-center gap-2">
            <Image
              src={logo}
              alt="FitLog Logo"
              width={28}
              height={28}
            />

            <span className="text-white text-xl font-bold">
              FITLOG
            </span>
          </Link>

          
          <div className="flex items-center gap-8">

            <Link
              href="/"
              className="text-white text-sm font-medium hover:text-[#C2F800] transition-colors duration-200"
            >
              Workouts
            </Link>

            <Link
              href="/my-plan"
              className="text-white text-sm font-medium hover:text-[#C2F800] transition-colors duration-200"
            >
              My Plan
            </Link>

          </div>

          {/* Plan & Saved */}
          <div className="flex items-center gap-5">

            <Link
              href="/my-plan?tab=plan"
              className="text-white text-sm font-medium hover:text-[#C2F800] transition-colors duration-200"
            >
              Plan
            </Link>

            <Link
              href="/my-plan?tab=saved"
              className="text-white text-sm font-medium hover:text-[#C2F800] transition-colors duration-200"
            >
              Saved
            </Link>

          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;