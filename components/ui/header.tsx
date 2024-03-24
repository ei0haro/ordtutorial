import Link from 'next/link'
import MobileMenu from './mobile-menu'
import Image from "next/image";
import React from "react";

import PFP from "@/public/images/wiz.jpeg";

export default function Header() {
  return (
      <header className="absolute w-full z-30">
        <nav className="bg-gray-900 text-white p-4">
          <div className="container mx-auto flex justify-between items-center">

            <Link href="https://twitter.com/ei0haro">

                <Image
                    src={PFP} // The path to your image
                    alt="Brand Logo"
                    width={50} // Desired width
                    height={32} // Desired height, maintain aspect ratio
                />

            </Link>

              <div className="hidden md:flex space-x-4">
                  <a href="/" className="hover:bg-gray-700 p-1 rounded text-gray-300">Home</a>
                  <a href="/ord" className="hover:bg-gray-700 p-1 rounded text-gray-300">Ord tutorial</a>
                  <a href="/buildord" className="hover:bg-gray-700 p-1 rounded text-gray-300">Build ord for ARM64</a>
                  <a href="/ordtestnet" className="hover:bg-gray-700 p-1 rounded text-gray-300">Run ord on testnet</a>
              </div>

              <div className="md:hidden">
                  <MobileMenu/>

              </div>
          </div>
        </nav>

      </header>
  )
}
