import React, { useEffect, useState } from 'react'
import Arrow from './backarrow.png'
import { useNavigate, useParams } from 'react-router-dom'

export default function DetailPerson() {
    const { idPerson } = useParams();
    const [personDetail, setPersonDetails] = useState([]);
    const navigate = useNavigate();

    const tmdbUrltv = `https://api.themoviedb.org/3/person/${idPerson}?api_key=b34e2c0b820e9f1b23a1ea5e8172fb88&language=en-US`;
    const baseUrl = 'https://image.tmdb.org/t/p/w500';

    const getData = async () => {
        const data = await fetch(tmdbUrltv);
        const detail = await data.json();
        setPersonDetails(detail)
    }

    useEffect(() => {
        getData(idPerson)
    }, [idPerson]);
    console.log(personDetail)

    console.log(personDetail)

    return (
        <div className='pt-14 w-11/12 mx-auto min-h-[calc(100vh-80px)]'>
            <div className='flex flex-col'>
                <button className='flex items-center' onClick={() => navigate(-1)}>
                    <img src={Arrow} alt="" />
                    <p className='ml-2 text-lg'>Back</p>
                </button>
                <div>
                    <div>
                        Name: {personDetail.name}
                    </div>
                    <div>
                        Popularity: {personDetail.popularity}
                    </div>
                </div>
            </div>
        </div>
    )
}
