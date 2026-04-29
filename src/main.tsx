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
import Event from './pages/Event'
import AdminLayout from './pages/admin/AdminLayout'
import Login from './pages/admin/Login'
import Dashboard from './pages/admin/Dashboard'
import AdminBookings from './pages/admin/Bookings'
import AdminShotRequests from './pages/admin/ShotRequests'
import AdminEvents from './pages/admin/Events'

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
        <Route path="/event" element={<Event />} />

        <Route path="/admin/login" element={<Login />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="bookings" element={<AdminBookings />} />
          <Route path="shot-requests" element={<AdminShotRequests />} />
          <Route path="events" element={<AdminEvents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
