'use client';

import Image from 'next/image';
import greenTick from '../../public/greenTick.svg';
import RedDropdown from '../../public/RedDropdown.svg';
import upRightArrow from '../../public/upRightArrow.svg';
import Card1Image from '../../public/Card1Image.svg';

export default function CaseSummary() {
  return (
    <section
      className="flex items-center justify-between relative flex-col gap-[10px]  opacity-100"
      style={{ top: '99px', left: '20px' }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between w-[350px] h-[28px] gap-[32px]">
        <span className="w-[263px] h-[24px] text-[#717684] font-poppins font-normal text-[16px] leading-[24px] align-middle">
          Case Summary
        </span>

        <div className="flex items-center w-[55px] h-[28px] rounded-[8px] gap-[4px] px-[6px] py-[4px] bg-[#F5F5F5]">
          <span className="text-[#ED1C24] font-poppins font-medium text-[14px] leading-[20px] text-center align-middle">
            MTD
          </span>
          <div className="w-[20px] h-[20px] flex items-center justify-center">
            <Image src={RedDropdown} alt="Red Dropdown" width={13.75} height={7.5} />
          </div>
        </div>
      </div>

      {/* Progress Message */}
      <div
        className="flex items-center w-[350px] h-[32px] px-[8px] py-[12px] gap-[10px] rounded-md"
        style={{ backgroundColor: '#E5EFFF' }}
      >
        <div className="flex items-center w-[320px] h-[16px] gap-[8px]">
          <Image src={greenTick} alt="Green Tick" width={16} height={16} />
          <span className="text-[#0C111D] font-poppins font-semibold text-[12px] leading-[16px] align-middle">
            Almost there!
          </span>
          <span className="text-[#374254] font-poppins font-normal text-[12px] leading-[16px] align-middle">
            Another 2 weeks to reach the goal!
          </span>
        </div>
      </div>

      {/* Cards Section */}
      <div className="flex gap-[12px] w-[350px] h-[188px]">
        {/*  First Card */}
        <div
          className="relative flex flex-col gap-[8px] w-[169px] h-[188px] p-[20px] rounded-[16px] cursor-pointer"
          style={{ backgroundColor: '#D1EDFF', transition: 'transform 300ms ease-out' }}
          onClick={() => {
            // Navigate to "Create Quote"
          }}
        >
          <div className="absolute w-[20px] h-[20px]" style={{ top: '4.38px', left: '4.37px' }}>
            <Image src={upRightArrow} alt="Upright Arrow" width={20} height={20} />
          </div>

          <div className="w-[137px] h-[137px]">
            <Image src={Card1Image} alt="Card Image" width={137} height={137} />
          </div>

          <div className="flex flex-col gap-[8px] w-[129px] h-[149px]">
            <span className="text-[#0C111D] font-poppins font-semibold text-[24px] leading-[36px] align-middle">
              342
            </span>
            <span className="text-[#0C111D] font-poppins font-normal text-[16px] leading-[24px] align-middle">
              Pending
            </span>
          </div>
        </div>

        <div>

        {/* Second Card */}
        <div
          className="relative flex flex-col gap-[4px] w-[169px] h-[88px] p-[12px] rounded-[16px]"
          style={{ backgroundColor: '#F0E8FD' }}
        >
          <div className="absolute w-[20px] h-[20px]" style={{ top: '4.38px', left: '4.37px' }}>
            <Image src={upRightArrow} alt="Upright Arrow" width={20} height={20} />
          </div>

          <div className="flex justify-between items-center w-[145px] h-[36px]">
            <span className="text-[#0C111D] font-poppins font-semibold text-[24px] leading-[36px] align-middle">
              200
            </span>
          </div>

          <div className="w-[120px] h-[24px]">
            <span className="text-[#374254] font-poppins font-normal text-[16px] leading-[24px] align-middle">
              Issued
            </span>
          </div>
        </div>

        {/* Third Card */}
        <div
          className="relative flex flex-col gap-[4px] w-[169px] h-[88px] p-[12px] rounded-[16px]"
          style={{ backgroundColor: '#FDE8E7' }}
        >
          <div className="absolute w-[20px] h-[20px]" style={{ top: '4.38px', left: '4.37px' }}>
            <Image src={upRightArrow} alt="Upright Arrow" width={20} height={20} />
          </div>

          <div className="flex justify-between items-center w-[145px] h-[36px]">
            <span className="text-[#0C111D] font-poppins font-semibold text-[24px] leading-[36px] align-middle">
              50
            </span>
          </div>

          <div className="w-[120px] h-[24px]">
            <span className="text-[#374254] font-poppins font-normal text-[16px] leading-[24px] align-middle">
              Rejected
            </span>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
