import React from "react";
import SearchMov from "../component/searchMovHero/SearchMovHero";
import MovieResult from "../component/MovieResult/MovieResult";

function SearchMovie (){
    return(
        <>
            <SearchMov />
            <MovieResult />
        </>
    )
}


export default SearchMovie;