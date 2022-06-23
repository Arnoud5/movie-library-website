import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SearchPage() {
  const [query, setQuery] = useState('');
  const [data, setData] = useState([]);

  const navigate = useNavigate();
  const baseUrl = 'https://image.tmdb.org/t/p/w500';

  useEffect(() => {
    getData();
  }, [query]);

  function updateSearch() {
    let search = document.querySelector('#querySearch').value;
    setQuery(search);
  }

  let searchApi = `https://api.themoviedb.org/3/search/multi?api_key=b34e2c0b820e9f1b23a1ea5e8172fb88&language=en-US&query=${query}&page=1&include_adult=false`;

  const getData = async () => {
    const fetchTheData = await fetch(searchApi);
    const dataToJson = await fetchTheData.json();
    setData(dataToJson.results);
  }
  console.log(data)
  // make a consuming api to search

  return (
    <div>
      <div className="w-11/12 h-full mx-auto flex flex-col justify-center relative pt-24 pb-14">
        <h2 className='my-8 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#269CE1] to-[#58D628] text-extrabold'>Search what you want to know, get the result instantly</h2>
        <form onChange={() => updateSearch()} className="flex items-center w-full">
          <input id="querySearch" type="text" name="search " className="lg:text-xl lg:p-4 bg-slate-100 w-full rounded-full px-4 py-2 focus:outline-0 truncate" placeholder="Search movies, tv show, person and else" />
          {/* <div className="bg-slate-100 p-1 lg:p-1 rounded-r-full">
            <input type="button"
              onClick={() => updateSearch()}
              value="Search"
              className=" rounded-full bg-gradient-to-r from-[#269CE1] to-[#58D628] text-slate-100 font-bold p-1 lg:p-3 hover:scale-110 lg:text-xl" />
          </div> */}
        </form>
      </div>

      {/* Search Result */}
      <div className="w-11/12 mx-auto my-8 min-h-[calc(100vh-442px)]">
        <h3 className=" my-8 text-3xl text-transparent bg-clip-text bg-gradient-to-r from-[#269CE1] to-[#58D628] text-extrabold">You Search: {query}</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 auto-cols-fr gap-1 sm:gap-4 ">
          {
            data?.map((data) => {
              switch(data.media_type){
                case 'movie':
                  return (
                    <div className="relative hover:scale-105" key={data.id} onClick={() => navigate(`/detail/${data.id}`)}>{/* box relative*/}
                      <div className="h-64 bg-cover bg-no-repeat bg-center rounded-xl" style={{ backgroundImage: `url(${baseUrl}${data.poster_path})` }}>{/* movie image */}
                        <div className="h-64 w-full rounded-xl bg-gradient-to-t from-black/75 to-black/50"></div>
                      </div>
                      <div className=" absolute bottom-3 w-40 text-slate-100">{/* movie title */}
                        <p className="w-11/12 mx-auto overflow-hidden text-lg">{data.title}</p>
                      </div>
                      <div className="absolute top-3 left-3"> {/* absolute top-0 left-0 score */}
                        <p className="bg-slate-100 w-8 h-8 rounded-full flex justify-center items-center">{data.vote_average}</p>
                      </div>
                    </div>
                  );
                  break;
                case 'tv':
                  return (
                    <div className="relative hover:scale-105" key={data.id} onClick={() => navigate(`/detailtv/${data.id}`)}>{/* box relative*/}
                      <div className="h-64 bg-cover bg-no-repeat bg-center rounded-xl" style={{ backgroundImage: `url(${baseUrl}${data.poster_path})` }}>{/* movie image */}
                        <div className="h-64 w-full rounded-xl bg-gradient-to-t from-black/75 to-black/50"></div>
                      </div>
                      <div className=" absolute bottom-3 w-40 text-slate-100">{/* tv title */}
                        <p className="w-11/12 mx-auto overflow-hidden text-lg">{data.name}</p>
                      </div>
                      <div className="absolute top-3 left-3"> {/* absolute top-0 left-0 score */}
                        <p className="bg-slate-100 w-8 h-8 rounded-full flex justify-center items-center">{data.vote_average}</p>
                      </div>
                    </div>
                  );
                  break;
                case 'person':
                  return (
                    <div className="relative hover:scale-105" key={data.id} onClick={() => navigate(`/detailPerson/${data.id}`)}>{/* box relative*/}
                      <div className="h-64 bg-cover bg-no-repeat bg-center rounded-xl" style={{ backgroundImage: `url(${baseUrl}${data.poster_path})` }}>{/* movie image */}
                        <div className="h-64 w-full rounded-xl bg-gradient-to-t from-black/75 to-black/50"></div>
                      </div>
                      <div className=" absolute bottom-3 w-40 text-slate-100">{/* tv title */}
                        <p className="w-11/12 mx-auto overflow-hidden text-lg">{data.name}</p>
                      </div>
                    </div>
                  );
                  break;
                default:
                  return (
                    <h1>We cant find anything!</h1>
                  )
                  break;
              }
            })
          }
        </div>
      </div>
    </div >
  )
}