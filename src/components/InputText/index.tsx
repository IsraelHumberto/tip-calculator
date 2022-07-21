import React from 'react'
import './InputText.scss'
import { moneyMask } from 'utils/utils'

interface Props {
  value: string,
  setValue: React.Dispatch<React.SetStateAction<string>>,
  icon?: string
  money?: Boolean
  id: string
  maxLength?: number
}

const InputText = ({ value, setValue, icon, money, id, maxLength }: Props) => {

  return (
    <div className='input-container'>
      <input
        id={id}
        className='input-text'
        value={value}
        onChange={(e) => {
          if (money) {
            e.target.value = moneyMask(e.target.value)
          }
          setValue(e.target.value)
        }
        }
        placeholder='0'
        maxLength={maxLength ? maxLength : 11}
      />
      <img src={icon} alt="" className='input-img' />
    </div>
  )
}

export default InputText
