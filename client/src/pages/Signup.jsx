import AuthForm from '../components/AuthForm'

export default function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 p-10 bg-white rounded-xl shadow-lg z-10">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">Sign Up</h2>
          <p className="mt-2 text-sm text-gray-600">Create your account</p>
        </div>
        <AuthForm type="signup" />
      </div>
    </div>
  )
}