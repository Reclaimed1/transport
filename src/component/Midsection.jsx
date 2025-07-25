
import Cbeside from "./Cbeside"
export default function Midsection() {
        return(
            <div id="" className=''>
                <div className='grid grid-cols-3 gap-[33px] w-[1200px] ml-[360px] mt-[131px]'>
                <div className='w-[294px] h-[131px] row-span-2'>
                    <div  className="flex">
                    <Cbeside />
                    <span className="px-[13px] bg-[#F4F4F4] text-[12px]">What We Do</span>
                    </div>
                    <span className="font-semibold text-[35px] leading-snug ">Safe & Reliable Cargo Solutions</span>
                </div>
                <div className="flex">
                    <img src="Icon1.png" alt="" className=""/>
                    <div className=" w-[294px] border-l-[1px] border-[#D9D9D9]">
                        <div className="px-3">
                        <span className="text-[25px]">Sea Transport Services</span>
                        <span className="text-[16px] block">Following the quality of our service thus  having gained trust of our many clients.</span>
                   </div>
                    </div>
                </div>
                <div className="flex">
                    <img src="Icon2.png" alt="" className=""/>
                    <div className=" w-[294px] border-l-[1px] border-[#D9D9D9]">
                        <div className="px-3">
                        <span className="text-[25px]">Warehousing Services</span>
                        <span className="text-[16px] block">Following the quality of our service thus  having gained trust of our many clients.</span>
                   </div>
                    </div>
                </div>
                 
                 <div className="flex">
                    <img src="Icon3.png" alt="" className=""/>
                    <div className=" w-[294px] border-l-[1px] border-[#D9D9D9]">
                        <div className="px-3">
                        <span className="text-[25px]">Air Fright Services</span>
                        <span className="text-[16px] block">Following the quality of our service thus  having gained trust of our many clients.</span>
                   </div>
                    </div>
                </div>
                  <div className="flex">
                    <img src="Icon4.png" alt="" className=""/>
                    <div className=" w-[294px] border-l-[1px] border-[#D9D9D9]">
                        <div className="px-3">
                        <span className="text-[25px]">Local Shipping Services</span>
                        <span className="text-[16px] block">Following the quality of our service thus  having gained trust of our many clients.</span>
                   </div>
                    </div>
                </div>
                </div>
               

               <div className="bg-cover bg-center h-[258px] w-full mt-[112px] relative">
                <img src="background2.png" alt="" />

                <div className="absolute w-[1200px] h-[547px] top-[366px] left-[360px] bg-[#FFFFFF] pl-[125px] pt-[66px]">
                    <div className="flex">
                  <Cbeside />
                  <span className="bg-[#E8E8E880] text-[14px] px-1">Why Us</span>
                   </div>
                   <div className="w-[472px] h-[238px] space-y-4">
                    <span className="text-[35px] font-semibold">We provide full range global logistics solution</span>
                   <span className="block text-[16px]">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition.</span> 
                    <span className="block text-[16px]">Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</span>
                    <div className="flex items-center space-x-3">
                    <img src="iconD.png" alt="" /><span className="text-[16px]">Delivery on Time</span>
                    </div>
                    <div className="flex items-center space-x-3">
                    <img src="iconO.png" alt="" /><span className="text-[16px]">Optimized Travel Cost</span>
                    </div>
                    <img className="absolute top-16 right-14" src="Image11.png" alt="" />

                   <div className="w-[1020px] h-[142px] border-t-[1px] border-b-[1px] mt-28 grid grid-cols-2">
                    <div className="border-r-[1px] space-x-4 border-[#D9D9D9] flex items-center justify-center">
                        <span className="semibold text-[50px] font-[600] font-Rubik">1294</span>
                                    <div className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] h-[17px] w-[17px]"></div>
                   <span className="text-[20px]">Delivered Packages</span>
                    </div>
                    <div className=" space-x-4 border-[#D9D9D9] flex items-center justify-center">
                        <span className="semibold text-[50px] font-[600] font-Rubik">3594</span>
                                    <div className="bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] h-[17px] w-[17px]"></div>
                   <span className="text-[20px]">Satisfied Clients</span>
                    </div>
                   </div>
                   </div>
                   
                   </div>
               </div>
            </div>
        )
}