import Image from "next/image"
import Logo from "../../assets/logo.png"
import Profile from "../../assets/Profile.png"

export default function Header() {
    return (
        <div className="">
            <Image src={Logo} alt="logo" width={58} height={38} className="ml-2" />

            <div className="flex flex-row justify-between items-center mt-[40px] h-[140px]" >
                {/* Left: vertically centered text */}
                <div className="w-[65%] flex items-center">
                    <p className="text-center m-0">
                        Welcome to, <br />
                        <span className="text-[18px] font-bold text-[#111827]">
                            Super App
                        </span>
                    </p>
                </div>

                {/* Right: image that can overflow the pink box */}
                <div className="w-[35%] rounded-[10px] flex items-end relative overflow-visible h-full">
                    <div className="h-[75%] bg-[#FDE7E8] rounded-[10px] w-full relative z-10"></div>

                    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[120%] h-[90%] z-20">
                        <Image
                            src={Profile}
                            alt="Profile Illustration"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

        </div>
    )
}