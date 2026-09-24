import Image from "next/image";
import React from "react";
import bannerImg from "../../../public/assets/banner.png";

const Banner = () => {
  return (
    <div className="w-full overflow-hidden  rounded-xl border border-[#22252d] bg-[#15171e] mt-8">
      <div className="flex min-h-[265px] items-center justify-between px-8 py-10 sm:px-10 lg:px-12">
        <div className="z-10 max-w-[590px]">
          {/* Eyebrow */}
          <span className="mb-3 block text-[10px] font-extrabold tracking-[0.8px] text-[#baff00]">
            WORKOUT LIBRARY
          </span>

          {/* Heading */}
          <h1 className="mb-4 text-[32px] font-black leading-[0.95] tracking-[-1.5px] text-white sm:text-[38px]">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mb-[18px] max-w-[480px] text-[11px] leading-[1.55] text-[#858993]">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          {/* DaisyUI Button */}
          <button className="btn h-[25px] min-h-[25px] rounded-[3px] border-none bg-[#baff00] px-[15px] text-[8px] font-black text-[#090a0d] hover:bg-[#d0ff4d]">
            BROWSE WORKOUTS
          </button>
        </div>

        {/* Right Image */}
        <div className="hidden h-[240px] w-[270px] shrink-0 items-center justify-center lg:flex">
          <Image
            src={bannerImg}
            alt="Workout illustration"
            className="h-[250px] w-[250px] object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
