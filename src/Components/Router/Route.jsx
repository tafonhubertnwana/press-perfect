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

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />} >
          <Route index path="/" element={<Home />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/more" element={<More />} />
          <Route path="/team" element={<Team />} />
          <Route path="/faq" element={<Faq />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routers