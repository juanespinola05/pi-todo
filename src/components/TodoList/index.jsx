import { TodoItem, Loading, Error } from '../index.jsx'
import './TodoList.css'
import { TodoContext } from '../TodoContext/index.jsx'
import React, { useContext } from 'react'

export default function TodoList () {
  const {
    statusData,
    displayedTodos,
    toggleCompleteTodo,
    deleteTodo
  } = useContext(TodoContext)
  return (
    <main className='todolistMain'>
      <ul className='todolistMain__ul no-scroll'>
        {statusData.error && <Error />}
        {statusData.loading && <Loading />}
        {!!(!statusData.loading && !displayedTodos.length) && (
          <p style={{ textAlign: 'center', color: '#777' }}>
            Create your first TODO
          </p>
        )}
        {displayedTodos.map((todo, index) => {
          return (
            <TodoItem
              index={index}
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              toggleCompleteTodo={toggleCompleteTodo}
              deleteTodo={deleteTodo}
            />
          )
        })}
      </ul>
    </main>
  )
}
