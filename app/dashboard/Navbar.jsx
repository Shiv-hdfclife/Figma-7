"use client";

import { useState } from "react";
import { Bell, ChevronDown, Crown } from "lucide-react";
import Image from "next/image";
import threeLine from "../../public/threeLine.svg";
import search from "../../public/search.svg";
import DropDown from "../../public/DropDown.svg";
import crown from "../../public/crown.svg";
import clsx from "clsx";

const Navbar = () => {
  const [hasNotification, setHasNotification] = useState(true);

  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white shadow-sm font-poppins">
      {/* Left Section */}
      <div className="flex items-center gap-4">
        {/* Menu Icon */}
        <Image
          src={threeLine}
          alt="Menu"
          width={24}
          height={24}
          className="cursor-pointer"
        />

        {/* RS Badge */}
        <div className="relative w-[48px] h-[48px]">
          {/* Outer Circle */}
          <div className="absolute w-[48px] h-[48px] rounded-full border border-yellow-500" />

          {/* Inner Circle */}
          <div
            className="absolute w-[42px] h-[42px] bg-[#FEF4D7] rounded-full"
            style={{ top: "3px", left: "3px" }}
          />

          {/* RS Text */}
          <div
            className={clsx(
              "absolute text-black",
              "text-[16px] leading-[24px] font-normal"
            )}
            style={{ top: "12px", left: "14px", width: "20px", height: "24px" }}
          >
            RS
          </div>
        </div>

        {/* Name & Role Badge */}
        <div className="flex flex-col justify-center ml-2">
          <span className="text-[#111111] font-poppins font-semibold text-[16px] leading-[24px] align-middle tracking-normal">
            Rahul Sharma
          </span>
          <div className="mt-1 w-[110px] h-[20px] flex items-center gap-[8px]">
            {/* Inner badge container */}
            <div
              className="flex items-center gap-[4px] pr-[6px] rounded-full w-[87px] h-[20px]"
              style={{
                background:
                  "linear-gradient(99.79deg, rgba(163, 124, 5, 0.2) -4.15%, rgba(233, 216, 174, 0.2) 35.05%, rgba(163, 124, 5, 0.2) 83.95%)",
              }}
            >
              {/* Crown Circle */}
              <div
                className="relative w-[20px] h-[20px] rounded-full"
                style={{
                  background:
                    "linear-gradient(142.31deg, #886836 20.65%, #EFDFB6 56.75%, #9A7A3E 91.44%)",
                }}
              >
                {/* Crown Image Placeholder */}
                <div
                  className="absolute"
                  style={{
                    width: "11.07px",
                    height: "8.93px",
                    top: "5.71px",
                    left: "4.29px",
                    borderRadius: "0.5px",
                  }}
                >
                  <Image src={crown} alt="crown" width={11} height={9} />
                </div>
              </div>

              {/* Label Text */}
              <span className="text-[#111111] font-poppins font-normal text-[12px] leading-[16px] tracking-normal align-middle">
                Star & PM
              </span>
            </div>

            {/* Dropdown Icon Placeholder */}
            <div className="w-[15px] h-[15px]">
              <Image src={DropDown} alt="Dropdown" width={15} height={8} />
            </div>
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex items-center gap-6">
        <Image
          src={search}
          alt="Search"
          width={25}
          height={25}
          className="cursor-pointer"
        />
        <div className="relative w-10 h-10 flex items-center justify-center">
          <Bell className="w-5 h-5 text-gray-600 cursor-pointer" />
          {hasNotification && (
            <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full" />
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
