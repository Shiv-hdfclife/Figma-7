export default function FundManagement() {
    const availableFund = 3000000;
    const threshold = 2000000;
    const total = availableFund + threshold;
    const availableWidth = (availableFund / total) * 100;
    const thresholdWidth = (threshold / total) * 100;
    return (
        <div className="bg-[#C9D3E9] rounded-2xl ">
            <div className="bg-[#F4F6FB] rounded-2xl">
                <div className="p-4">
                    <h1>Total Fund</h1>
                    <div className="flex flex-row gap-4  items-center">
                        <div className="font-bold">
                            ₹ 5,00,00,000
                        </div>
                        <div className="text-[#0EA55E] text-[12px] text-center"> 15.5%</div>
                        <div className="text-[#1C2633] text-[12px]">This month</div>
                    </div>
                </div>

                <div className="w-full max-w-xl mx-auto p-6 rounded-lg ">
                    <div className="w-full h-6 flex rounded-md overflow-hidden ">
                        <div
                            className="bg-blue-300"
                            style={{ width: `${availableWidth}%` }}
                        ></div>
                        <div
                            className="bg-red-300"
                            style={{ width: `${thresholdWidth}%` }}
                        ></div>
                    </div>

                    <div className="flex justify-between mt-6">
                        <div className="flex">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="w-4 h-4 bg-blue-300 rounded"></span>
                                    <p className="text-gray-600">Available Fund</p>
                                </div>
                                <p className="font-bold text-lg">₹ 3,00,00,000</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div>
                                <div className="flex items-center gap-2">
                                    <span className="w-4 h-4 bg-red-300 rounded"></span>


                                    <p className="text-gray-600">Threshold</p>
                                </div>
                                <p className="font-bold text-lg">₹ 2,00,00,000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="text-center p-2">You have a threshold limit of ₹ 2 crore</div>
        </div>
    )
}