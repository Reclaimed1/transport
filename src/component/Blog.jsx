
import Cbeside from "./Cbeside"
export default function Blog() {
    return (
            <div className="mt-[72px] w-[948px] min-h-[1331px] relative left-[486px]">
                    <div className="flex flex-col justify-center items-center ">
                    <div className="flex justify-center items-center pb-[13px]">
                        <Cbeside/><span className="px-[10px] bg-[#E8E8E880]">Our Blog</span>
                    </div>
                    <span className="font-Rubik font-[600] font-semibold text-[35px]/[100%]">Our Latest News</span>
                    </div>
                    <div className="w-[948px] min-h-[1116px] mt-[35px] ">
                           <div className="border-t-[1px] border-[#D6D6D6] mt-[20px]">
                         <div className=" grid grid-cols-[453px_85px_364px] group  mt-[29px] h-[308px] gap-[20px]">
                            
                            <div className="relative w-[453px] h-full ">
                                <img src="Image1.png" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-6 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-400">
                                    <span className="text-white text-lg font-semibold">Read More</span>
                                </div>
                            </div>
                            <img src="Date1.png" alt="" />
                            <div className="flex flex-col border-l-[1px] border-[#D6D6D6] px-[18px] my-[10px] space-y-3">
                                <span className="font-[400] text-[#1C1F35] font-Rubik text-[25px]/[100%] group-hover:text-[#FFBE34] transition-color duration-500">Inland freight a worthy solution for your business</span>
                                <span className="text-[16px]/[152%]">We are dedicated in creating added value for our customers by implementing modern technology in our work. </span>
                                <div className="mx-5 text-[#1C1F35] text-[16px]/[167%]">
                                <ul className="list-disc">
                                    <li>Urgent Transport Solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                    <li>Urgent Transport Solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        </div>

                                 <div className="border-t-[1px] border-[#D6D6D6] mt-[20px]">
                         <div className=" grid grid-cols-[453px_85px_364px] group  mt-[29px] h-[308px] gap-[20px]">
                            
                            <div className="relative w-[453px] h-full ">
                                <img src="Image2.png" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-6 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-400">
                                    <span className="text-white text-lg font-semibold">Read More</span>
                                </div>
                            </div>
                            <img src="Date2.png" alt="" />
                            <div className="flex flex-col border-l-[1px] border-[#D6D6D6] px-[18px] my-[10px] space-y-3">
                                <span className="font-[400] text-[#1C1F35] font-Rubik text-[25px]/[100%] group-hover:text-[#FFBE34] transition-color duration-500">How technology can help redraw the supply chain map</span>
                                <span className="text-[16px]/[152%]">We are dedicated in creating added value for our customers by implementing modern technology in our work. </span>
                                <div className="mx-5 text-[#1C1F35] text-[16px]/[167%]">
                                <ul className="list-disc">
                                    <li>Urgent Transport Solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                    <li>Urgent Transport Solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                            <div className="border-t-[1px] border-[#D6D6D6] mt-[20px]">
                         <div className=" grid grid-cols-[453px_85px_364px] group  mt-[29px] h-[308px] gap-[20px]">
                            
                            <div className="relative w-[453px] h-full ">
                                <img src="Image3.png" alt="" className="w-full h-full object-cover" />
                                <div className="absolute inset-6 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-80 transition-opacity duration-400">
                                    <span className="text-white text-lg font-semibold">Read More</span>
                                </div>
                            </div>
                            <img src="Date3.png" alt="" />
                            <div className="flex flex-col border-l-[1px] border-[#D6D6D6] px-[18px] my-[10px] space-y-3">
                                <span className="font-[400] text-[#1C1F35] font-Rubik text-[25px]/[100%] group-hover:text-[#FFBE34] transition-color duration-500">Five things you should have ready for your broker</span>
                                <span className="text-[16px]/[152%]">We are dedicated in creating added value for our customers by implementing modern technology in our work. </span>
                                <div className="mx-5 text-[#1C1F35] text-[16px]/[167%]">
                                <ul className="list-disc">
                                    <li>Urgent Transport Solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                    <li>Urgent Transport Solutions</li>
                                    <li>Reliable & experienced staffs</li>
                                </ul>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="w-full flex items-center justify-center py-[100px]">
                        <button className="bg-[#091242] text-white text-[16px]/[135%] py-2.5 px-8">More Blog</button>
                        </div>
                    </div>
            </div>
    )
}