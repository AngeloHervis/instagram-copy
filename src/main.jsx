import React from 'react'
import ReactDOM from 'react-dom';
import App from './App.jsx'
import { GlobalStyle } from './style'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyle/>
  </React.StrictMode>,
)
