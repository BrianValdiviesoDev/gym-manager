import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import { GymManagerApp } from './GymManagerApp'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GymManagerApp/>
    </BrowserRouter>
  </React.StrictMode>
)
