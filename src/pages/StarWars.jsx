import {useState} from 'react';
import Planets from "../components/StarWars/Planets";
import People from '../components/StarWars/People';
import Starships from '../components/StarWars/Starships';
import Vehicles from '../components/StarWars/Vehicles';


const StarWars = () => {

  const [selection, setSelection] = useState(0)

  return (
    <>
      <nav className=' bg-gray-200 w-full p-2'>
        <ul className="flex flex-row justify-around">
          <li>
            <button className="text-2xl border border-gray-800 py-2 px-4 rounded" onClick={() => setSelection(0)}>
              Planets
            </button>
          </li>
          <li>
            <button className="text-2xl border border-gray-800 py-2 px-4 rounded" onClick={() => setSelection(1)}>
              People
            </button>
          </li>
          <li>
            <button className="text-2xl border border-gray-800 py-2 px-4 rounded" onClick={() => setSelection(2)}>
              Starships
            </button>
          </li>
          <li>
            <button className="text-2xl border border-gray-800 py-2 px-4 rounded" onClick={() => setSelection(3)}>
              Vehicles
            </button>
          </li>
        </ul>

      </nav>
      <article className='mt-4'>
        { selection === 0 && <Planets /> }
        { selection === 1 && <People /> }
        { selection === 2 && <Starships /> }
        { selection === 3 && <Vehicles /> }
        { selection === 4 && <p>page</p> }

      </article>
    </>
  )
}

export default StarWars