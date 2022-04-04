import './TodoItem.css'

export default function TodoItem ({
  text,
  completed,
  index,
  toggleCompleteTodo,
  deleteTodo
}) {
  const InputOptions = {
    type: 'checkbox',
    id: 'completed' + index,
    className: 'todolistMain__ul__li_input'
  }

  if (completed) InputOptions.defaultChecked = completed

  return (
    <li className='todolistMain__ul__li'>
      <input {...InputOptions} onChange={() => toggleCompleteTodo(text)} />
      <label htmlFor={'completed' + index} className='completed'></label>
      <p className='todolistMain__ul__li_text'>{text}</p>
      <button
        className='todolistMain__ul__li_button'
        onClick={() => deleteTodo(text)}
      ></button>
    </li>
  )
}
