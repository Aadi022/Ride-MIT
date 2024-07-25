import { useNavigate } from "react-router-dom";
import {React, useState} from "react";
import "../Home/Home.css"

function Home(){
    const navigate= useNavigate();
    const handleAbout= function handleAbout(){
        navigate("/About");
    }

    const handleSponsors= function handleSpeakers(){
        navigate("/Sponsors");
    }

    const handleContact= function handleContact(){
        navigate("/Contact");
    }

    const handlebutton1= function handlebutton1(){
        navigate("/Schedule");
    }

    const handlebutton2= function handlebutton2(){
        const mylink="https://www.youtube.com/live/zwYDjRQGdOA";
        window.location.href= mylink;
    }

    return(
        <>
        <div className="main">
            <button className="mybutton">Home</button>
            <button onClick={handleAbout} className="mybutton">About</button>
            <button onClick={handleSponsors} className="mybutton">Sponsors</button>
            <button onClick={handleContact} className="mybutton">Contact</button>
        </div>
        <footer>
            <div className="footer-content">
                <h1>Program Flow</h1> 
                <h1>Watch Live</h1>
            </div>
            <div className="lower-content">
                <h3>Check out our Program Flow for RIDE 2023!</h3>
                <h3>Catch our live feed to RIDE 2023!</h3>
            </div>
            <button className="button-1" onClick={handlebutton1}>View now</button>
            <button className="button-2" onClick={handlebutton2}>Watch now</button>
        </footer>
        </>
    )
}

export default Home;