import React, { useContext } from 'react'
import { TodoContext } from '../TodoContext'
import './TodoCounter.css'

export default function TodoCounter () {
  const { todos } = useContext(TodoContext)
  const completedTodos = todos.filter(t => !!t.completed).length
  const width =
    todos.length !== 0 ? `${(completedTodos * 100) / todos.length}%` : '0px'
  return (
    <div className='counter-container'>
      <h2 className='counterText'>
        You have completed {completedTodos} out of {todos.length} Todo's
      </h2>
      <div className='counter-progress'>
        <div style={{ width }} className='counter-progress_value'></div>
      </div>
    </div>
  )
}
