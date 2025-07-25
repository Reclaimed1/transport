
import Cbeside from "./Cbeside";
export default function WhyChooseUs() {
    return (
        <div className="w-full h-[882px] relative grid grid-cols-2">
            <div className="bg-[#091242]">
                <img className="z-20 w-[929px] h-[610px] absolute left-[140px] top-[147px]" src="airplane.png" alt="" />
                <img className="z-30 absolute left-[360px] top-[617px] w-[417px] h-[139px]" src="Feature.png" alt="" />
            </div>
            <div className="relative flex justify-center items-center">
                <img className="z-10 absolute top-10 " src="Pattern.svg" alt="" />
                <div className="z-20 w-[553px] h-[497px] gap-[]"> 
                    <div className="flex py-[9px]">
                    <Cbeside /><span className="px-[3px] bg-[#E8E8E880]">Why Choose Us</span>
               </div>
               <div className="space-y-4">
               <span className="block font-Rubik font-[600] font-semibold text-[#1C1F35] text-[43px]/[100%]">We create opportunity to reach potential</span>
               <span className="font-[500] text-[16px]/[152%] text-[#666C89]">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to further the overall value proposition. </span>
                </div>
                <div className="grid grid-cols-2 w-[553px] min-h-[229px]">
                    <div className="flex items-center gap-2">
                        <img className="w-[63px] h-[63px]" src="con1.png" alt="" /><span className="font-[400] text-[20px]/[100%]">Safe Package</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <img className="w-[63px] h-[63px]" src="con2.png" alt="" /><span className="font-[400] text-[20px]/[100%]">Ship Everywhere</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <img className="w-[63px] h-[63px]" src="con3.png" alt="" /><span className="font-[400] text-[20px]/[100%]">Global Tracking</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <img className="w-[63px] h-[63px]" src="con4.png" alt="" /><span className="font-[400] text-[20px]/[100%]">24/7 Support</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <img className="w-[63px] h-[63px]" src="con5.png" alt="" /><span className="font-[400] text-[20px]/[100%]">In Time Delivery</span>
                    </div>
                     <div className="flex items-center gap-2">
                        <img className="w-[63px] h-[63px]" src="con6.png" alt="" /><span className="font-[400] text-[20px]/[100%]">Transparent Pricing</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
         );
}