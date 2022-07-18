import { useDispatch } from 'react-redux'
import { decrement, increment } from '../redux/counterSlice'
import {BsDashLg, BsPlusLg} from 'react-icons/bs'
const Counter = () => {
  // const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
      <div className='bg-blue-300 px-16 rounded-xl inline-block'>
        <h1 className='text-4xl text-center'> Counter </h1>
        {/* <h2 className='text-2xl'> Value: {count}</h2> */}
        <div className='flex flex-row justify-around gap-4'>
          <button className="bg-blue-900 text-blue-200 py-4 px-8 border border-blue-300 rounded-xl text-2xl" onClick={() => dispatch(decrement())}>
            <BsDashLg />
          </button>
          <button className="bg-blue-900 text-blue-200 py-4 px-8 border border-blue-300 rounded-xl text-2xl" onClick={() => dispatch(increment())}>
            <BsPlusLg />
          </button>
        </div>
      </div>
  )
}

export default Counter