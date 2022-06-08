import React from 'react'

export default function SearchBar() {
    return (
        <div className="w-11/12 h-full mx-auto flex flex-col justify-center relative pt-24 pb-14">
            <form action="" className="flex items-center w-full">
                <input type="text" className="lg:text-xl lg:p-4 bg-slate-100 w-full rounded-l-full px-4 py-2 focus:outline-0 truncate" placeholder="Search movies, tv show, person and else" />
                <div className="bg-slate-100 p-1 lg:p-1 rounded-r-full">
                    <input type="submit" value={'search'} className=" rounded-full bg-gradient-to-r from-[#269CE1] to-[#58D628] text-slate-100 font-bold p-1 lg:p-3 hover:scale-110 lg:text-xl" />
                </div>
            </form>
        </div>
    )
}
