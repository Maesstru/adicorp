import './App.css'
import { Routes, Route } from "react-router-dom";
import Projects from './pages/Projects.jsx'
import AboutPage from './pages/About.jsx'
import ContactPage from './pages/Contact.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Projects></Projects>}></Route>
      <Route path="/about" element={<AboutPage></AboutPage>}></Route>
      <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
    </Routes>
  );
}

export default App
