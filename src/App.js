import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./routes/Footer/footer.component";
import Navbar from "./routes/Nav/Navbar.component";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import MakePayment from "./routes/Payment/MakePayment";
import SideBar from './routes/Nav/sideBar/SideNav.component';
import Plan from "./components/Account_plan/Plan.component";
import OTPVerify from "./components/OTP/OTPVerify";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        <Route path="make_payment" element={<MakePayment />}></Route>
        <Route path='dashboard' element={<SideBar/>}></Route>
        <Route path='plans' element={<Plan/>}></Route>
        <Route path='input_OTP' element={<OTPVerify/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
