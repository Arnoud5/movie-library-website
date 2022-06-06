import React, { useState, useEffect } from "react";
import logo from "./logo.png"
import hamburger from "./hamburger.png";
import close from "./close.png";


function Navbar() {

    const handleHamburger = () => {
        console.log('Hamburger Clicked!');
        document.getElementById('popUpNav').style.display = "block";
    }
    const handleClose = () => {
        console.log("close clicked");
        document.getElementById('popUpNav').style.display = "none";
    }
    return (
        <div className="bg-sky-900 fixed w-full static">
            {/* hamburger */}
            <div className="w-11/12 mx-auto flex items-center justify-between py-4">
                <div className="">
                    <img src={logo} alt="filma logo" className="h-12 w-auto" />
                </div>
                <div className="text-xl text-slate-100 font-semibold">
                    <img src={hamburger} alt="phone-Hamburger" onClick={() => { handleHamburger() }} />
                    <a href="#" className="hidden">Home</a>
                    <a href="#" className="hidden">Movies</a>
                    <a href="#" className="hidden">TV Shows</a>
                </div>
            </div>
            {/* pop up navbar */}
            <div id="popUpNav" className="w-screen h-screen absolute bg-sky-900 top-0 left-0 hidden">
                <div className="w-full flex flex-col">
                    <div className="m-6 self-end" onClick={() => { handleClose() }}>
                        <img src={close} alt="close btn for navigation" />
                    </div>
                    <div className="flex flex-col justify-around text-xl min-h-[100vw] text-slate-100">
                        <a href="#" className="">Home</a>
                        <a href="#" className="">Movies</a>
                        <a href="#" className="">TV Shows</a>
                    </div>
                </div>
            </div>

        </div>
    );
}
// when hamburger clicked, => pop up display:block
// when close(pop-up) clicked => pop up display:hidden
export default Navbar;