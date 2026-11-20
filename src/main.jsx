import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ThemeProvider } from '@mui/material'
import { theme } from './test.js'
import { BrowserRouter } from 'react-router'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App/>
    </ThemeProvider>
    </BrowserRouter>
  </StrictMode>,
)
