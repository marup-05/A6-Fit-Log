import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container mx-auto px-3 py-7 sm:px-4 sm:py-8">
        <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
          <Link
            href="/"
            className="flex items-center gap-2"  
          >
            <Image
              src={logo}
              alt="FitLog Logo"
              width={22}
              height={22}
              className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
            />

            <span className="text-xs font-bold text-white sm:text-sm">
              FITLOG
            </span>
          </Link>

          <p className="text-[9px] leading-4 text-white/30 sm:text-[10px]">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;