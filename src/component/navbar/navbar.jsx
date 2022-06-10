import React, { useState, useEffect } from "react";
import logo from "./logo.png"
import hamburger from "./hamburger.png";
import close from "./close.png";
import { useNavigate } from "react-router-dom";

function Navbar() {
    let navigate = useNavigate();
    let [open, setOpen] = useState(false);

    useEffect(() => {
        if (open) {
            console.log('Hamburger Clicked!');
            document.getElementById('popUpNav').style.display = "block";
        } else {
            console.log("close clicked");
            document.getElementById('popUpNav').style.display = "none";
        }
    }, [open]);


    return (
        <div className="bg-sky-900 fixed w-full fixed z-10">
            {/* hamburger */}
            <div className="w-11/12 max-w-screen-lg mx-auto flex items-center justify-between py-4">
                <div className="">
                    <img src={logo} alt="filma logo" className="h-6 w-auto" />
                </div>
                <div className="text-sm text-slate-100 font-semibold sm:flex">
                    <img className="sm:hidden h-4" src={hamburger} alt="phone-Hamburger" onClick={() => { setOpen(true) }} />
                    <button onClick={() => { navigate('/') }} className="hidden sm:block">Home</button>
                    <button onClick={() => { navigate('/movies') }} className="hidden sm:block sm:mx-24">Movies</button>
                    <button onClick={() => { navigate('/tvs') }} className="hidden sm:block">TV Shows</button>
                    <button onClick={() => { navigate('/search') }} className="hidden sm:block sm:ml-24">Search</button>
                </div>
            </div>
            {/* pop up navbar */}
            <div id="popUpNav" className="w-screen h-screen absolute bg-sky-900 top-0 left-0 hidden">
                <div className="w-full flex flex-col">
                    <div className="m-6 self-end" onClick={() => { setOpen(false) }}>
                        <img src={close} alt="close btn for navigation" />
                    </div>
                    <div className="flex flex-col justify-around items-center text-xl min-h-[100vw] text-slate-100">
                        <button onClick={() => { navigate('/'); setOpen(false) }} className="">Home</button>
                        <button onClick={() => { navigate('/movies'); setOpen(false) }} className="">Movies</button>
                        <button onClick={() => { navigate('/tvs'); setOpen(false) }} className="">TV Shows</button>
                        <button onClick={() => { navigate('/search'); setOpen(false) }} className="">Search Movies/Tvs</button>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Navbar;