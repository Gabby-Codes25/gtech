import { Inter } from "next/font/google";
import Cart from "./Cart/page"
import Products from "./Products/page";
import Contacts from "./Contacts/page";
import Signup from "./Signup/page";
import Login from "./Login/page";
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
          <header className="bg-gray-400 text-black">
            <div className="flex justify-between container mx-auto py-10 px-7">
              <h1 className="text-4xl font-bold">GTech</h1>
              <nav className="flex justify-between gap-[20.5rem] mt-4">
                <ul className="flex gap-[3rem]">
                  <li><a href="/" className="hover:text-gray-300">Home</a></li>
                  <li><a href="/Products" className="hover:text-gray-300">Products</a></li>
                  <li><a href="/Contacts" className="hover:text-gray-300">Contact</a></li>
                </ul>
                <ul className="flex gap-4">
                  <li><a href="/Signup" className="hover:text-gray-300">SignUp</a></li>
                  <li><a href="/Login" className="hover:text-gray-300">Login</a></li>
                  <li><a href="/Cart" className="hover:text-gray-300">Cart</a></li>
                </ul>
              </nav>
            </div>
          </header>
        {children}
      </body>
    </html>
  );
}
