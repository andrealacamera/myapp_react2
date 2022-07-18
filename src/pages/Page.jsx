// import React, { useContext } from 'react'
// import { Navigate } from "react-router-dom";
// import { UserContext } from '../components/UserContext';

import Counter from "../components/Counter"

const Page = () => {
  // const {user}= useContext(UserContext)
  // console.log(user)
  // if (!user) {
    // return <Navigate to="/" />;
  // }
  return (
    <div>      
      <h1 className='text-4xl m-8'>This is the `Protected` Page ;)</h1>
      <Counter />
    </div>
  )
}

export default Page