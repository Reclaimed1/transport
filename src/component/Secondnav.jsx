import { useState,useEffect } from "react"
import { HashLink } from "react-router-hash-link"
import { Link } from "react-router-dom";
export default function Secondnav() {
    const [isHome, setIsHome] = useState(false);
    const hme=isHome ? 'underline underline-offset-30' : '';
    const [isAbout, setIsAbout] = useState(false);
    const abt=isAbout ? 'underline underline-offset-30' : '';
    const [isProject, setIsProject] = useState(false);
    const srv=isProject ? 'underline underline-offset-30' : '';
    const [isContact, setIsContact]= useState(false);
    const con=isContact ? 'underline underline-offset-30' : '';

    function Handlehme(){
        setIsHome(true);
        setIsAbout(false);
        setIsProject(false);
        setIsContact(false);
    }
     function Handleabt(){
        setIsHome(false);
        setIsAbout(true);
        setIsProject(false);
        setIsContact(false);
    }
        function Handlesrv(){
        setIsHome(false);
        setIsAbout(false);
        setIsProject(true);
        setIsContact(false);
    }
       function Handlecon(){
        setIsHome(false);
        setIsAbout(false);
        setIsProject(false);
        setIsContact(true);
    }
useEffect(() => {
    setIsHome(true);
}, []);
    return (
        <div className=''>
            <nav className='flex justify-between relative sticky'>
                <div className="absolute bg-[#09124240] opacity-25% w-full h-[78px] z-10"></div>
                <div className='flex items-center text-white w-[1197.99px] ml-[361px] h-[78px] justify-between z-20'>
                    <div className="w-[504px]">
                    <Link to="/" className={`px-[30px] py-1.5 ${hme} border-r-[1px] text-[16px]`} onclick={Handlehme}>Home</Link>
                    <HashLink to="#about" className={`px-4 py-1.5 ${abt} border-r-[1px] text-[16px]`} onclick={Handleabt}>About</HashLink>
                    <Link to='/' className={`px-[30px] py-1.5 border-r-[1px] text-[16px]`} onclick={Handlehme}>Pages</Link>
                    <HashLink to="#project" className={`px-4 py-1.5 ${srv} border-r-[1px] text-[16px]`} onclick={Handlesrv}>Project</HashLink>
                    <HashLink to="#contact" className={`px-4 py-1.5 ${con} text-[16px]`}  onclick={Handlecon}>Contact</HashLink>                  
                    </div>
                    <div className="flex w-[415.99px] items-center ">
                        <div className="space-x-[24px] h-[19px] w-[150.99px] flex ">
                            <img src="inst.png" alt="" />
                            <img src="face.png" alt="" />
                            <img src="twit.png" alt="" />
                            <img src="lin.png" alt="" />
                        </div>
                        <button className="px-[52px] py-[28px] bg-[#FFFFFF] ml-[50px] text-black">Request Quote</button>
                    </div>
                </div>
            </nav>
        </div>
    )
}