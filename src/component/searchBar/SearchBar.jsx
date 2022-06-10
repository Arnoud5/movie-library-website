import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

export default function SearchBar() {
    const [data, setData] = useState('');
    const [searchParam, setSearchParam] = useSearchParams();

    let currentUri = window.location.href;
    const searchParams = new URLSearchParams(currentUri)
    let search = searchParams.get('search')
    
    console.log(search)

    function searchRequest() {
        console.log();
        console.log('oke')
    }

    return (
        <div>
            <div className="w-11/12 h-full mx-auto flex flex-col justify-center relative pt-24 pb-14">
                <form onSubmit={() => setSearchParam()} className="flex items-center w-full">
                    <input type="text" name="search " className="lg:text-xl lg:p-4 bg-slate-100 w-full rounded-l-full px-4 py-2 focus:outline-0 truncate" placeholder="Search movies, tv show, person and else" />
                    <div className="bg-slate-100 p-1 lg:p-1 rounded-r-full">
                        <input type="submit" 
                        value="Search" 
                        className=" rounded-full bg-gradient-to-r from-[#269CE1] to-[#58D628] text-slate-100 font-bold p-1 lg:p-3 hover:scale-110 lg:text-xl" />
                    </div>
                </form>
            </div>

            {/* Search Result */}
            <div className="w-11/12 mx-auto my-8">
                <h1 className=" my-8 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#269CE1] to-[#58D628] text-extrabold">You Search: Fantastic beast</h1>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 auto-cols-fr gap-1 sm:gap-4 ">
                    <div className="relative">{/* box relative*/}
                        <div className="h-64 bg-cover bg-no-repeat bg-center rounded-xl" style={{ backgroundImage: `url()` }}>{/* movie image */}
                            <div className="h-64 w-full rounded-xl bg-gradient-to-t from-black/75 to-black/50"></div>
                        </div>
                        <div className=" absolute bottom-3 w-40 text-slate-100">{/* movie title */}
                            <p className="w-11/12 mx-auto overflow-hidden text-lg">Harry Potter and the goblet of fire awdadawdwadawdawdwdwd w</p>
                        </div>
                        <div className="absolute top-3 left-3"> {/* absolute top-0 left-0 score */}
                            <p className="bg-slate-100 w-8 h-8 rounded-full flex justify-center items-center">7.8</p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    )
}
