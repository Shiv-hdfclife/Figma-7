"use client";

import Image from "next/image";
import p1 from "@/public/p1.png"
import p2 from "@/public/p2.png"
import p3 from "@/public/p3.png"

export default function Leaderboard() {
    return (
        <div className="w-full mt-4 max-w-md mx-auto   rounded-xl ">

            <h2 className="text-lg font-semibold text-gray-700 mb-3">Leaderboard</h2>


            <div className="flex items-center gap-2 bg-blue-100 text-gray-800 p-3 rounded-lg mb-5">
                <span className="text-2xl">🏆</span>
                <p className="text-sm">
                    <span className="font-semibold">Hey Rahul,</span> you are{" "}
                    <span className="font-semibold">7,500 points</span> away to jump{" "}
                    <span className="font-semibold">5 ranks!</span>
                </p>
                <span className="ml-auto">↗️</span>
            </div>


            <div className="flex justify-around items-center bg-[#F4F6FB] rounded-xl mb-6">

                <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-gray-200">
                        <Image
                            src={p1}
                            alt="Sivanand"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-2 font-medium text-gray-700">Sivanand</p>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-md">
                        Rank 20
                    </span>
                </div>


                <div className="text-center">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-4 border-yellow-400">
                        <Image
                            src={p2}
                            alt="Abhishek"
                            width={96}
                            height={96}
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-2 font-medium text-gray-700">Abhishek</p>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-md">
                        Rank 15
                    </span>
                </div>


                <div className="text-center">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-orange-200">
                        <Image
                            src={p3}
                            alt="Darshan"
                            width={80}
                            height={80}
                            className="object-cover"
                        />
                    </div>
                    <p className="mt-2 font-medium text-gray-700">Darshan</p>
                    <span className="px-2 py-1 text-xs bg-blue-100 text-blue-600 rounded-md">
                        Rank 25
                    </span>
                </div>
            </div>


            <div className="flex items-start gap-3 bg-[#D9E7FF] p-4 rounded-lg">
                <span className="text-3xl">🔥</span>
                <div className="flex-1">
                    <p className="font-semibold text-gray-800">Rahul Sharma</p>
                    <p className="text-sm text-gray-600">
                        Steady growth on the rank ladder for 3 months.
                        <span className="text-green-600 font-semibold"> Good Job! 👍</span>
                    </p>
                </div>
                <span className="bg-white px-3 py-1 rounded-md font-bold text-blue-600">
                    #26
                </span>
            </div>
        </div>
    );
}
