import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Team from './pages/Team';
import Achievements from './pages/Achievements';
import Publications from './pages/Publications';
import Societies from './pages/Societies';
import Events from './pages/Events';
import Login from './pages/Login';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-50">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/achievements" element={<Achievements />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/societies" element={<Societies />} />
              <Route path="/events" element={<Events />} />
              <Route path="/login" element={<Login />} />
              <Route path="/contact" element={<Contact />} />
              <Route 
                path="/dashboard" 
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                } 
              />
            </Routes>
          </main>
          <Footer />
          <Toaster position="top-right" />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;