import './TodoBar.css'
import { AllIcon, DoneIcon, PendingIcon, CategoryDrop } from '../index.jsx'
import { useState, useEffect, useContext } from 'react'
import { TodoContext } from '../TodoContext'

function TodoBar () {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const { setFilterParameters } = useContext(TodoContext)

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)

    return () => window.removeEventListener(handleResize)
  }, [])

  function handleFilterChange () {
    setFilterParameters(prev => {
      let next = {
        ...prev,
        status: document.querySelector('input[name="filter"]:checked').value,
        category: document.querySelector('#categories-select').value
      }
      return next
    })
  }

  const isMobile = windowWidth <= 650

  return (
    <section className='toolbar'>
      <div className='toolbar__container'>
        <fieldset
          className='toolbar__filter-container'
          onChange={handleFilterChange}
        >
          <div>
            <input
              defaultChecked
              className='toolbar__filter-container_input'
              type='radio'
              name='filter'
              id='filter-all'
              value='all'
            />
            <label
              className='toolbar__filter-container_label'
              htmlFor='filter-all'
            >
              {isMobile && <AllIcon size={25} />}
              {!isMobile && <span className='filter-button'>All</span>}
            </label>
          </div>
          <div>
            <input
              className='toolbar__filter-container_input'
              type='radio'
              name='filter'
              id='filter-done'
              value='done'
            />
            <label
              className='toolbar__filter-container_label'
              htmlFor='filter-done'
            >
              {isMobile && <DoneIcon size={25} />}
              {!isMobile && <span className='filter-button'>Done</span>}
            </label>
          </div>
          <div>
            <input
              className='toolbar__filter-container_input'
              type='radio'
              name='filter'
              id='filter-todo'
              value='pending'
            />
            <label
              className='toolbar__filter-container_label'
              htmlFor='filter-todo'
            >
              {isMobile && <PendingIcon size={25} />}
              {!isMobile && <span className='filter-button'>Pending</span>}
            </label>
          </div>
        </fieldset>
        <div className='toolbar__categories-container'>
          <CategoryDrop handleChange={handleFilterChange} />
        </div>
        <div className='toolbar__clear-container'>
          <button className='toolbar__clearbutton'>Clear All</button>
        </div>
      </div>
    </section>
  )
}

export default TodoBar
