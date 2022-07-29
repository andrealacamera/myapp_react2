import { useState } from 'react';
import { useGetAllPlanetsQuery } from '../../redux/swSlice';

import Bar from './Bar';

const Planets = () => {

  const [page, setPage] = useState(1)
  const {data: planets, isLoading, isSuccess, isFetching} = useGetAllPlanetsQuery(page)


  return (
    <>
      {isLoading && <p className='text-xl text-red-500'>Loading the data... </p>  }
      {isSuccess && 
      <>
        <h1 className="text-4xl m-8">Star Wars Planets database</h1>
        <div className="m-4 flex flex-row flex-wrap gap-4">
        { planets.results.map( (planet) => (
          <article key={planet.name} className={`w-64 bg-gray-200 rounded-xl border border-gray-400 p-2 ${isFetching ? 'opacity-50' : ''}`}>
            <h2 className="text-2xl border-b border-b-gray-300 mb-1">{planet.name}</h2>
              <p>Population: {planet.population}</p>
              <p>Rotation period: {planet.rotation_period}</p>
              <p>Orbital period: {planet.orbital_period}</p>
              <p>Diameter: {planet.diameter}</p>
              <p>Climate: {planet.climate}</p>
              <p>Gravity: {planet.gravity}</p>
              <p>Terrain: {planet.terrain}</p>
              <p>Surface Water: {planet.surface_water}</p>
          </article>
          )) 
        }
        </div>
        <Bar data={planets} onPrev={() => setPage(page-1)} onNext={() => setPage(page+1)} /> 
      </>
      }
    </>
  )
}

export default Planets