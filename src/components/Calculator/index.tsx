import InputText from 'components/InputText'
import React, { useEffect, useState } from 'react'
import './Calculator.scss'
import iconDollar from 'assets/icon-dollar.svg'
import iconPerson from 'assets/icon-person.svg'
import RadioButtom from 'components/RadioButtom'
import Custom from 'components/InputText/Custom'
import Result from 'components/Result'
import Button from 'components/Button'


const Calculator = () => {

    const [bill, setBill] = useState('')
    const [numberPeople, setNumberPeople] = useState('')
    const [tip, setTip] = useState('')
    const [tipCustom, setTipCustom] = useState('')
    const [totalxPerson, setTotalxPerson] = useState(0)
    const [tipxPerson, setTipxPerson] = useState(0)

    useEffect(() => {
        calcTotalxPerson()
    }, [tipCustom, tip, bill, numberPeople])

    function calcTotalxPerson() {
        let selectTip = tipCustom === '' ? parseInt(tip) / 100 : parseInt(tipCustom) / 100
        let totalBill = parseFloat(bill)
        let qtdPeople = parseInt(numberPeople)

        let total = (totalBill + (totalBill * selectTip)) / qtdPeople
        let tipTotal = (totalBill * selectTip) / qtdPeople

        setTotalxPerson(total)
        setTipxPerson(tipTotal)
    }

    function clearFields() {
        setBill('')
        setNumberPeople('')
        setTip('')
        setTipCustom('')
        setTotalxPerson(0)
        setTipxPerson(0)
    }

    return (
        <div className='calculator'>
            <div className='bill'>
                {/* GRUPO INPUT BILL */}
                <div className='group-input'>
                    <label htmlFor="bill" className='group-input-label'>Bill</label>
                    <InputText
                        value={bill}
                        setValue={setBill}
                        icon={iconDollar}
                        money={true}
                        id='bill'
                    />
                </div>
                {/* GRUPO INPUT BILL */}
                <div className='group-input'>
                    <label htmlFor="people" className='group-input-label'>Select Tip %</label>
                    <div className='grid-btns'>
                        <RadioButtom
                            value={'5'}
                            setValue={setTip}
                            id='btn-radio1'
                            setCustom={setTipCustom}
                        />
                        <RadioButtom
                            value={'10'}
                            setValue={setTip}
                            id='btn-radio2'
                            setCustom={setTipCustom}
                        />
                        <RadioButtom
                            value={'15'}
                            setValue={setTip}
                            id='btn-radio3'
                            setCustom={setTipCustom}
                        />
                        <RadioButtom
                            value={'25'}
                            setValue={setTip}
                            id='btn-radio4'
                            setCustom={setTipCustom}
                        />
                        <RadioButtom
                            value={'50'}
                            setValue={setTip}
                            id='btn-radio5'
                            setCustom={setTipCustom}
                        />
                        <Custom
                            value={tipCustom}
                            setValue={setTipCustom}
                            id='btn-radios'
                            placeholder='Custom'
                        />
                    </div>
                </div>
                {/* GRUPO INPUT BILL */}
                <div className='group-input'>
                    <label htmlFor="people" className='group-input-label'>Number of People</label>
                    <InputText
                        value={numberPeople}
                        setValue={setNumberPeople}
                        icon={iconPerson}
                        id='people'
                        maxLength={4}
                    />
                </div>
            </div>
            <div className='result'>
                <div className='result-totals'>
                    <Result
                        title='Tip Amount'
                        subtitle='/ person'
                        total={tipxPerson}
                    />
                    <Result
                        title='Total'
                        subtitle='/ person'
                        total={totalxPerson}
                    />
                </div>
                <div className='btn-reset'>
                    <Button
                        text='reset'
                        click={clearFields}
                    />
                </div>
            </div>
        </div>
    )
}

export default Calculator