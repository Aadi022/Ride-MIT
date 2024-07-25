import {useState } from "react";
import { useNavigate } from "react-router-dom";
import { Routes,Route } from "react-router-dom";
import Contact from "./Contact/Contact.jsx"
import Home from "./Home/Home.jsx";
import Sponsors from "./Sponsors/Sponsors.jsx";
import About from "./About/About.jsx";
import Schedule from "./Schedule/Schedule.jsx";

function App() {
    
    return(
        <Routes>
            <Route path="/About" element={<About></About>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Home" element={<Home></Home>}></Route>
            <Route path="/Sponsors" element={<Sponsors></Sponsors>}></Route>
            <Route path="/Schedule" element={<Schedule></Schedule>}></Route>
        </Routes>
    )
}

export default App
