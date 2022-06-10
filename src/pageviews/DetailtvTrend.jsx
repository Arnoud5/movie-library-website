import React, { useEffect, useState } from 'react'
import Arrow from './backarrow.png'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
    const { idTvDetail } = useParams();
    const [tvDetails, setTvDetails] = useState([]);
    const navigate = useNavigate();

    const tmdbUrltv = `https://api.themoviedb.org/3/tv/${idTvDetail}?api_key=b34e2c0b820e9f1b23a1ea5e8172fb88&language=en-US`;
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    const getData = async () => {
        const data = await fetch(tmdbUrltv);
        const detail = await data.json();
        setTvDetails(detail)
    }

    useEffect(() => {
        getData(idTvDetail)
    }, [idTvDetail]);
    console.log(tvDetails)

    return (
        <div className='pt-14 w-11/12 mx-auto'>
            <div className='flex flex-col'>
                <button className='flex items-center' onClick={() => navigate(-1)}>
                    <img src={Arrow} alt="" />
                    <p className='ml-2 text-lg'>Back</p>
                </button>
                <div>
                    <div>
                        <div className="mx-auto my-4 h-80 w-52 aspect-auto bg-cover bg-no-repeat bg-center rounded-xl" style={{ backgroundImage: `url(${baseUrl}${tvDetails.poster_path})` }}>{/* movie image */}</div>
                    </div>
                    <div>
                        {tvDetails.original_name}
                    </div>
                    <div>
                        {tvDetails.vote_average}
                    </div>
                    <div>
                        Description
                    </div>
                    <p>
                        {tvDetails.overview}
                    </p>
                </div>
            </div>
        </div>
    )
}
