import logo from '../../assets/images/logo.png'
import './TodoHeader.css'
import { CreateTodoButton } from '../index.jsx'

function TodoHeader () {
  return (
    <header className='header'>
      <div className='header__logo' title='Todo App by Please Imagine'>
        <img src={logo} alt='' className='header__logo_img' />
        <h1 className='header__logo_title'>PI Todo</h1>
      </div>
      <CreateTodoButton />
    </header>
  )
}

export default TodoHeader
