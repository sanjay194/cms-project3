import { useAuth } from '../context/AuthContext'
import ProtectedRoute from '../components/ProtectedRoute'

const bookedEvents = [
  {
    id: 1,
    type: 'birthday',
    title: '30th Birthday Bash',
    date: '2023-06-15',
    venue: 'Grand Ballroom'
  },
  {
    id: 2,
    type: 'marriage',
    title: 'Wedding Celebration',
    date: '2023-08-20',
    venue: 'Beach Resort'
  }
]

export default function Profile() {
  const { user } = useAuth()

  return (
    <ProtectedRoute>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-center">Your Profile</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Personal Information</h2>
          <p className="text-lg mb-2"><span className="font-medium">Name:</span> {user?.name}</p>
          <p className="text-lg"><span className="font-medium">Email:</span> {user?.email}</p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-gray-700">Your Booked Events</h2>
          {bookedEvents.length === 0 ? (
            <p className="text-lg text-gray-600">You haven't booked any events yet.</p>
          ) : (
            <div className="space-y-6">
              {bookedEvents.map(event => (
                <div key={event.id} className="border p-6 rounded-lg transition hover:shadow-md">
                  <h3 className="font-bold text-xl mb-2">{event.title}</h3>
                  <p className="text-lg text-gray-600">Type: {event.type}</p>
                  <p className="text-lg text-gray-600">Date: {event.date}</p>
                  <p className="text-lg text-gray-600">Venue: {event.venue}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </ProtectedRoute>
  )
}