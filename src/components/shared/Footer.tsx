import Link from "next/link";
import Image from "next/image";
import logo from "../../../public/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-black">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center justify-between gap-5 sm:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Image src={logo} alt="FitLog Logo" width={22} height={22} />

            <span className="text-sm font-bold text-white">FITLOG</span>
          </Link>

          <p className="text-[10px] text-white/30">
            © 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
