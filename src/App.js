import React, { useState } from 'react'
import moment from 'moment'
import './App.css'

function App () {
  // These states are for calculating difference from today if "To is not selected"
  const [From, setFrom] = useState(moment())
  const [diffT, setDiffT] = useState(null)
  const [diffTHours, setDiffTHours] = useState(null)
  // These states are for relative difference purpose
  const [to, setTo] = useState(moment())
  const [diffV, setDiffV] = useState(null)
  const [diffVHours, setDiffVHours] = useState(null)
  // State to keep track whether difference is with today or with some other date
  const [isToday, setIsToday] = useState(true)

  const m = moment()

  // Date handler for From Input
  const dateHandler = e => {
    let value = moment(e.target.value)
    setFrom(value)
    setIsToday(true)
  }

  // Date handler for To Input
  const dateVHandler = e => {
    let value = moment(e.target.value)
    setTo(value)
    setIsToday(false)
  }

  const diffTodayHandler = e => {
    e.preventDefault()
    setIsToday(true)
    setDiffT(m.diff(From, 'days'))
    setDiffTHours(m.diff(From, 'hours'))
    // Removes its corresponding sections
    setDiffV(null)
    setDiffVHours(null)
  }

  const diffToHandler = e => {
    e.preventDefault()
    setIsToday(false)
    setDiffV(to.diff(From, 'days'))
    setDiffVHours(to.diff(From, 'hours'))
    // Removes its corresponding sections
    setDiffT(null)
    setDiffTHours(null)
  }

  return (
    <>
      <h1>Calculating Difference </h1>
      <div className='bg-dark p-2 d-flex justify-content-center flex-column align-items-center app'>
        <form>
          <div>
            <label>From</label>
            <input
              type='date'
              onChange={dateHandler}
              value={From}
              name='from'
            />
            <button onClick={diffTodayHandler}>
              Calculate Diff from Today
            </button>
          </div>
          <div>
            <label>To</label>
            <input type='date' onChange={dateVHandler} value={to} name='to' />
            <button onClick={diffToHandler}>Calculate difference</button>
          </div>
        </form>
        <h4>
          {isToday
            ? 'Diff between ' + From.format('dddd, MMMM Do YYYY') + ' and today'
            : 'Diff between ' +
              From.format('dddd, MMMM Do YYYY') +
              ' and ' +
              to.format('dddd, MMMM Do YYYY')}
        </h4>
        <div>{diffT ? 'Difference in Days = ' + diffT + ' Days' : ''}</div>
        <div>
          {diffTHours ? 'Difference in Hours = ' + diffTHours + ' Hours' : ''}
        </div>
        <div>{diffV ? 'Difference in Days = ' + diffV + ' Days' : ''}</div>
        <div>
          {diffVHours ? 'Difference in Hours = ' + diffVHours + ' Hours' : ''}
        </div>
      </div>
    </>
  )
}

export default App
