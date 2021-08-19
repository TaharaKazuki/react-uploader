import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import './assets/scss/main.scss'

ReactDOM.render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById('root')
)

reportWebVitals()
