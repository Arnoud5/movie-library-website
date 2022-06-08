import React,{useEffect,useState} from 'react'
import Arrow from './backarrow.png'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detail() {
    const { idDetail } = useParams();
    const [details,setDetails] = useState([]);
    const navigate = useNavigate();

    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    const getData = async (idDetail) =>{
        const data = await fetch(`https://api.themoviedb.org/3/movie/${idDetail}?api_key=b34e2c0b820e9f1b23a1ea5e8172fb88&language=en-US`)
        const detail = await data.json();
        setDetails(detail)
        
    }   
    
    useEffect(() => {
        getData(idDetail)
    }, [idDetail])

    return (
        <div className='pt-14 w-11/12 mx-auto'>
            <div className='flex flex-col'>
                <button className='flex items-center' onClick={()=>navigate(-1)}>
                    <img src={Arrow} alt="" />
                    <p className='ml-2 text-lg'>Back</p>
                </button>
                <div>
                    <div className="mx-auto my-4 h-80 w-52 aspect-auto bg-cover bg-no-repeat bg-center rounded-xl" style={{ backgroundImage: `url(${baseUrl}${details.poster_path})` }}>{/* movie image */}</div>
                </div>
                <div>
                    {details.original_title}
                </div>
                <div>
                    {details.vote_average}
                </div>
                <div>
                    Description
                </div>
                <p>
                {details.overview}
                </p>
            </div>
        </div>
    )
}
