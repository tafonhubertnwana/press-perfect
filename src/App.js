import React from 'react'
import Routers from './Components/Router/Route'
// import { Helmet } from'react-helmet';
// import { MdOutlineLocalLaundryService } from "react-icons/md"


const App = () => {
  return (
    <React.Fragment>
      {/* <Helmet>
      <MdOutlineLocalLaundryService />
        <title>PressPerfect</title>
      </Helmet> */}
      <div>
        <Routers />
      </div>
    </React.Fragment>
  )
}

export default App