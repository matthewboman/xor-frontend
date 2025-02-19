import Drone from './drone'
import Icon  from './icon'

const Footer = () => {
  const icons1 = [
    {
      link: 'https://github.com/matthewboman',
      name: 'siGithub'
    },
    {
      link: 'https://xoravl.bandcamp.com',
      name: 'siBandcamp'
    },
    {
      link: 'https://bsky.app/profile/xor-music.bsky.social',
      name: 'siBluesky'
    },
  ]

  const icons2 = [
    {
      link: 'https://www.instagram.com/xor_music',
      name: 'siInstagram'
    },
    {
      link: 'https://www.youtube.com/@xor5352',
      name: 'siYoutube'
    },
    {
      link: 'https://open.spotify.com/artist/1IoBqMaTc6jauT6Am80dqg',
      name: 'siSpotify'
    },
  ]

  return (
    <footer className="shadow-md navbar absolute bottom-0 w-full flex">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            {
              icons1.map(i => <Icon icon={i} />)
            }
            <div className='px-4'>
              <Drone />
            </div>
            {
              icons2.map(i => <Icon icon={i} />)
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer