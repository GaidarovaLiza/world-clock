import react, { useState, useEffect } from 'react'
import { ReactPropTypes } from 'react'
import { getTime } from '../utils'

export default function Clock({ deleteClock, name, id, timeZone }) {
  const [time, setTime] = useState(getTime(timeZone))

  useEffect(() => {
    setInterval(() => {
      setTime(getTime(timeZone))
    }, 1000)
  }, [])

  return (
    <div className='clock-wrapper'>
      <p className='items'>{name} :</p>
      <p className='items'>{`${time[0]}:${time[1]}:${time[2]}`}</p>
      <p className="button-delete"
        onClick={() => deleteClock(id)} >
        ✘
      </p>
    </div>
  )
}


