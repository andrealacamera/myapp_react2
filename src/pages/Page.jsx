// import React, { useContext } from 'react'
// import { Navigate } from "react-router-dom";
// import { UserContext } from '../components/UserContext';

const Page = () => {
  // const {user}= useContext(UserContext)
  // console.log(user)
  // if (!user) {
    // return <Navigate to="/" />;
  // }
  return (
    <div>      
      <h1 className='text-4xl m-8'>This is the `Protected` Page ;)</h1>
    </div>
  )
}

export default Page