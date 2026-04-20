import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

import {ThemeContext} from './Context/ThemeContext.jsx'
 const root = createRoot(document.getElementById('root'))
 root.render(
  <ThemeContext.Provider value={{clr:'yellow'}}>
    <App />
  </ThemeContext.Provider>,
)
