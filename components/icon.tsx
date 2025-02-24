import Link from 'next/link'
import * as SimpleIcons from 'simple-icons'

interface IconProps {
  link: string
  name: string
}

const Icon = ({ link, name }: IconProps) => {

  const iconData = SimpleIcons[name as keyof typeof SimpleIcons]

  return (
    <div className='p-2'>
      <Link href={link} target="_blank" className="text-gray-800 hover:text-gray-600 block">
          <svg
          role="img"
          viewBox="0 0 24 24"
          className="w-6 h-6 fill-current"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d={iconData?.path} />
        </svg>
      </Link>
    </div>
  )
}

export default Icon