import React, { useState, useEffect } from "react";
import {useNavigate} from'react-router-dom';

function TrendingTVLP() {
    const [trendingTV, setTrendingTV] = useState([]);
    const navigate = useNavigate();

    const tmdbUrl = 'https://api.themoviedb.org/3/trending/tv/week?api_key=b34e2c0b820e9f1b23a1ea5e8172fb88'
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetchTrendingTV();
    })

    const fetchTrendingTV = async () => {
        const data = await fetch(tmdbUrl);
        const tvs = await data.json();
        setTrendingTV(tvs.results);
    }

    return (
        <div className="w-11/12 mx-auto my-8">
            <h1 className=" my-8 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#269CE1] to-[#58D628] text-extrabold">Trending Movies of the Week</h1>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 auto-cols-fr gap-1 sm:gap-4 ">
                {trendingTV?.map((data) => (
                    <div className="relative hover:scale-105" key={data.id} onClick={()=>navigate(`/detail/${data.id}`)}>{/* box relative*/}
                        <div className="h-64 bg-cover bg-no-repeat bg-center rounded-xl" style={{ backgroundImage: `url(${baseUrl}${data.poster_path})` }}>{/* movie image */}
                            <div className="h-64 w-full rounded-xl bg-gradient-to-t from-black/75 to-black/50"></div>
                        </div>
                        <div className=" absolute bottom-3 w-40 text-slate-100">{/* movie title */}
                            <p className="w-11/12 mx-auto overflow-hidden text-lg">{data.original_name}</p>
                        </div>
                        <div className="absolute top-3 left-3"> {/* absolute top-0 left-0 score */}
                            <p className="bg-slate-100 w-8 h-8 rounded-full flex justify-center items-center">{data.vote_average}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TrendingTVLP;