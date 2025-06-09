import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './global.css'

import { PI as numeroPi, GTM_BRASIL } from './teste'
import nomes from './nomes' //quando você importa um default padrao você pode dar qualquer nome para o qu você ta importando

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {GTM_BRASIL}
    <App />
  </StrictMode>,
)