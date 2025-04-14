export default function Navbar() {
  return (
    <nav className="w-full bg-white shadow-sm mb-5 border-b border-gray-200">
      <ul className="flex gap-6 md:gap-12 lg:gap-16 xl:gap-20 p-4 max-w-7xl mx-auto justify-center">
        <li>
          <a href="/" className="hover:text-gray-600">
            Home
          </a>
        </li>
        <li>
          <a href="/destinations" className="hover:text-gray-600">
            Destinations
          </a>
        </li>
        <li>
          <a href="/guides" className="hover:text-gray-600">
            Travel Guides
          </a>
        </li>
        <li>
          <a href="/about" className="hover:text-gray-600">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
