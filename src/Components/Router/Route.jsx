import Contact from "../../Pages/Contacts/Components/Contact"
import PageLayout from "../../Pages/PageLayout"
import{Route, Routes} from "react-router-dom"

const Routers = () => {
  return (
    <div>
      <Routes>
        <Route element={<PageLayout />} >
          <Route index path="" element={<Contact />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Routers