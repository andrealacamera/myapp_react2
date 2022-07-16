
import { createRef } from 'react'
import { UserContext } from '../components/UserContext'

const Login = () => {
  const input = createRef()
  return (
    <>
      <div className='m-8'>
        <h1 className='text-4xl'>Login page</h1>
        <UserContext.Consumer>
          { ({user, login, logout}) => (
            <>
            { user ? 
              <>
                <div className="font-bold text-xl mt-8">Welcome {user}</div> 
                <button className='bg-gray-800 text-gray-200 rounded py-4 px-8' onClick={logout}>Logout</button>
              </>
              : 
              <section className='my-8'>
                <p>This is a fake login page. </p>
                <div className='mt-8 flex flex-col gap-4'>
                  <label htmlFor='username'>Username: 
                    <input className="border h-12 rounded w-full" type="text" name="username" ref={input} />
                  </label>
                  <button className='bg-gray-800 text-gray-200 rounded py-4 px-8' onClick={()=>login(input.current.value)}>
                      Login
                  </button>
                </div>
              </section>
            }
           </>
          )}
        </UserContext.Consumer>
      </div>
    </>
  )    
}

export default Login