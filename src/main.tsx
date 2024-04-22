import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.rtl.css"

import { ThemeProvider } from 'react-bootstrap'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
  <ThemeProvider dir='rtl'>
  <App />
  </ThemeProvider>
  </BrowserRouter>
)
