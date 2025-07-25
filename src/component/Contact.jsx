
import Cbeside from "./Cbeside"
export default function Contact() {
    return (
        <div className="w-full min-h-[1058px] flex flex-col justify-center items-center gap-[88px] bg-[#091242] mt-[70px]">
            <div className="grid grid-cols-2 gap-[70px] w-[1200px] min-h-[234px]">
                <div className="w-[353px] min-h-[157px]">
                    <div className="flex items-center py-[13px]"><Cbeside /><span className="text-white px-[9px] bg-[#E8E8E81A] font-Rubik">Contact</span></div>
                <span className="text-white font-Rubik font-[600] font-semibold text-[35px]/[100%]">Get in touch with us</span>
               <span className="text-white font-Rubik block py-[13px] font-[500] text-[16px]/[152%]">Leverage agile frameworks to provide a robust synopsis for strategy foster collaborative thinking to
                further the overall value.</span>

                <div className="grid grid-cols-1 gap-[30px] mt-[30px] w-[253px] min-h-[249px]">
                    <img src="Mail.png" alt="" />
                    <img src="Call.png" alt="" />
                    <img src="Time.png" alt="" />
                </div>
                </div>
                <form className="w-[565px] min-h-[428px] mt-[45px]">
                    <div className="grid grid-cols-1 gap-[30px]">
                    <div className="grid grid-cols-2 gap-[28px]">
                        <input type="text" placeholder="Your Name*" className="w-full h-[60px] px-[20px] text-white font-Rubik font-[500] text-[16px]/[152%] border-[1px] border-[#4E5683]" />
                        <input type="email" placeholder="Email*" className="w-full h-[60px] px-[20px] text-white font-Rubik font-[500] text-[16px]/[152%] border-[1px] border-[#4E5683]" />
                    </div>
                    <div className="grid grid-cols-2 gap-[28px]">
                        <input type="text" placeholder="Phone Number*" className="w-full h-[60px] px-[20px] text-white font-Rubik font-[500] text-[16px]/[152%] border-[1px] border-[#4E5683]" />
                        <input type="email" placeholder="City*" className="w-full h-[60px] px-[20px] text-white font-Rubik font-[500] text-[16px]/[152%] border-[1px] border-[#4E5683]" />
                    </div>

                    <div className="grid grid-cols-1 gap-[30px]">
                        <textarea placeholder="Your Message*" className="w-full min-h-[154px] px-[20px] py-[10px] text-white font-Rubik font-[500] text-[16px]/[152%] border-[1px] border-[#4E5683]" />
                    </div>
                    <div className="flex justify-start">
                    <button className="px-[34px] py-[19px] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6]" >Submit Message</button>
                    </div>
                    </div>
                </form>
                 
            </div>
            
            <img className="w-[1200px] mx-auto min-h-[234px]" src="Clientlogo.png" alt="" />
           
            
         
        </div>
    )
}