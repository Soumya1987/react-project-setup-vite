import { useState, useEffect, useContext } from 'react'
import { apiContext, DataProvider } from './context/DataContext'
import './App.css'

function App() {
  const testData = useContext(apiContext)
  console.log('testData', testData)
  // no need to useEffect if context values changes, react automatically rerenders the component
  //no need to use a useEfect and define a state and update the state to re render here

  return (
    <div>
      {testData?.map((t) => (
        <div>{t.email}</div>
      ))}
    </div>
  )
}

export default App
