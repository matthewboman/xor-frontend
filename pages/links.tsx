import Layout  from '../components/layouts'

export default function Links() {
    const listen = [
      // { url: '', title: 'tidal' },
      { url: 'https://open.spotify.com/artist/1IoBqMaTc6jauT6Am80dqg', title: 'spotify' },
      { url: 'https://music.apple.com/us/artist/xor/1483609660', title: 'apple' },
      { url: 'https://music.amazon.com/artists/B005E4ONO6/xor', title: 'amazon' },
    ]

    const follow = [
      { url: 'https://www.bandsintown.com/a/15487510-xor', title: 'bands in town' },
      { url: 'https://bsky.app/profile/xor-music.bsky.social', title: 'bluesky' },
      { url: 'https://www.instagram.com/xor_music/', title: 'instagram' },
      // { url: '', title: '' },
    ]

    return (
      <Layout>
        <div className="container mx-auto px-4 mb-10">
          <div className='mt-4 mb-8 flex justify-center -mx-4'>
            <div className="w-full md:w-3/4 p-4">
              <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>

              <div className='relative w-full aspect-16-9 rounded-lg mb-8'>
                <iframe className="w-full h-full" src="https://www.youtube.com/embed/JQsqhtAY-aQ?si=evnYBQ9jzDn6C4lN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              </div>

              <a href="https://xoravl.bandcamp.com/" target='_blank' className="block mb-1 hover-orange">bandcamp</a>
              <a href="https://www.youtube.com/@xor5352" target='_blank' className="block mb-1 hover-orange">youtube</a>
              <a href="https://github.com/matthewboman" target='_blank' className="block mb-1 hover-orange">github</a>

              <h2 className='mt-4 mb-1 font-semibold'>- listen -</h2>
              { listen.map(l => <a href={l.url} target='_blank' className="block mb-1 hover-orange">{l.title}</a>)}

              <h2 className='mt-4 mb-1 font-semibold'>- follow -</h2>
              { follow.map(f => <a href={f.url} target='_blank' className="block mb-1 hover-orange">{f.title}</a>)}

              </div>
            </div>
          </div>
        </div>
      </Layout>
    )
}