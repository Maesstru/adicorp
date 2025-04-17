import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import ProjectList from './pages/Projects.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ProjectList />
  </StrictMode>,
)
