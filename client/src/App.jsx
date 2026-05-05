import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Services from './pages/Services'
import ServicePage from './pages/ServicePage'
import Booking from './pages/Booking'
import Dashboard from './pages/Dashboard'
import CaseStudies from './pages/CaseStudies'
import Pricing from './pages/Pricing'
import Reviews from './pages/Reviews'
import OrderPage from './pages/OrderPage'
import ClientPayPage from './pages/ClientPayPage'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:slug" element={<ServicePage />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/case-studies" element={<CaseStudies />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/order" element={<OrderPage />} />
        <Route path="/pay" element={<ClientPayPage />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
