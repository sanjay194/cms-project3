import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function AuthForm({ type }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: type === 'signup' ? '' : undefined
  })
  const [error, setError] = useState('')
  const { login, signup } = useAuth()

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Simple validation
    if (!formData.email || !formData.password) {
      setError('Please fill in all fields')
      return
    }

    if (type === 'login') {
      login({ email: formData.email, name: 'John Doe' }) // Mock user
    } else {
      if (!formData.name) {
        setError('Please enter your name')
        return
      }
      signup({ email: formData.email, name: formData.name })
    }
  }

  return (
    <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {type === 'login' ? 'Login' : 'Sign Up'}
      </h2>
      {error && <div className="mb-4 text-red-500">{error}</div>}
      <form onSubmit={handleSubmit}>
        {type === 'signup' && (
          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 mb-2" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
        >
          {type === 'login' ? 'Login' : 'Sign Up'}
        </button>
      </form>
    </div>
  )
}