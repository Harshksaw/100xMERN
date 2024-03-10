import Link from "next/link";

function Navbar() {
  return (
    <nav className="bg-gray-800 flex justify-between items-center p-4 z-2">
      {/* Brand Name or Logo */}
      <Link href="/" className="text-white text-xl font-bold">
        Your Brand
      </Link>

      {/* Navigation Links */}
      <ul className="flex space-x-4">
        <li>
          <Link href="/about" className="text-white hover:text-gray-400">
            About
          </Link>
        </li>
        <li>
          <Link href="/services" className="text-white hover:text-gray-400">
            Services
          </Link>
        </li>
        <li>
          <Link href="/blog" className="text-white hover:text-gray-400">
            Blog
          </Link>
        </li>
      </ul>

      {/* Authentication Buttons */}
      <div className="flex space-x-2">
        <Link
          href="/signup"
          className="bg-blue-500 text-white hover:bg-blue-700 py-2 px-4 rounded-md"
        >
          Sign Up
        </Link>
        <Link
          href="/signin"
          className="bg-transparent border border-white hover:bg-gray-800 text-white hover:text-gray-400 py-2 px-4 rounded-md"
        >
          Sign In
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
