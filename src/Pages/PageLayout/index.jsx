import { Outlet } from "react-router-dom";
import Head from "../../Components/Header/Head";
import Footer from "../../Components/Footer/Footer";



const PageLayout = () => {
  return (
    <div>
      <Head />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PageLayout;