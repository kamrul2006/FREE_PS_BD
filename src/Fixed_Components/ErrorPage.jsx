import { Link } from "react-router-dom";

export default function ErrorPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white px-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">Page Not Found</h2>
        <p className="text-gray-400 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Link
          to="/"
          className="inline-block bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-3 rounded-xl transition"
        >
          Go Back Home
        </Link>
        <p className="mt-6 text-sm text-gray-500">
          Free Palestine - <span className="text-green-500">BD</span>
        </p>
      </div>
    </div>
  );
}
