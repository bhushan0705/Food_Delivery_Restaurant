import Link from "next/link";

export default function NavbarOwner() {
  return (
    <nav className="w-full bg-blue-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        <ul className="flex items-center justify-between w-full">
            <li>
                <Link href={'/restaurant/dashboard'}>Dashboard</Link>
            </li>
            <li>
                <Link href={'/owner/orders'}>Orders</Link>
            </li>
            <li>
                <Link href={'/owner/settings'}>Settings</Link>
            </li>
        </ul>
          </div>
    </nav>
  );
}
