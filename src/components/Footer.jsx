import React from 'react'

const Footer = () => {
  const Y = new Date().getFullYear();
  return (
    <footer className='bg-gray-800 text-gray-200 fixed bottom-0 left-0 w-full  p-4'>
      Copyright &copy; {Y} | Andrea La Camera
    </footer>
  )
}

export default Footer