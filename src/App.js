import "./App.scss";
import { Routes, Route } from "react-router-dom";
import Footer from "./routes/Footer/footer.component";
import Navbar from "./routes/Nav/Navbar.component";
import Home from "./components/Home/Home";
import About from "./components/About/About";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
        <Route path="about" element={<About />}></Route>
        {/* <Route index element={<Home />}></Route> */}
      </Route>
    </Routes>
  );
}

export default App;
