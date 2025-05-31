export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">EventHub</h3>
              <p className="text-gray-400">
                Making your special moments unforgettable with professional event planning services.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Home</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Services</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Events</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Birthdays</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Weddings</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Parties</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Corporate</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact Us</h4>
              <address className="text-gray-400 not-italic">
                <p>123 Event Street</p>
                <p>New York, NY 10001</p>
                <p>Phone: (123) 456-7890</p>
                <p>Email: info@eventhub.com</p>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} EventHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }