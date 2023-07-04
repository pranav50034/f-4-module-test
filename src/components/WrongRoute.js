import React from "react";
import { useNavigate } from "react-router-dom";

const WrongRoute = () => {
   const navigate = useNavigate();
   console.log("hello")
   return (
      <div className="lost">
         <h1>Wandering here n there without parents isn't good!!!</h1>
         <button
            className="backButton"
            onClick={() => {
               navigate("/");
            }}
         >
            Get back home ASAP!!!
         </button>
      </div>
   );
};

export default WrongRoute;
