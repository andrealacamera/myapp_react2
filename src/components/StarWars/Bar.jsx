import React from 'react'

const Bar = ({data, onPrev, onNext}) => {

  const handlePrev = () => {
    if (data.previous) {
      onPrev()
    }
  }
  const handleNext = () => {
    if (data.next) {
      onNext()
    }
  }

  return (
    <div className='p-8 w-full'>
      <div className=' w-full flex flex-row justify-around'>
        <button className={`bg-gray-700 text-gray-200 py-2 px-4 rounded ${data.previous ? '' : 'opacity-50 cursor-not-allowed'}`} onClick={handlePrev}>
          Prev
        </button>
        <button className={`bg-gray-700 text-gray-200 py-2 px-4 rounded ${data.next ? '' : 'opacity-50 cursor-not-allowed'}`} onClick={handleNext}>
          Next
        </button>
      </div>
      
    </div>
  )
}

export default Bar