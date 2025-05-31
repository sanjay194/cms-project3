import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth()

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-3xl font-extrabold tracking-wide">
            EventHub
          </Link>
          <div className="flex space-x-6">
            <Link to="/" className="transition duration-300 ease-in-out hover:underline hover:text-yellow-300">
              Home
            </Link>
            {isAuthenticated ? (
              <>
                <Link to="/profile" className="transition duration-300 ease-in-out hover:underline hover:text-yellow-300">
                  Profile
                </Link>
                <button
                  onClick={logout}
                  className="transition duration-300 ease-in-out focus:outline-none hover:underline hover:text-yellow-300"
                >
                  Logout
                </button>
                <span className="font-medium text-lg ml-2">{user?.name}</span>
              </>
            ) : (
              <>
                <Link to="/login" className="transition duration-300 ease-in-out hover:underline hover:text-yellow-300">
                  Login
                </Link>
                <Link to="/signup" className="transition duration-300 ease-in-out hover:underline hover:text-yellow-300">
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}