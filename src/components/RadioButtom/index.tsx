import React, { useState } from 'react'
import './RadioButtom.scss'

interface Props {
    value: string,
    setValue: React.Dispatch<React.SetStateAction<string>>,
    id: string,
    setCustom: React.Dispatch<React.SetStateAction<string>>,
}

const RadioButtom = ({ value, setValue, id, setCustom }: Props) => {

    return (
        <>
            <input
                className='input-radio'
                type='radio'
                id={id}
                name='btnradio'
                onClick={() => {
                    setValue(value)
                    setCustom('')
                }
                }
            />
            <label htmlFor={id} className='btn-radio'>
                {value}%
            </label>
        </>
    )
}

export default RadioButtom