import { useState } from 'react'
import Link from 'next/link'
import Dropdown from './dropdown'

const Navbar = () => {
  const [ isOpen, setIsOpen ] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  const links = [
    { title: 'bio', url: '/bio' },
    { title: 'videos', url: '/videos' },
  ]

  const dropdowns = [
    {
      title: 'music',
      links: [
        {
          title: "releases",
          url:   "/releases"
        },
        {
          title: "remixes",
          url:   "/remixes"
        },
        {
          title: "covers",
          url:   "/covers"
        },
        {
          title: "compilations",
          url:   "/compilations"
        }
      ]
    },
    {
      title: 'performances',
      links: [
        {
          title: 'upcomming',
          url:   '/upcoming-performances'
        },
        {
          title: 'previous',
          url:   '/previous-performances'
        }
      ]
    }
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
            {
              dropdowns.map((d, i) => (
                <Dropdown key={i} title={d.title} links={d.links} />
              ))
            }
            {
              links.map((link, i) => (
                <Link key={i} href={ link.url } className="text-gray-800 hover:text-gray-600">
                  { link.title }
                </Link>
              ))
            }
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
            {
              dropdowns.map((d, i) => (
                <Dropdown key={i} title={d.title} links={d.links} />
              ))
            }
            {
              links.map((link, i) => (
                <Link key={i} href={ link.url } className="block text-gray-800 hover:text-gray-600">
                  { link.title }
                </Link>
              ))
            }
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;