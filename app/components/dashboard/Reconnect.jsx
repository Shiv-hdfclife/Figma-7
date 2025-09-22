import Image from "next/image"
import detail from "@/public/info.png"
import claim from "@/public/claim.png"
import birthday from "@/public/birthday.png"
export default function Reconnect() {
    return (
        <div className="mt-4">
            <h1>Re-Connect</h1>
            <div className="flex bg-[#E5EFFF] px-[8px] py-[12px] rounded-[8px] mt-2">
                <Image src={detail} className="object-contain" />
                <div className="text-[12px] text-[#374254]">
                    Earn Incentives of ₹3000 a day by closing below task
                </div>
            </div>
            <div className="flex flex-row gap-4 mt-6">
                <div className="w-1/2 bg-[#F6F1FE] p-[8px] rounded-[8px]">
                    <h1 className="font-bold">15</h1>
                    <div className="flex flex-row  items-center">
                        <div className="text-[#4B5563]">Birthday of <br />
                            the week</div>
                        <Image src={birthday} />

                    </div>
                </div>
                <div className="w-1/2 bg-[##FEF6F6] p-[8px] rounded-[8px]">
                    <h1 className="font-bold">25</h1>
                    <div className="flex flex-row  items-center">
                        <div className="text-[#4B5563]">Premium
                            due</div>
                        <Image src={claim} />

                    </div>
                </div>
            </div>

        </div>
    )
}