import { useState } from 'react'
import { useAuth } from '../context/AuthContext'

export default function Marriage() {
  const { isAuthenticated } = useAuth()
  const [formData, setFormData] = useState({
    brideName: '',
    groomName: '',
    date: '',
    guests: '',
    ceremonyType: ''
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
    console.log('Marriage booking submitted:', formData)
    setIsBooked(true)
  }

  // Sample venues data
  const venues = [
    { id: 1, name: 'Grand Cathedral', capacity: 300, price: '$5000' },
    { id: 2, name: 'Beach Resort', capacity: 150, price: '$3500' },
    { id: 3, name: 'Garden Estate', capacity: 200, price: '$4000' }
  ]

  // Sample schedule data
  const schedule = [
    { time: '2:00 PM', activity: 'Guest arrival' },
    { time: '3:00 PM', activity: 'Ceremony' },
    { time: '4:00 PM', activity: 'Cocktail hour' },
    { time: '5:00 PM', activity: 'Reception' },
    { time: '10:00 PM', activity: 'Party ends' }
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Wedding Celebrations</h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {/* Event Form */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Plan Your Wedding</h2>
          {isBooked ? (
            <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded">
              <p>Your wedding has been booked successfully!</p>
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
                <label className="block text-gray-700 mb-2" htmlFor="brideName">
                  Bride's Name
                </label>
                <input
                  type="text"
                  id="brideName"
                  name="brideName"
                  value={formData.brideName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="groomName">
                  Groom's Name
                </label>
                <input
                  type="text"
                  id="groomName"
                  name="groomName"
                  value={formData.groomName}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="date">
                  Wedding Date
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
                <label className="block text-gray-700 mb-2" htmlFor="ceremonyType">
                  Ceremony Type
                </label>
                <select
                  id="ceremonyType"
                  name="ceremonyType"
                  value={formData.ceremonyType}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select ceremony type</option>
                  <option value="traditional">Traditional</option>
                  <option value="modern">Modern</option>
                  <option value="religious">Religious</option>
                  <option value="civil">Civil</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
              >
                Book Wedding
              </button>
            </form>
          )}
        </div>

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
            <h2 className="text-xl font-semibold mb-4">Wedding Venues</h2>
            <div className="space-y-4">
              {venues.map(venue => (
                <div key={venue.id} className="border p-4 rounded-lg hover:bg-gray-50">
                  <h3 className="font-bold">{venue.name}</h3>
                  <p>Capacity: {venue.capacity} guests</p>
                  <p>Price: {venue.price}</p>
                  <p className="text-sm text-gray-600">Includes basic decorations and seating</p>
                </div>
              ))}
            </div>
          </div>
        </div>

  )
}