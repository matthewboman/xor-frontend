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
    <footer className="shadow-md navbar w-full flex absolute bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center sm:flex-row sm:justify-between min-h-[3rem]">
          <div className="flex order-2 sm:order-none gap-2">
            {icons1.map((i) => (
              <Icon link={i.link} name={i.name} />
            ))}
          </div>
          <div className="order-first sm:order-none px-4">
            <Drone />
          </div>
          <div className="flex order-3 sm:order-none gap-2">
            {icons2.map((i) => (
              <Icon link={i.link} name={i.name} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer