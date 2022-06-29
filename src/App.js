import "./App.scss";
import { Routes, Route, useLocation, useParams, Link } from "react-router-dom";
import Footer from "./components/Common/Footer/Footer";
import Navbar from "./components/Common/Navbar/Navbar";
import Sidebar from "./components/Common/Sidebar/Sidebar";
import Home from "./components/pages/Home/Home";
import About from "./components/pages/About/About";
import Profile from "./components/pages/Profile/Profile";
import Contact from "./components/forms/Contact/Contact"
import Signin from "./components/forms/Signin/Signin"
import Login from "./components/forms/Login/Login"
import Faq  from "./components/forms/Faq/Faq"
import MakePayment from "./components/routes/Payment/MakePayment"

import NoMatch from "./components/routes/NoMatch";

import {ContextProvider} from './Context/UserContext'
// import MakePayment from "./components/routes/Payment/MakePayment";

function App() {
  const location = useLocation()
  const params = useParams()
  // console.log(location);
  // console.log(params);
  return (
   <>
   <ContextProvider>
   <Navbar />
   {/* <Link to ="/about">About</Link>
   <Link to ="/contact">Contact</Link> */}
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/sidebar' element={<Sidebar/>}/>
        <Route path='/faqs' element={<Faq/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/profile' element={<Profile/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/make_payment' element={<MakePayment/>}/>
      </Routes>
     <Footer/>
     </ContextProvider>
     </>
  );
}

export default App;
