import React from "react";
import { useNavigate } from "react-router-dom";
import bg2 from "../assets/images/bg2.jpg";

function Home(){
    const navigate=useNavigate();

    const proceedPortfolio=()=>{ 
        navigate('/portfolio');
    }; 
    return(
        <div
          className="d-flex justify-content-center align-items-center vh-100"
          style={{
            backgroundImage: `url(${bg2})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundAttachment: "fixed"
          }}
        >
        </div>
    )
}

export default Home;