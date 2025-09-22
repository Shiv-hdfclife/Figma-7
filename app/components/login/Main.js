"use client"

import { useState } from "react"
import Image from "next/image"
import Button from "@/app/shared/Button"
import Divider from "@/app/shared/Divider"
import Facebook from "@/public/Facebook.svg"
import Google from "@/public/Google.svg"

export default function Main() {
    const [selectedOption, setSelectedOption] = useState("Password")

    return (
        <div className="mt-10">
            <h2 className="text-[#717684] text-[16px]">Login with</h2>

            <div className="flex justify-between mt-2">
                <div onClick={() => setSelectedOption("Password")}
                    className={`w-1/2 items-center justify-center flex p-4 rounded-tl-lg rounded-bl-lg border 
            ${selectedOption === "Password" ? "border-[#ED1C24] " : "border-gray-300"}`}
                >
                    <button className="text-center" >Password</button>
                </div>

                <div onClick={() => setSelectedOption("OTP")}
                    className={`w-1/2 flex justify-center items-center p-4 rounded-tr-lg rounded-br-lg border 
            ${selectedOption === "OTP" ? "border-[#ED1C24] " : "border-gray-300"}`}
                >
                    <button >OTP</button>
                </div>
            </div>
            {
                selectedOption === "Password" &&
                <>
                    <div className="mt-4 ">
                        <h1 className="text-[#4B5563] text-[14px]">Agent code / Email id / Mobile no. / License no.</h1>
                        <input type="text" placeholder="24390745" className="border-[#C9D3E9] border w-full rounded-[8px]  pl-4 pr-3 py-4" />
                    </div>
                    <div className="mt-4 ">
                        <h1 className="text-[#4B5563] text-[14px]">Password</h1>
                        <input type="text" placeholder="XXXXXXXXX" className="border-[#C9D3E9] border w-full rounded-[8px] pl-4 pr-3 py-4" />
                    </div>
                    <div className="flex flex-row justify-between mt-4">
                        <div className="text-[#D91118] text-[14px]">Forgot Password ?</div>
                        <Button className="px-6 py-3 rounded-[8px] text-white bg-[#ED1C24] w-[157px]">Login</Button>
                    </div>
                </>
            }
            {
                selectedOption === "OTP" &&
                <>
                    <div className="mt-4">
                        <div className="mt-4 ">
                            <h1 className="text-[#4B5563] text-[14px]">Email id / Mobile no.</h1>
                            <input type="text" placeholder="rahulsharma@hdfclife.com" className="border-[#C9D3E9] border w-full rounded-[8px]  pl-4 pr-3 py-4" />
                        </div>
                        <div className="mt-4 flex justify-end">
                            <Button className="px-6 py-3 rounded-[8px] text-white bg-[#ED1C24] w-[157px]">Get OTP</Button>
                        </div>
                    </div>
                </>

            }
            <div className="flex flex-row justify-center items-center gap-2 mt-4 ">
                <Divider />
                <div>Or</div>
                <Divider />
            </div>
            <div className="flex gap-3 mt-6">
                <Button className="px-6 py-3 flex gap-2 rounded-[8px] text-[#ED1C24] border border-[#F9ADAA]  w-[157px]">
                    <Image src={Facebook} alt="Logo" fwidth={20} height={20} className="object-contain" />
                    Facebook</Button>
                <Button className="px-6 py-3 flex gap-2 rounded-[8px] text-[#ED1C24] border border-[#F9ADAA]  w-[157px]">
                    <Image src={Google} alt="Logo" width={20} height={20} className="object-contain" />
                    Google</Button>
            </div>

        </div>
    )
}

