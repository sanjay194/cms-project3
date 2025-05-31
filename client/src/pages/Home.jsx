import EventCard from '../components/EventCard'

export default function Home() {
  const events = [
    {
      title: 'Birthday Parties',
      description: 'Celebrate your special day with our amazing birthday packages tailored for all ages.',
      image: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/birthday'
    },
    {
      title: 'Wedding Celebrations',
      description: 'Make your wedding day unforgettable with our professional planning and beautiful venues.',
      image: 'https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/marriage'
    },
    {
      title: 'Special Parties',
      description: 'From corporate events to anniversaries, we have the perfect venue for your celebration.',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      link: '/party'
    }
  ]

  return (
    <div className="container mx-auto px-4 py-14">
      <section className="text-center mb-20">
        <h1 className="text-5xl font-extrabold mb-6 leading-tight text-gray-800">Welcome to EventHub</h1>
        <p className="text-2xl text-gray-600 max-w-2xl mx-auto">
          Plan your perfect event with our professional services. From birthdays to weddings, we've got you covered.
        </p>
      </section>

      <section className="mb-20">
        <h2 className="text-4xl font-extrabold mb-10 text-center text-gray-700">Our Event Services</h2>
        <div className="grid md:grid-cols-3 gap-10">
          {events.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              description={event.description}
              image={event.image}
              link={event.link}
            />
          ))}
        </div>
      </section>

      <section className="bg-blue-100 rounded-lg shadow-lg p-12 text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-700">Ready to plan your event?</h2>
        <p className="mb-8 text-lg text-gray-700 max-w-lg mx-auto">
          Our team of professional event planners will help you create unforgettable memories.
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 transition duration-200">
          Contact Us
        </button>
      </section>
    </div>
  )
}