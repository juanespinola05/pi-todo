import { useContext } from 'react'
import { TodoList, Search, Modal, Form, Header, Bar } from '../index.jsx'
import { TodoContext } from '../TodoContext/index.jsx'
import { Fragment } from 'react'

function AppUI () {
  const { openModal } = useContext(TodoContext)
  return (
    <Fragment>
      <Header />
      <section className='todolistContainer'>
        <Search />
        <TodoList />
        {openModal && (
          <Modal>
            <Form />
          </Modal>
        )}
      </section>
      <Bar />
    </Fragment>
  )
}

export { AppUI }
