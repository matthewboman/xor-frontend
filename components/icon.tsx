import Link from 'next/link'
import * as SimpleIcons from 'simple-icons'

interface IconProps {
  link: string
  name: string
}

const Icon = ({ icon }: IconProps) => {
  return (
    <div className='p-2'>
      <Link href={icon.link} target="_blank" className="text-gray-800 hover:text-gray-600 block">
          <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={SimpleIcons[icon.name].path} />
        </svg>
      </Link>
    </div>
  )
}

export default Icon