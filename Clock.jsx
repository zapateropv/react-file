import React, {useState, useEffect} from 'react'
import './Clock.css'

export default function Clock (){

const [dateNow,setDateNow] = useState(new Date())

useEffect(() => {
    const newInterval = setInterval(() => {
        setDateNow(new Date())
    }, 1000) 

    return (() => {
        clearInterval(newInterval)
    })
}, [])


const getDate = () => {

    let hours = new Date().getHours() % 12 || 12
    const seconds = new Date().getSeconds() % 60
    const minutes = new Date().getMinutes() % 60
    const meridiem = new Date().getHours() >= 12 ? 'PM' : 'AM'
    

    return`${hours.toString().padStart(2,0)}: ${minutes.toString().padStart(2,0)}: ${seconds.toString().padStart(2,0)} ${meridiem}`
}


    return(
    <>
        <div className='dateNowDiv'>
            CURRENT DATE NOW
          <p className="dateNow">{getDate()}</p> 
        </div>
    </>)
}