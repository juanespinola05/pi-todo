import { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './CreateTodoButton.css'

export default function CreateTodoButton () {
  const { toggleModal } = useContext(TodoContext)
  return (
    <button onClick={toggleModal} className='todolistMain_createButton'>
      New task
    </button>
  )
}
