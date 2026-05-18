"use client";
import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { data: session } = useSession();
  const role = session?.user?.role;

  return (
    <nav className="w-full bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo on the left */}
        <Link href="/" className="text-2xl font-bold tracking-wide hover:text-yellow-300">
          Logo
        </Link>

        {/* Links on the right */}
        <ul className="flex items-center gap-6 text-lg font-medium">
          <li>
            <Link href="/" className="hover:text-yellow-300 transition-colors">Home</Link>
          </li>
          <li>
            <Link href="/about" className="hover:text-yellow-300 transition-colors">About</Link>
          </li>
          <li>
            <Link href="/contact" className="hover:text-yellow-300 transition-colors">Contact</Link>
          </li>

          {/* Not logged in */}
          {!session && (
            <>
              <li><Link href="/restaurant/login" className="hover:text-yellow-300">Owner Login</Link></li>
              <li><Link href="/user/login" className="hover:text-yellow-300">User Login</Link></li>
              <li><Link href="/delivery/login" className="hover:text-yellow-300">Delivery Login</Link></li>
            </>
          )}

          {/* Role-based nav */}
          {role === "restaurant_owner" && (
            <li><Link href="/restaurant/dashboard" className="hover:text-yellow-300">Dashboard</Link></li>
          )}
          {role === "user" && (
            <li><Link href="/cart" className="hover:text-yellow-300">Cart</Link></li>
          )}
          {role === "delivery_boy" && (
            <li><Link href="/delivery/tasks" className="hover:text-yellow-300">Tasks</Link></li>
          )}

          {/* Logout */}
          {session && (
            <li>
              <button
                onClick={() => signOut({ callbackUrl: "/" })}
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded text-sm font-medium transition-colors"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}
