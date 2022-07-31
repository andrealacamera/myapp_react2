import React from 'react'
import { Link } from "react-router-dom";

import logo from '../logo.svg';

const Header = () => {
  return (
    <header className='flex flex-row justify-between items-center bg-gray-800 text-gray-200'>
      <Link to='/' className='flex flex-row items-center'>
        <img src={logo} alt="logo" width={180} height={180}/>
        <h1 className='text-3xl text-cyan-50'>myapp_react2</h1>
      </Link>
      <nav>
        <ul className='px-8 flex flex-row gap-4'>
          <li><Link to='/'>Home</Link></li>
          {/* <li><Link to='/login'>Login</Link></li> */}
          <li><Link to='/page' >Page</Link></li>
          <li><Link to='/starwars' >Star Wars</Link></li>
          <li><Link to='/todos' >Todos</Link></li>
        </ul>
      </nav>
      
    </header>
  )
}

export default Header