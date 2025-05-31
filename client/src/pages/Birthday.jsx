import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Birthday() {
  const { isAuthenticated } = useAuth()
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    guests: '',
    theme: ''
  })
  const [isBooked, setIsBooked] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isAuthenticated) {
      alert('Please login to book an event')
      return
    }
    // In a real app, you would send this data to an API
    console.log('Booking submitted:', formData)
    setIsBooked(true)
  }

  // Sample venues data
  const venues = [
    { id: 1, name: 'Grand Ballroom', capacity: 200, price: '$1000' },
    { id: 2, name: 'Garden Pavilion', capacity: 150, price: '$800' },
    { id: 3, name: 'Rooftop Lounge', capacity: 100, price: '$1200' }
  ]

  // Sample schedule data
  const schedule = [
    { time: '10:00 AM', activity: 'Setup and decorations' },
    { time: '12:00 PM', activity: 'Guest arrival' },
    { time: '1:00 PM', activity: 'Cake cutting' },
    { time: '2:00 PM', activity: 'Games and activities' },
    { time: '4:00 PM', activity: 'Party ends' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Birthday Celebrations</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Event Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Book a Birthday Party</h2>
          {isBooked ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p>Your birthday party has been booked successfully!</p>
              <button 
                onClick={() => setIsBooked(false)}
                className="mt-2 bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
              >
                Book Another
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
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
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="date">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="guests">
                  Number of Guests
                </label>
                <input
                  type="number"
                  id="guests"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="theme">
                  Party Theme
                </label>
                <select
                  id="theme"
                  name="theme"
                  value={formData.theme}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select a theme</option>
                  <option value="superhero">Superhero</option>
                  <option value="princess">Princess</option>
                  <option value="sports">Sports</option>
                  <option value="disco">Disco</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Book Now
              </button>
            </form>
          )}
        </div>

        {/* Event Details */}
        <div className="space-y-6">
          {/* Schedule */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Sample Schedule</h2>
            <ul className="space-y-2">
              {schedule.map((item, index) => (
                <li key={index} className="flex justify-between">
                  <span className="font-medium">{item.time}</span>
                  <span>{item.activity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Venues */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Available Venues</h2>
            <div className="space-y-4">
              {venues.map(venue => (
                <div key={venue.id} className="border p-4 rounded-lg hover:bg-gray-50">
                  <h3 className="font-bold">{venue.name}</h3>
                  <p>Capacity: {venue.capacity} guests</p>
                  <p>Price: {venue.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}