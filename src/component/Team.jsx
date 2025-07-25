
import Cbeside from "./Cbeside"
export default function Team(){
    return(
        <div className="w-[1200px] min-h-[658px] mt-[100px] ml-[360px] gap-[40px] ">
          <div className="flex flex-col items-center mb-[30px]">
            <div className="flex items-center justify-center pb-[13px]">
           <Cbeside /><span className="px-[8px] bg-[#E8E8E880] text-[14px]">The Transporters</span>
          </div>
          <span className="font-Rubik font-semibold font-[600] text-[35px]/[100%]">Meet Expert Team</span>
          </div>

          <div className="grid grid-cols-3 gap-[]">
           
                <img src="Expert1.png" alt="" />
                <img src="Expert2.png" alt="" />
                <img src="Expert3.png" alt="" />    
          </div>
        </div>
    )
}
