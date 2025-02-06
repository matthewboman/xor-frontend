import { useState } from 'react'

interface Link {
  title: string
  url:   string
}

interface DropdownProps {
  title: string
  links: Link[]
}

const Dropdown = ({ title, links }: DropdownProps) => {
  const [ isOpen, setIsOpen ] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-2 rounded-md focus:outline-none"
      >
        { title }
      </button>

      { isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
          {
            links.map((link, i) => (
              <a key={i} href={ link.url } className="block px-4 py-2 text-gray-800 hover:bg-gray-100">
                { link.title }
              </a>
            ))
          }     
        </div>
      ) }
    </div>
  )
}

export default Dropdown