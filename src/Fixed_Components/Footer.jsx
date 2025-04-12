export default function Footer() {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Brand Info */}
        <div>
          <h2 className="text-xl font-bold text-red-500 mb-2">
            Free Palestine - <span className="text-green-500">BD</span>
          </h2>
          <p className="text-gray-400 text-sm">
            Standing with humanity, justice, and peace. United voices from Bangladesh to Palestine.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-red-400">Home</a></li>
            <li><a href="/about" className="hover:text-red-400">About</a></li>
            <li><a href="/support" className="hover:text-red-400">Support</a></li>
            <li><a href="/contact" className="hover:text-red-400">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info / Social */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect</h3>
          <p className="text-sm text-gray-400">Email: contact@palestinebd.org</p>
          <div className="flex space-x-4 mt-3">
            <a href="#" className="hover:text-red-400">Facebook</a>
            <a href="#" className="hover:text-red-400">Twitter</a>
            <a href="#" className="hover:text-red-400">Instagram</a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-500 text-sm border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Free Palestine - BD. All rights reserved.
      </div>
    </footer>
  );
}
