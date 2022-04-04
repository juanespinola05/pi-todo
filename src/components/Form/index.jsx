import './TodoForm.css'
import { useState, useContext } from 'react'
import { TodoContext } from '../TodoContext'
import { CategoryDrop } from '../index.jsx'

function TodoForm () {
  const [textareaValue, setTextareaValue] = useState('')
  const [categoryValue, setCategoryValue] = useState('all')
  const { toggleModal, createTodo } = useContext(TodoContext)

  const handleOnChange = e => {
    e.target.tagName === 'SELECT'
      ? setCategoryValue(e.target.value)
      : setTextareaValue(e.target.value)
  }

  const onCancel = e => {
    e.target.value = ''
    toggleModal()
  }

  const handleSubmit = e => {
    e.preventDefault()
    const newTodo = {
      text: textareaValue,
      completed: false,
      category: categoryValue
    }
    createTodo(newTodo)
    toggleModal()
  }

  return (
    <form onSubmit={handleSubmit} className='newTodoForm'>
      <div className='newTodoForm__category'>
        <label htmlFor='categories-select'>Category</label>
        <CategoryDrop handleChange={handleOnChange} />
      </div>
      <textarea
        className='newTodoForm__input'
        id='textareaText'
        placeholder='Type your TODO'
        onChange={handleOnChange}
        resize='false'
      ></textarea>
      <div className='newTodoForm__button-container'>
        <button
          type='button'
          className='newTodoForm__cancel'
          onClick={onCancel}
        >
          Cancel
        </button>
        <button
          type='submit'
          disabled={!textareaValue.length}
          className='newTodoForm__add'
        >
          Add
        </button>
      </div>
    </form>
  )
}

export default TodoForm
