import { useState } from 'react';
import { useGetAllPeopleQuery } from '../../redux/swSlice'
import Bar from './Bar';


const People = () => {

  const [page, setPage] = useState(1)
  const {data: people, isLoading, isSuccess, isFetching} = useGetAllPeopleQuery(page)

  return (
    <>
      {isLoading && <p className='text-xl text-red-500'>Loading the data... </p>  }
      {isSuccess && 
      <>
        <h1 className="text-4xl m-8">Star Wars People database</h1>
        <h2 className='textx-xl mx-8 my-2'>People available: {people.count}</h2>
        <div className="m-4 flex flex-row flex-wrap gap-4">
        { people.results.map( (p) => (
          <article key={p.name} className={`w-64 bg-gray-200 rounded-xl border border-gray-400 p-2 ${isFetching ? 'opacity-50' : ''}`}>
            <h2 className="text-2xl border-b border-b-gray-300 mb-1">{p.name}</h2>
              <p>Birth year: {p.birth_year}</p>
              <p>Height: {p.height}</p>
              <p>Weight: {p.mass}</p>
              <p>Homeworld: {p.homeworld}</p>
          </article>
          )) 
        }
        </div>
        <Bar data={people} page={page} onPrev={() => setPage(page-1)} onNext={() => setPage(page+1)} onPage={(p) => setPage(p)}/> 

      </>
      }
    </>
  )
}

export default People