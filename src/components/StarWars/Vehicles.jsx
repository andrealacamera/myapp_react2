import { useState } from 'react';
import { useGetAllVehiclesQuery } from '../../redux/swSlice'
import Bar from './Bar';

const Vehicles = () => {

  const [page, setPage] = useState(1)
  const {data: vehicles, isLoading, isSuccess, isFetching} = useGetAllVehiclesQuery(page)


  return (
    <>
      {isLoading && <p className='text-xl text-red-500'>Loading the data... </p>  }
      {isSuccess && 
      <>
        <h1 className="text-4xl m-8">Star Wars Vehicles database</h1>
        <h2 className='textx-xl mx-8 my-2'>Vehicles available: {vehicles.count}</h2>
        <div className="m-4 flex flex-row flex-wrap gap-4">
        { vehicles.results.map( (vehicle) => (
          <article key={vehicle.name} className={`w-64 bg-gray-200 rounded-xl border border-gray-400 p-2 ${isFetching ? 'opacity-50' : ''} `}>
            <h2 className="text-2xl border-b border-b-gray-300 mb-1">{vehicle.name}</h2>
              <p>Model: {vehicle.model}</p>
              <p>Class: {vehicle.vehicle_class}</p>
              <p>Manufacturer: {vehicle.manufacturer}</p>
              <p>Cost (credits): {vehicle.cost_in_credits}</p>
              <p>Crew {vehicle.crew}</p>
              <p>Passengers {vehicle.passengers}</p>
              <p>Cargo capacity {vehicle.cargo_capacity}</p> 
          </article>
          )) 
        }
        </div>
        <Bar data={vehicles} page={page} onPrev={() => setPage(page-1)} onNext={() => setPage(page+1)} onPage={(p) => setPage(p)}/> 

      </>
      }
    </>
  )
}

export default Vehicles