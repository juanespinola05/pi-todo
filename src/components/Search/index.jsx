import { useContext } from 'react'
import { Counter } from '../index.jsx'
import { TodoContext } from '../TodoContext/index.jsx'
import './TodoSearch.css'

export default function TodoSearch () {
  const {
    filterParameters,
    setFilterParameters,
    completed,
    total
  } = useContext(TodoContext)
  const handleChangeEvent = event => {
    setFilterParameters(prev => {
      let nextValue = {
        ...prev,
        searchValue: event.target.value
      }
      return nextValue
    })
  }

  return (
    <header className='searchHeader'>
      <Counter />
      <div className='searchHeader__search'>
        <input
          type='text'
          value={filterParameters.searchValue}
          placeholder="Find your Todo's"
          className='searchHeader__search_input'
          onChange={handleChangeEvent}
        />
        <i className='searchHeader__search_icon'></i>
      </div>
    </header>
  )
}
