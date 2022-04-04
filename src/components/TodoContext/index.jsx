import React, { createContext, useEffect, useState } from 'react'
import { useLocalStorage } from './useLocalStorage'
const TODO_VERSION = 'TODO_V1'

const TodoContext = createContext()
let statuses = {
  done: true,
  pending: false
}

function TodoProvider (props) {
  // ? Estados
  const { items: todos, saveItems: saveTodos, statusData } = useLocalStorage(
    TODO_VERSION,
    []
  )
  const defaultFilterParameters = {
    category: 'all',
    searchValue: '',
    status: 'all'
  }
  const [filterParameters, setFilterParameters] = useState(
    defaultFilterParameters
  )
  const [displayedTodos, setDisplayedTodos] = useState(todos)
  const [openModal, setOpenModal] = useState(false)

  // ? Handlers

  const toggleCompleteTodo = text => {
    const todoIndex = todos.findIndex(t => t.text === text)
    todos[todoIndex].completed = !todos[todoIndex].completed
    saveTodos([...todos])
  }

  const deleteTodo = text => {
    const todoIndex = todos.findIndex(t => t.text === text)
    todos.splice(todoIndex, 1)
    saveTodos([...todos])
  }

  const createTodo = newTodo => {
    todos.push(newTodo)
    saveTodos([...todos])
  }

  const toggleModal = () => {
    setOpenModal(prevState => !prevState)
  }

  useEffect(() => {
    setDisplayedTodos(
      todos.filter(t => {
        let { status, category, searchValue } = filterParameters
        const cat = category === 'all' || t.category === category
        const searchText = t.text
          .toLowerCase()
          .includes(searchValue.toLowerCase())
        const completed = t.completed === statuses[status] || status === 'all'
        return cat && searchText && completed
      })
    )
  }, [filterParameters, todos])

  return (
    <TodoContext.Provider
      value={{
        todos,
        statusData,
        filterParameters,
        setFilterParameters,
        displayedTodos,
        toggleCompleteTodo,
        deleteTodo,
        createTodo,
        openModal,
        toggleModal
      }}
    >
      {props.children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
