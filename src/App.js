
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Menus from "./pages/Menus";
import PageNotFound from "./pages/PageNotFound";
function App() {
  return ( 
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contacts/>}/>
        <Route path="/menu" element={<Menus/>}/>
        <Route path="*" element={<PageNotFound/>}/> 
        {/* //Page not found must be add at the last   */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
