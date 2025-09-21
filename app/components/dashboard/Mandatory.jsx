import Image from "next/image"
import teacher from "@/public/teacher.png"
import Button from "@/app/shared/Button"
export default function Manditory() {
    return (
        <div className="mt-6">
            <h1 className="text-[#717684] text-[18px]">Mandatory Training
            </h1>
            <div className="flex flex-row mt-4  bg-[#F6F1FE] p-4 rounded-3xl">
                <div>

                    <h1 className="font-bold">Training due in 2 days</h1>
                    <div className="flex flex-row  items-center">
                        <div className="text-[#4B5563] mt-4">Finish your mandatory learning
                            within the next two days.</div>
                    </div>
                    <Button className="px-6 py-3 mt-4 rounded-[8px] text-[#ED1C24] bg-white w-[157px] border border-[#F9ADAA]">Complete Now</Button>
                </div>

                <div>
                    <Image src={teacher} className="object-contain" />
                </div>
            </div>
        </div>
    )
}