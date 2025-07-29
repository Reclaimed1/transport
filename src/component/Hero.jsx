import Nav from '../component/Nav.jsx'
import Afternav from '../component/Afternav.jsx'
export default function Hero(){
    return(
 <div className='relative h-[1035px]' >
    <img className='absolute h-[1035px] w-full bg-cover bg-center' src="background1.png" alt="" />
    <div className=' absolute'>
    <Nav />
    <Afternav />
    </div>
      </div>
      )
}