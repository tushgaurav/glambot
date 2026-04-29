import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'
import GlobalStyles from './components/GlobalStyles'
import App from './App'
import About from './pages/About'
import BookNow from './pages/BookNow'
import Privacy from './pages/Privacy'
import Vision from './pages/Vision'
import Pricing from './pages/Pricing'
import Gear from './pages/Gear'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/book" element={<BookNow />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gear" element={<Gear />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
