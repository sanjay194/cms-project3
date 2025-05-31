import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Party() {
  const { isAuthenticated } = useAuth()
  const [formData, setFormData] = useState({
    organizerName: '',
    eventName: '',
    date: '',
    guests: '',
    partyType: ''
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
    console.log('Party booking submitted:', formData)
    setIsBooked(true)
  }

  // Sample venues data
  const venues = [
    { id: 1, name: 'Nightclub Downtown', capacity: 250, price: '$2000' },
    { id: 2, name: 'Rooftop Lounge', capacity: 120, price: '$1500' },
    { id: 3, name: 'Private Mansion', capacity: 100, price: '$3000' }
  ]

  // Sample schedule data
  const schedule = [
    { time: '8:00 PM', activity: 'Doors open' },
    { time: '9:00 PM', activity: 'DJ performance' },
    { time: '10:00 PM', activity: 'Live band' },
    { time: '12:00 AM', activity: 'Midnight toast' },
    { time: '2:00 AM', activity: 'Party ends' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Party Events</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Event Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Plan Your Party</h2>
          {isBooked ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p>Your party has been booked successfully!</p>
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
                <label className="block text-gray-700 mb-2" htmlFor="organizerName">
                  Your Name
                </label>
                <input
                  type="text"
                  id="organizerName"
                  name="organizerName"
                  value={formData.organizerName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="eventName">
                  Event Name
                </label>
                <input
                  type="text"
                  id="eventName"
                  name="eventName"
                  value={formData.eventName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="date">
                  Event Date
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
                <label className="block text-gray-700 mb-2" htmlFor="partyType">
                  Party Type
                </label>
                <select
                  id="partyType"
                  name="partyType"
                  value={formData.partyType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select party type</option>
                  <option value="corporate">Corporate</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="themed">Themed Party</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Book Party
              </button>
            </form>
          )}
        </div>

        {/* Event Details */}
        <div className="space-y-6">
          {/* Schedule */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Sample Party Schedule</h2>
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
            <h2 className="text-xl font-semibold mb-4">Party Venues</h2>
            <div className="space-y-4">
              {venues.map(venue => (
                <div key={venue.id} className="border p-4 rounded-lg hover:bg-gray-50">
                  <h3 className="font-bold">{venue.name}</h3>
                  <p>Capacity: {venue.capacity} guests</p>
                  <p>Price: {venue.price}</p>
                  <p className="text-sm text-gray-600">Includes sound system and basic lighting</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}