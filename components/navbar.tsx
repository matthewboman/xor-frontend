import { useState } from 'react'
import Link from 'next/link'
import Dropdown from './dropdown'

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const etc = [
    {
      title: 'mastering || mixing',
      url:   '/mastering'
    },
    {
      title: 'bannik knob',
      url:   '/bannik-knob'
    },
    {
      title: 'installations',
      url:   '/installations'
    }
  ]

  const music = [
    {
      title: "releases",
      url:   "/releases"
    },
    {
      title: "remixes",
      url:   "/remixes"
    },
    {
      title: "compilations",
      url:   "/compilations"
    },
    {
      title: "covers",
      url:   "/covers"
    },
  ]

  return (
    <nav className="shadow-md navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-semibold text-gray-800">
              XOR
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-4 items-center">
            <Dropdown title={'music'} links={music} />
            <Link href="/videos" className="text-gray-800 hover:text-gray-600">
              videos
            </Link>
            <Link href="/performances" className="text-gray-800 hover:text-gray-600">
              performances
            </Link>
            <Link href="/bio" className="text-gray-800 hover:text-gray-600">
              bio
            </Link>
            <Dropdown title={'etc'} links={etc} />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 hover:text-gray-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Dropdown title={'music'} links={music} />
            <Link href="/videos" className="text-gray-800 hover:text-gray-600 block">
              videos
            </Link>
            <Link href="/performances" className="text-gray-800 hover:text-gray-600 block">
              performances
            </Link>
            <Link href="/bio" className="text-gray-800 hover:text-gray-600 block">
              bio
            </Link>
            <Dropdown title={'etc'} links={etc} />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar