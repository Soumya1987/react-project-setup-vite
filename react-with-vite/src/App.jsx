import { useState, useEffect, useContext } from 'react'
import { apiContext, DataProvider } from './context/DataContext'
import './App.css'

function App() {
  const testData = useContext(apiContext)
  console.log('testData', testData)

  return (
    <div>
      {testData?.map((t) => (
        <div>{t.email}</div>
      ))}
    </div>
  )
}

export default App
