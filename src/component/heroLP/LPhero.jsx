import React from "react";
import heroBg from "./herobg.jpg";


function LPhero() {

    return (
        <div className="pt-14">
            <div className="w-full h-[calc(100vh-56px)] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${heroBg})` }}>
                <div className="w-full h-[calc(100vh-56px)] bg-gradient-to-t from-black/75 to-black/50">
                    <div className="w-11/12 h-full mx-auto flex flex-col justify-center relative">
                        <h1 className="text-left mb-6 text-3xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-[#269CE1] to-[#58D628]">Tons of movies, discover now.</h1>
                        <form action="/search" className="flex items-center w-full">
                            <input name="searchQuery" type="text" className="lg:text-xl lg:p-4 bg-slate-100 w-full rounded-l-full px-4 py-2 focus:outline-0 truncate" placeholder="Search movies, tv show, person and else" />
                            <div className="bg-slate-100 p-1 lg:p-1 rounded-r-full">
                                <input type="submit" value={'search'} className=" rounded-full bg-gradient-to-r from-[#269CE1] to-[#58D628] text-slate-100 font-bold p-1 lg:p-3 hover:scale-110 lg:text-xl" />
                            </div>
                        </form>
                        <div className="text-slate-400 absolute bottom-1 right-4 text-xs">
                            <a href='https://www.freepik.com/photos/happy-eating'>Happy eating photo created by Drazen Zigic - www.freepik.com</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LPhero;