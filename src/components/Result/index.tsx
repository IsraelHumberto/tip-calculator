import React from 'react'
import './Result.scss'
import {moneyMask} from 'utils/utils'

interface Props {
    title: string,
    subtitle: string,
    total: number
}

const Result = ({title, subtitle, total}: Props) => {
  return (
    <div className='result-container'>
        <div className='description'>
            <h4>{title}</h4>
            <p>{subtitle}</p>
        </div>
        <div className='total'>
            ${total > 0 ? total.toFixed(2) : '0.00'}
        </div>
    </div>
  )
}

export default Result