import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import NavBar from './components/header.jsx'
import Form from './components/content.jsx'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <>
  <NavBar />
  <Form />
  </>
)
