import React from 'react'

const Bar = ({data, page, onPrev, onNext, onPage}) => {

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

  const handlePage = (p) => {
    // console.log(`GOTO PAGE ${p}`)
    onPage(p)
  }

  const numberOfPages = Math.ceil(data.count/10);
  const pageArray = Array(numberOfPages).fill().map( (x, index) => index+1);

  return (
    <div className='p-8 w-full flex justify-center'>
      <div className=' w-5/6 flex flex-row justify-between'>
        <button className={`bg-gray-700 text-gray-200 py-2 px-4 rounded ${data.previous ? '' : 'opacity-50 cursor-not-allowed'}`} onClick={handlePrev}>
          Prev
        </button>
        { pageArray.map( p => <button className={`py-2 px-4 rounded ${p===page ? 'border border-gray-700': 'border-0'}`} onClick={() => handlePage(p)}>{p}</button>)}
        <button className={`bg-gray-700 text-gray-200 py-2 px-4 rounded ${data.next ? '' : 'opacity-50 cursor-not-allowed'}`} onClick={handleNext}>
          Next
        </button>
      </div>
      
    </div>
  )
}

export default Bar