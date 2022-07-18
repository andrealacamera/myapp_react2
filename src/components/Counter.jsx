import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'

const Counter = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className='flex flex-col bg-blue-300 w-full items-center'>
      <h1 className='text-4xl'> Counter </h1>
      <h2 className='text-2xl'> Value: {count}</h2>
      <div className='flex flex-row justify-around'>
        <button className="bg-blue-900 text-blue-200 py-4 px-8 border border-blue-300 rounded-xl text-4xl" onClick={() => dispatch(decrement())}>-</button>
        <button className="bg-blue-900 text-blue-200 py-4 px-8 border border-blue-300 rounded-xl text-4xl" onClick={() => dispatch(increment())}>+</button>
      </div>
    </div>
  )
}

export default Counter