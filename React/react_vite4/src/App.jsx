import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarBs from "./components/bootstrap/NavbarBs";
import Main from "./pages/Main";
import About from "./pages/About";
import Travels from "./pages/Travels";
import TravelsForm from "./pages/TravelsForm";

function App() {
  return (
    <Router>
      <NavbarBs />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<About />} />
        <Route path="/travels" element={<Travels />} />
        <Route path="/travelsForm" element={<TravelsForm />} />
      </Routes>
    </Router>
  );
}

export default App;
