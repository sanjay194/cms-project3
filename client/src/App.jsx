import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import { EventsProvider } from './context/EventsContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Birthday from './pages/Birthday'
import Marriage from './pages/Marriage'
import Party from './pages/Party'
import Profile from './pages/Profile'
import Login from './pages/Login'
import Signup from './pages/Signup'
import NotFound from './pages/NotFound'

function App() {
  return (
    <AuthProvider>
      <EventsProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/birthday" element={<Birthday />} />
                <Route path="/marriage" element={<Marriage />} />
                <Route path="/party" element={<Party />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </EventsProvider>
    </AuthProvider>
  )
}

export default App