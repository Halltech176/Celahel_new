import "./App.scss";
import Footer from "./routes/Footer/footer.component";
import Navbar from "./routes/Nav/Navbar.component";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
