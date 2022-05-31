import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Components/Blog/Blog";
import Dashboard from "./Components/Dashboard/Dashboard";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import NotFound from "./Components/NotFound/NotFound";
import Reviews from "./Components/Reviews/Reviews";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path='/blog' element={<Blog/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
