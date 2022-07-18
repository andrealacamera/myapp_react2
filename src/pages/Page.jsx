// import React, { useContext } from 'react'
// import { Navigate } from "react-router-dom";
// import { UserContext } from '../components/UserContext';


import Counter from "../components/Counter"
import { useSelector } from "react-redux"

const Page = () => {

  const count = useSelector((state) => state.counter.value)

  return (
    <div className="m-8">      
      <h1 className='text-4xl'>This is the `Protected` Page ;)</h1>
      <h2 className="text-6xl text-blue-500 my-16">Count: {count}</h2>
      <Counter />
      <p className="mt-8 italic"> The value of the count ({count}) is updated in this page, while the two buttons are placed within the component "Counter" (in blue). The Redux store keeps updated every component.</p>
    </div>
  )
}

export default Page