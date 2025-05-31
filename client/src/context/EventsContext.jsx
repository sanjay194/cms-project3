import { createContext, useContext, useState, useEffect } from 'react'
import { useAuth } from './AuthContext'

const EventsContext = createContext()

export const EventsProvider = ({ children }) => {
  const { user } = useAuth()
  const [events, setEvents] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadEvents = () => {
      try {
        const storedEvents = localStorage.getItem('events')
        if (storedEvents) {
          setEvents(JSON.parse(storedEvents))
        }
      } catch (error) {
        console.error('Failed to load events:', error)
      } finally {
        setLoading(false)
      }
    }
    loadEvents()
  }, [])

  useEffect(() => {
    if (!loading) {
      localStorage.setItem('events', JSON.stringify(events))
    }
  }, [events, loading])

  const bookEvent = (eventData) => {
    if (!user) throw new Error('User must be logged in')
    
    const newEvent = {
      id: Date.now().toString(),
      userId: user.email,
      ...eventData,
      bookedAt: new Date().toISOString(),
      status: 'confirmed'
    }
    
    setEvents(prev => [...prev, newEvent])
    return newEvent
  }

  const updateEvent = (eventId, updates) => {
    setEvents(prev => prev.map(event => 
      event.id === eventId ? { ...event, ...updates } : event
    ))
  }

  const cancelEvent = (eventId) => {
    setEvents(prev => prev.filter(event => event.id !== eventId))
  }

  const getEventById = (eventId) => {
    return events.find(event => event.id === eventId)
  }

  const getUserEvents = () => {
    if (!user) return []
    return events.filter(event => event.userId === user.email)
  }

  return (
    <EventsContext.Provider value={{
      events,
      loading,
      bookEvent,
      updateEvent,
      cancelEvent,
      getEventById,
      getUserEvents
    }}>
      {children}
    </EventsContext.Provider>
  )
}

export const useEvents = () => {
  const context = useContext(EventsContext)
  if (context === undefined) {
    throw new Error('useEvents must be used within an EventsProvider')
  }
  return context
}