import { ReactComponent as AllSVG } from './svg/all.svg'
import { ReactComponent as DoneSVG } from './svg/done.svg'
import { ReactComponent as PendingSVG } from './svg/pending.svg'
import './TodoIcon.css'

function TodoIcon ({ type, size, onClick, color = '#777777' }) {
  const pxSize = size + 'px'
  const sizes = { width: pxSize, height: pxSize}
  const types = {
    all: size => (
      <AllSVG
        className='todoicon'
        style={sizes}
        fill={color}
      />
    ),
    done: size => (
      <DoneSVG
        className='todoicon'
        style={sizes}
        fill={color}
      />
    ),
    pending: size => (
      <PendingSVG
        className='todoicon'
        style={sizes}
        fill={color}
      />
    )
  }
  return (
    <span className='todoicon-container' style={sizes} onClick={onClick}>
      {types[type](size)}
    </span>
  )
}

export { TodoIcon }
