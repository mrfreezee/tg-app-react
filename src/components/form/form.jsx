import React, { useCallback, useEffect, useState } from 'react'
import './form.css'
import { useTelegram } from '../../hooks/useTelegram'


const Form = () => {

    const [country, setCountry] = useState('')
    const [city, setCity] = useState('')
    const [street, setStreet] = useState('')
    const [subject, setSubject] = useState('')
    const {tg} = useTelegram()

    const onSendData = useCallback(() =>{
        const data = {
            country,
            city,
            street, 
            subject
        }
        tg.sendData(JSON.stringify(data))
    }, [country, city, street, subject])

    useEffect(() =>{
        tg.onEvent('mainButtonClicked', onSendData)
        return() =>{
            tg.offEvent('mainButtonClicked', onSendData)
        }
    }, [onSendData])

    useEffect(() =>{
        tg.MainButton.setParams({
            text: 'Отправить данные'
        })
    }, [])

    useEffect(()=>{
        if(!street || !country || !city){
            tg.MainButton.hide()
        } else{
            tg.MainButton.show()
        }
    }, [country, city, street])

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }
    const onChangeCity = (e) => {
        setCity(e.target.value)
    }
    const onChangeStreet = (e) => {
        setStreet(e.target.value)
    }
    const onChangeSubject = (e) => {
        setSubject(e.target.value)
    }


    return (
        <div className="form">
            <h3>Введите ваши данные</h3>
            <input
                className='input'
                type="text"
                placeholder='Страна'
                value={country}
                onChange={onChangeCountry}
            />
            <input
                className='input'
                type="text"
                placeholder='Город'
                value={city}
                onChange={onChangeCity}
            />
            <input
                className='input'
                type="text"
                placeholder='Улица'
                value={street}
                onChange={onChangeStreet}
            />
            
            <select value={subject} onChange={onChangeSubject} className='select'> 
                <option value='legal'>Юр.лицо</option>
                <option value='legal'>Физ.лицо</option>
            </select>
        </div>
            

    )
}

export default Form;