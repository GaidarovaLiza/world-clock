import react from 'react'
import { ReactPropTypes } from 'react'

export default function Clock({ deleteClock, name, id, timeZone }) {

  return (
    <div className='clock-wrapper'>
      <div key={id} className="workout-list-row">
        <span>{name}</span>
        <span>{timeZone}</span>
        <div>
          <p className="button-delete"
            onClick={() => deleteClock(id)} >
            ✘
          </p>
        </div>
      </div>
    </div>
  )
}


