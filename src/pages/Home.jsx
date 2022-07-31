import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='m-8'>
      <h1 className='text-4xl'>Welcome to the Home page</h1>
      <article className='my-16 bg-gray-100 p-4'>
        <p className=''> Here you can find: </p>
        <ul className='list-disc list-inside'>
          <li><Link to="/page">Page</Link> - Counter component storing value on Redux store</li>
          <li><Link to="/starwars">Star Wars</Link> - Data fetched from <Link to="https://swapi.dev" target="_blank">swapi.dev</Link> API.</li>
          <li><Link to="/todos">Todos</Link> - CRUD example for json-server local API.</li>
        </ul>
        <p className='my-4'>More info on the README of the project.</p>
      </article>
    </div>
  )
}

export default Home