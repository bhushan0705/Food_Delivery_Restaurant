import Link from "next/link";

export default function NavbarUser() {
  return (
    <nav className="w-full bg-blue-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold hover:text-yellow-300">
          Logo
        </Link>

        {/* Links */}
        <ul className="flex items-center gap-6">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300 transition-colors">
              Contact
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              Cart
            </Link>
          </li>
          <li>
            <Link href={'/restaurant/login'} className="hover:text-yellow-300 transition-colors">
            
              OwnerLogin
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              UserLogin
            </Link>
          </li>
          <li>
            <Link href="#" className="hover:text-yellow-300 transition-colors">
              DeliveryLogin
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
