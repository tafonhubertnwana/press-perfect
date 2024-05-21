import Contact from "../../Pages/Contacts/Components/Contact"
import PageLayout from "../../Pages/PageLayout"
import{Route, Routes} from "react-router-dom"
import Testimonial from "../../Pages/Testimonials/Components/Testimonial"

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />} >
          <Route index path="" element={<Contact />} />
          <Route path="/testimonials" element={<Testimonial />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routers