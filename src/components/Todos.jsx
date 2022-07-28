import { useState } from 'react'
import { useAddTodoMutation, useDeleteTodoMutation, useGetAllTodosQuery, useUpdateTodoMutation } from '../redux/apiSlice'

import { BsArrowUp, BsDashCircleDotted, BsTrashFill} from 'react-icons/bs';

const Todos = () => {

  const { data: todos, isLoading, isSuccess, isError, error } = useGetAllTodosQuery()

  const [newTodoName, setNewTodoName] = useState('');

  const [addTodo] = useAddTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();
  const [deleteTodo] = useDeleteTodoMutation();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodoName.length > 0) {
      addTodo({
        // id: Math.floor(Math.random()*1000000), 
        name: newTodoName,
        completed: false
      });
      setNewTodoName('');
    }

  }



  return (
    <>
    <h1 className='text-4xl m-8'>Todo List</h1>
    
    <div className="m-8 flex flex-col gap-8">
      { isLoading && <p className='animation animate-spin'><BsDashCircleDotted /></p> }
      { isError && <p> Ooops... {error.status} - {error.error}</p> }
      { isSuccess && (
        <>
          <form onSubmit={handleSubmit} className='flex flex-row justify-between items-center gap-4 text-xl bg-blue-200 p-4 rounded-lg' >
            <label htmlFor='new' className=''>New Todo: </label>
            <input className="bg-blue-200 flex-grow text-xl border-transparent placeholder:text-xl  focus:border-transparent focus:ring-0" type="text" id="new" value={newTodoName} onChange={(e) => setNewTodoName(e.target.value)} 
            placeholder="Enter a new todo" />
            <button className='bg-blue-800 text-blue-200 px-4 py-2 rounded'>
              <BsArrowUp className='w-6 h-6 inline' /> Send
            </button>
          </form>
          <h2 className="text-2xl mt-16">Todo in list:</h2>
          { todos.map( todo => (
        <article key={todo.id} className={`rounded-lg p-4 cursor-pointer flex flex-row justify-between items-center ${todo.completed ? 'bg-green-200' : 'bg-red-200'}`} onDoubleClick={() => updateTodo({...todo, completed: !todo.completed})}>
          <div className={`w-full text-xl`}>{todo.name}</div>
          <BsTrashFill onClick={() => deleteTodo({...todo})} className="w-6 h-6" />
        </article>
      )) }
      </>
      )} 
    </div>
    </>
  )
}

export default Todos