import React from 'react'
import './Button.scss'

interface Props {
    text: string
    click: React.MouseEventHandler<HTMLButtonElement>
}

const Button = ({text, click}: Props) => {
  return (
    <button className='btn' onClick={click}>
        {text}
    </button>
  )
}

export default Button