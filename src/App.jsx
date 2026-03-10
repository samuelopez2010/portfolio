import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import HomePage from './pages/HomePage'
import AllProjectsPage from './pages/AllProjectsPage'
import ScrollToAnchor from './components/utils/ScrollToAnchor'

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 font-sans transition-colors duration-300 selection:bg-brand-500/30 flex flex-col">
        <Navbar />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects" element={<AllProjectsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App
