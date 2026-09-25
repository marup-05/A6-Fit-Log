import Image from "next/image";
import React from "react";
import bannerImg from "../../../public/assets/banner.png";

const Banner = () => {
  return (
    <div className="mx-3 mt-5 w-auto overflow-hidden rounded-xl border border-[#22252d] bg-[#15171e] sm:mx-4 sm:mt-6 lg:mx-0 lg:mt-8">
      <div className="flex min-h-[320px] flex-col items-center justify-center px-5 py-8 text-center sm:min-h-[300px] sm:px-8 md:min-h-[280px] md:flex-row md:justify-between md:px-10 md:text-left lg:min-h-[265px] lg:px-12">
        <div className="z-10 max-w-[590px]">
          <span className="mb-3 block text-[9px] font-extrabold tracking-[0.8px] text-[#baff00] sm:text-[10px]">
            WORKOUT LIBRARY
          </span>

          <h1 className="mb-4 text-[27px] font-black leading-[1] tracking-[-1.2px] text-white sm:text-[34px] md:text-[36px] lg:text-[38px]">
            TRAIN WITH INTENT. LOG
            <br />
            EVERY SET.
          </h1>

          <p className="mx-auto mb-[18px] max-w-[480px] text-[10px] leading-[1.55] text-[#858993] sm:text-[11px] md:mx-0">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today's plan, and watch the week's work add up.
          </p>

          <button className="btn h-[30px] min-h-[30px] rounded-[3px] border-none bg-[#baff00] px-[15px] text-[8px] font-black text-[#090a0d] hover:bg-[#d0ff4d]">
            BROWSE WORKOUTS
          </button>
        </div>

        <div className="mt-6 flex h-[150px] w-[180px] shrink-0 items-center justify-center sm:h-[170px] sm:w-[200px] md:mt-0 md:h-[200px] md:w-[220px] lg:h-[240px] lg:w-[270px]">
          <Image
            src={bannerImg}
            alt="Workout illustration"
            className="h-[150px] w-[150px] object-contain sm:h-[170px] sm:w-[170px] md:h-[190px] md:w-[190px] lg:h-[250px] lg:w-[250px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
