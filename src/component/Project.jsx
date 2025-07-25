import { Link } from "react-router-dom"
export default function Project(){
    return(
        <div id="Project" className="relative w-full mt-[928px] min-h-[608px] flex justify-center items-start ">
           
            <div className=" z-10 w-full h-[400px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] absolute top-[318px] ">
            
        </div>
            <div className="z-20 w-[1672px] h-[608px] ml-[122px] flex flex-col justify-center">
                <span className="font-semibold text-[35px] font-[600px] font-Rubik w-[524px] mx-auto">Transport Across The World</span>
                <div className=" mt-[50px] grid grid-cols-5 gap-[15px]">
                <img src="1.png" alt="" />
                <img src="2.png" alt="" />
                <img src="3.png" alt="" />
                <img src="4.png" alt="" />
                <img src="5.png" alt="" />
                </div>
                <button className="w-[194px] h-[60px] font-[600] font-Rubik font-semibold text-[16px] text-white bg-[#091242] top-[49px] left-[739px] relative">More Work</button>
              <Link to="/cape">hello</Link>
            </div>
        
        </div>
    )
}