import './TodoLoading.css'

function TodoLoading () {
  const elements = []
  for (let i = 0; i < 5; i++) {
    elements.push(
      <li key={i} className='loading-item'>
        <div className='loading-checkbox'></div>
        <div className='loading-text'></div>
        <div className='loading-button'></div>
      </li>
    )
  }
  return elements
}

export default TodoLoading

// return (
//   <div className='loading-container'>
//     <div className='loading-spinner'></div>
//   </div>
// )
