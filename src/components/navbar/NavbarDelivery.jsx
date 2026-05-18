import Link from "next/link";

export default function NavbarDelivery() {
  return (
    <nav className="flex gap-4 p-4 bg-green-600 text-white">
        <ul>
            <li>
                <Link href={'#'}>Task</Link>
            </li>
            <li>
                <Link href={'#'}>History</Link>
            </li>
            <li>
                <Link href={'#'}>Profile</Link>
            </li>
        </ul>
    </nav>
  );
}
