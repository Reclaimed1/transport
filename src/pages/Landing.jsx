
import Nav from '../component/Nav.jsx'
import Afternav from '../component/Afternav.jsx'
import Midsection from '../component/Midsection.jsx'
import Project from '../component/Project.jsx'
import Testimonial from '../component/Testimonial.jsx'
import WhyChooseUs from '../component/WhyChooseUs.jsx'
import Team from '../component/Team.jsx'
import Contact from '../component/Contact.jsx'
import Blog from '../component/Blog.jsx'
import Footer from '../component/Footer.jsx'
export default function Landing(){
    return(
        <div>
              <div className='topImg h-[1035px] w-full bg-cover bg-center' >
    <Nav />
    <Afternav />
      </div>
      <div id="about">
      <Midsection />
      </div>
      <div id="project">
      <Project />
      </div>
      <Testimonial />
      <div id="about">
      <WhyChooseUs />
      </div>
      <div id="team">
      <Team />
      </div>
      <div id="contact">
      <Contact />
      </div>
      <Blog />
      <Footer/>
        </div>
    )
}