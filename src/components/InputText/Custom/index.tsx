import React from 'react'
import './Custom.scss'
import { moneyMask } from 'utils/utils'

interface Props {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  id: string
  maxLength?: number
  placeholder?: string
}

const InputText = ({ value, setValue, id, maxLength, placeholder }: Props) => {

  return (
    <div className='input-custom'>
      <input
        id={id}
        className='input-text'
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
        }
        }
        placeholder={placeholder ? placeholder : '0'}
        maxLength={maxLength ? maxLength : 3}
      />
    </div>
  )
}

export default InputText
