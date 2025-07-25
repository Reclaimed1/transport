import Secondnav from './Secondnav.jsx';

export default function Nav() {
    return (
        <nav >
       <div className="w-full bg-[#091242] lg:gap-[244px] sm:px-3 md:py-[46px] md:px-[360px] h-[160px] flex justify-between items-center ">
           
            <img  src="Logo.png" alt="" />
            <img className='hidden md:block'  src="Address.png" alt="" />
       </div>
       <div >
       <Secondnav />
       </div>
        </nav>
    );
    }