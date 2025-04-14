export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-sm justify-center">
      <ul className="flex justify-between p-4 max-w-7xl mx-auto">
        <li className="px-4">
          <a href="/" className="hover:text-gray-600 text-lg">
            Home
          </a>
        </li>
        <li className="px-4">
          <a href="/destinations" className="hover:text-gray-600 text-lg">
            Destinations
          </a>
        </li>
        <li className="px-4">
          <a href="/guides" className="hover:text-gray-600 text-lg">
            Travel Guides
          </a>
        </li>
        <li className="px-4">
          <a href="/about" className="hover:text-gray-600 text-lg">
            About
          </a>
        </li>
      </ul>
    </nav>
  );
}
