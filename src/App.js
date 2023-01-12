import { BrowserRouter, Routes, Route , HashRouter } from "react-router-dom";
import About from "./pages/about/about";
import Contactus from "./pages/contactus/contactus";
import CustomPackage from "./pages/customPackage/customPackage";
import Home from "./pages/home/home";
import Works from "./pages/works/works";

function App() {
  return (
    <div className="App">
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/ourworks" element={<Works />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/contactus" element={<Contactus />}/>
        <Route path="/custompackage" element={<CustomPackage />}/>
        </Routes>
        </HashRouter>
    </div>
  );
}

export default App;
