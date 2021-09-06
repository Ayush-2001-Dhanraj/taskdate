import React from 'react'
import './App.css'
import OldCalculator from './Components/OldCalculator'
import DurationCalculator from './Components/DurationCalculator'

function App () {
  return (
    <>
      <h1 className='text-center'>Date Calculate</h1>
      <DurationCalculator />
      {/* <OldCalculator /> */}
      <p className='text-center'>Created by Ayush </p>
    </>
  )
}

export default App
