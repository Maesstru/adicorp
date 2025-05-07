import { StrictMode } from 'react'
import Root from './Routes.jsx';
import './index.css'
import "bootstrap/dist/css/bootstrap.min.css";
import ReactDOM from "react-dom/client";


ReactDOM.createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Root></Root>
  </StrictMode>,
)
