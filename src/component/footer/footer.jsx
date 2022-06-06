import React from "react";
import Logo from "./logo.png"

function Footer (){
    return(
        <div className="bg-sky-900 h-20 w-screen flex justify-center items-center">
            <img src={Logo} alt="" className="h-12 w-auto"/>
        </div>
    );
}

export default Footer;