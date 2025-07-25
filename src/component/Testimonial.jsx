
import Cbeside from "./Cbeside"
export default function Testimonial(){
    return(
        <div className="w-[1200px] min-h-[542px] my-[230px] gap-[40px] ml-[360px]" >
          <div className="flex items-center pb-[13px]"> <Cbeside /><span className="bg-[#E8E8E880] pl-2 font-Rubik font-[400px] text-[14px]">Testimonials</span></div>
       <div className="flex items-center justify-between">
        <span className="font-Rubik font-[600] font-semibold text-[25px]">What Our Customers Say</span>
      <div className="flex space-x-[20px]">
        <img src="Testimonial1.png" alt="" />
        <img src="Testimonial2.png" alt="" />
      </div>
      </div>
      <div className="grid grid-cols-2 w-[1200px] min-h-[425px] mt-[40px] ">
        <div className="py-[65px] px-[72px] bg-[#F4F4F4] items-center justify-center">
          <div className="w-[456px] min-h-[101px]">
          <div className="w-full h-[91px] flex justify-between items-center">
          <div className="flex items-center space-x-[10px]">
          <img src="User1.png" alt="" />
          <div className="flex flex-col">
          <span className="font-Rubik text-[20px]/[100%]">Kathleen smith</span>
          <span className="text-[16px]/[152%] ">Fuel Company</span>
          </div>
          </div>
          <div>
          <img src="quote.png" alt="" />
          </div>
          </div>
          </div>
          <div className="w-[456px] h-[186px] flex flex-col space-y-[20px] mt-[20px]">
          <span className="font-[500] italic text-[16px]/[152%]">Leverage agile frameworks to provide a robust synopsis for strategy
             foster collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation via
               workplace diversity and empowerment.</span>
               <img className="w-[180px] h-[34px] mt-[32px]" src="Star.png" alt="" />
          </div>
        </div>
         <div className="py-[65px] px-[72px] bg-[#091242] text-white items-center justify-center">
          <div className="w-[456px] min-h-[101px]">
          <div className="w-full h-[91px] flex justify-between items-center">
          <div className="flex items-center space-x-[10px]">
          <img src="user2.png" alt="" />
          <div className="flex flex-col">
          <span className="font-Rubik text-[20px]/[100%]">John Martin</span>
          <span className="text-[16px]/[152%] ">Restoration Company</span>
          </div>
          </div>
          <div>
          <img src="quote.png" alt="" />
          </div>
          </div>
          </div>
          <div className="w-[456px] h-[186px] flex flex-col space-y-[20px] mt-[20px]">
          <span className="font-[500] italic text-[16px]/[152%]">Leverage agile frameworks to provide a robust synopsis for strategy
             foster collaborative thinking to further the overall value proposition.
              Organically grow the holistic world view of disruptive innovation via
               workplace diversity and empowerment.</span>
               <img className="w-[180px] h-[34px] mt-[32px]" src="Star.png" alt="" />
          </div>
        </div>
      </div>
        </div>
    )
}