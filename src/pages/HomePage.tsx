import { useNavigate } from "react-router-dom";
import quizImage from "../assets/quizImage.jpg";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <main className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="max-w-xl w-full bg-white shadow-lg rounded-lg p-6">
        {/* Heading */}
        <h1 className="text-3xl font-bold text-center text-blue-700 mb-6">
          Welcome to Quiz App
        </h1>

        {/* Quiz Image */}
        <img
          src={quizImage}
          alt="Quiz preview"
          className="w-full h-full object-cover rounded-md mb-6"
        />

        {/* Form */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/test");
          }}
          className="space-y-4"
          role="form"
        >
          {/* Name Field */}
          <div>
            <label
              htmlFor="user-name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="user-name"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="user-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="user-email"
              required
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              Take Test
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
