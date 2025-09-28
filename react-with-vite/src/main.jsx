import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { DataProvider } from './context/DataContext.jsx'
import App from './App.jsx'

// wrap the context provider in main.jsx to make context data available to App and other components
//as all the components are child to App.jsx, as App is parent for all
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataProvider>
    <App />
    </DataProvider>
  </StrictMode>,
)
