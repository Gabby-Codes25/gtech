import { Inter } from "next/font/google";
import Cart from "./Cart/page"
import Products from "./Products/page";
import Contacts from "./Contacts/page";
import Signup from "./Signup/page";
import Login from "./Login/page";
import Link from "next/link"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "GTech",
  description: "Tech services & assessories",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <header className="bg-black text-white py-4">
        <div className="flex justify-between container mx-auto py-10 px-7">
          <Link href="/">
            <h1 className="text-4xl font-bold">GTech</h1>
          </Link>
          <nav className="flex justify-between gap-[20.5rem] mt-4">
            <ul className="flex gap-[3rem]">
              <li><Link href="/"><h1 className="hover:text-gray-300">Home</h1></Link></li>
              <li><Link href="/Products"><h1 className="hover:text-gray-300">Products</h1></Link></li>
              <li><Link href="/Contacts"><h1 className="hover:text-gray-300">Contact</h1></Link></li>
            </ul>
            <ul className="flex gap-4">
              <li><Link href="/Signup"><h1 className="hover:text-gray-300">SignUp</h1></Link></li>
              <li><Link href="/Login"><h1 className="hover:text-gray-300">Login</h1></Link></li>
              <li><Link href="/Cart"><h1 className="hover:text-gray-300">Cart</h1></Link></li>
            </ul>
          </nav>
        </div>
      </header>
        {children}
      </body>
    </html>
  );
}
