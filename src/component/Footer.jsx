import { HashLink } from "react-router-hash-link"
export default function Footer(){
    return(
        <div className="w-full min-h-[974px] border-[1px] border-[#4E5683] mt-[20px] bg-[#091242]">
            <div>
                <img className="bg-cover" src="Footerimage.png" alt="" />
            </div>
            <div className="flex relative left-[357px] min-h-[403px] mt-[91px] w-[1205px] grid grid-cols-4 text-white">
                <div className="min-h-[403px] w-[319px]">
                    <img className="w-[210px] min-h-[36px] mb-[74px]" src="Logo.png" alt="" />
                    <div className="flex flex-col space-y-[33px]">
                    <span className="text-[16px]/[152%] font-[500]">Leverage agile frameworks to provide a robust synopsis for strategy
                          collaborative thinking to further the overall value proposition.</span>
                   <img className="w-[227px]" src="Addressbot.png" alt="" />
                    </div>
                </div>
               <div className="min-h-[403px] ml-[140px] w-[86px] ">
                    <span className="font-Rubik font-[500] text-[25px]/[100%]">Pages</span>
                    <div className="flex flex-col mt-[74px] text-[16px]/[250%]">
                    <HashLink to="#about">About Us</HashLink>
                    <HashLink to="#team">Our Team</HashLink>
                    <HashLink to="#project">Our Project</HashLink>
                    <HashLink to="/">Pricing</HashLink>
                    <HashLink to="#contact">Contact</HashLink>
                    </div>
                </div>
                 <div className="min-h-[403px] ml-[140px] w-[86px] ">
                    <span className="font-Rubik font-[500] text-[25px]/[100%]">Utility</span>
                    <div className="flex flex-col mt-[74px] text-[16px]/[250%]">
                    <HashLink to="/">Style Guide</HashLink>
                    <HashLink to="/">Changelog</HashLink>
                    <HashLink to="/">License</HashLink>
                    <HashLink to="/">Protected</HashLink>
                    <HashLink to="/">Not Found</HashLink>
                    </div>
                </div>
                 <div className="min-h-[255px] ml-[140px] w-[317px] ">
                    <span className="font-Rubik font-[500] text-[25px]/[100%]">Subscribe</span>
                    <div className="flex flex-col mt-[74px]">
                        <input className="border-[1px] border-[#4E5683] w-[317px] h-[60px] px-4 text-[20px]/[100%]" type="text" placeholder="Email here*" />
                       <div className="my-[35px] items-center w-[303.22px] min-h-[60px] flex space-x-[35px]">
                        <button className="text-[#23212A] font-semibold font-[600] text[16px]/[135%] bg-gradient-to-r from-[#FFB629] via-[#FFDA56] to-[#FFD7A6] py-[19px] px-[36px]">Send Now</button>
                        <img className="h-[12px]" src="Follow.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-[55px] border-t-[1px] border-b-[1px] border-[#4E5683] flex items-center">
                <div className="w-[1195px] min-h-[40px] relative left-[362px] flex items-center justify-between text-white">
                <span className="text-[16px]/[250%]">Copyright © TransitFlow | Designed by Junaid - Powered by React.</span>
                <div className="flex space-x-7">
                    <span className="font-[400] text-[16px]/[250%] text-[#8388A7]">style Guide</span>
                    <span className="font-[400] text-[16px]/[250%] text-[#8388A7]">License</span>
                    <span className="font-[400] text-[16px]/[250%] text-[#8388A7]">Changelog</span>
                    <span className="font-[400] text-[16px]/[250%] text-[#8388A7]">Password</span>
                </div>
                </div>
            </div>
        </div>
    )
}