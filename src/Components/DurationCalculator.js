import React from 'react'
import moment from 'moment'
import './DurationCalculator.css'
import { useState } from 'react/cjs/react.development'

const DurationCalculator = () => {
  let initialDate = moment().format('ll')
  const [startDate, setStartDate] = useState(initialDate)
  const [duration, SetDuration] = useState(0)
  const [newdate, setNewdate] = useState(null)

  const changehandler = e => {
    let value = e.target.value
    let name = e.target.name
    if (name === 'date') {
      value = moment(value).format('ll')
      setStartDate(value)
    } else if (name === 'duration') SetDuration(value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    console.log(startDate)
    console.log(duration)
    setNewdate(
      moment(startDate)
        .add('days', duration)
        .format('ll')
    )
  }

  return (
    <div className='calculator'>
      <form className='bg-dark p-2'>
        <label className='label'>
          Choose start date&nbsp;&nbsp;
          <input
            type='date'
            name='date'
            onChange={changehandler}
            value={startDate}
          />
        </label>
        <p className='text-white m-0'>{startDate}</p>
        <label className='label'>
          &nbsp;&nbsp; Choose Duration&nbsp;&nbsp;
          <input
            type='number'
            name='duration'
            value={duration}
            onChange={changehandler}
          />
        </label>
        <button type='submit' onClick={handleSubmit}>
          Calculate
        </button>
      </form>
      <p className='bg-dark text-white d-flex justify-content-center p-2'>
        {newdate ? 'Calculated Date = ' + newdate : ''}
      </p>
    </div>
  )
}

export default DurationCalculator
