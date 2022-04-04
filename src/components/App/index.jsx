import './App.css'
import { AppUI } from './AppUI.jsx'
import React from 'react'
import { TodoProvider } from '../TodoContext/index.jsx'

export default function App () {
  return (
    <TodoProvider>
      <AppUI></AppUI>
    </TodoProvider>
  )
}
