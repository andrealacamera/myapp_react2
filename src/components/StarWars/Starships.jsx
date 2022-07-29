import { useState } from 'react';
import {  useGetAllStarshipsQuery } from '../../redux/swSlice';
import Bar from './Bar';

const Starships = () => {

  const [page, setPage] = useState(1)
  const {data: starships, isLoading, isSuccess, isFetching} = useGetAllStarshipsQuery(page)


  return (
    <>
      {isLoading && <p className='text-xl text-red-500'>Loading the data... </p>  }
      {isSuccess && 
      <>
        <h1 className="text-4xl m-8">Star Wars Starships database</h1>
        <div className="m-4 flex flex-row flex-wrap gap-4">
        { starships.results.map( (starship) => (
          <article key={starship.name} className={`w-64 bg-gray-200 rounded-xl border border-gray-400 p-2 ${isFetching ? 'opacity-50' : ''} `}>
            <h2 className="text-2xl border-b border-b-gray-300 mb-1">{starship.name}</h2>
              <p>Model: {starship.model}</p>
              <p>Class: {starship.starship_class}</p>
              <p>Manufacturer: {starship.manufacturer}</p>
              <p>Cost (credits): {starship.cost_in_credits}</p>
              <p>Length {starship.length}</p> 
              <p>Crew {starship.crew}</p>
              <p>Passengers {starship.passengers}</p>
          </article>
          )) 
        }
        </div>
        <Bar data={starships} onPrev={() => setPage(page-1)} onNext={() => setPage(page+1)} /> 

      </>
      }
    </>
  )
}

export default Starships