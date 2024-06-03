import Contact from "../../Pages/Contacts/Components/Contact"
import PageLayout from "../../Pages/PageLayout"
import{Route, Routes} from "react-router-dom"
import Testimonial from "../../Pages/Testimonials/Components/Testimonial"
import Privacy from "../../Pages/PrivacyPolicy/Components/Privacy"
import AboutUs from "../../Pages/AboutUs/Components/AboutUs"
import Home from "../../Pages/Home/Components/Home"
import More from "../../Pages/More/Components/More"
import Team from "../../Pages/Team/Component/Team"
import Faq from "../../Pages/FAQ/Components/Faq"
import Blog from "../../Pages/Blog/Components/Blog"
import Pricing from "../../Pages/Pricing/Components/Pricing"
import Gallery from "../../Pages/Gallery/Components/Gallery"
import Services from "../../Pages/Services/Components/Services"

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />} >
          <Route index path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="services" element={<Services/>} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contact" element={<Contact />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path="/more" element={<More />} />
          <Route path="/team" element={<Team />} />
          <Route path="/blog" element={<Blog />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routers