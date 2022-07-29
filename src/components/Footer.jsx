// import { useGetAllPeopleQuery, useGetAllPlanetsQuery } from "../redux/swSlice";

const Footer = () => {
  const Y = new Date().getFullYear();
  // const {data: planets} = useGetAllPlanetsQuery()
  // const {data: people} = useGetAllPeopleQuery()

  return (
    <footer className='bg-gray-800 text-gray-200 w-full p-4 flex flex-row justify-between'>
      <span>
        Copyright &copy; {Y} | Andrea La Camera
      </span>
      <div >
        {/* { planets && <span>Planets ({planets.results.length})</span>} */}
        {/* { people && <span> | People ({people.results.length})</span>} */}
      </div>
    </footer>
  )
}

export default Footer