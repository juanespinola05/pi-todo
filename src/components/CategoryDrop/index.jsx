import './CategoryDrop.css'

function CategoryDrop ({ handleChange }) {
  const selectProps = {
    id: 'categories-select'
  }
  if (handleChange) selectProps.onChange = handleChange
  return (
    <div className='category__container'>
      <select className='category-select' {...selectProps}>
        <option value='all'>All</option>
        <option value='estudio'>Estudio</option>
        <option value='facultad'>Facultad</option>
        <option value='facultad'>Entregas</option>
        <option value='trabajo'>Trabajo</option>
        <option value='otros'>Otros</option>
      </select>
      <span className='category-focus'></span>
    </div>
  )
}

export default CategoryDrop
