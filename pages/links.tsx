import Layout  from '../components/layouts'

export default function Links() {
    const listen = [
      { url: '', title: 'tidal' },
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
          <div className="flex flex-wrap -mx-4">
            <div className="p-[4rem] bg-black bg-opacity-40 rounded-lg">
            <a href="https://xoravl.bandcamp.com/" target='_blank' className="block mb-1">bandcamp</a>
            <a href="https://www.youtube.com/@xor5352" target='_blank' className="block mb-1">youtube</a>
            <a href="https://github.com/matthewboman" target='_blank' className="block mb-1">github</a>

            <h2 className='mt-3 mb-1 font-semibold'>- listen -</h2>
            { listen.map(l => <a href={l.url} target='_blank' className="block mb-1">{l.title}</a>)}

            <h2 className='mt-3 mb-1 font-semibold'>- follow -</h2>
            { follow.map(f => <a href={f.url} target='_blank' className="block mb-1">{f.title}</a>)}
            </div>
          </div>
        </div>
      </Layout>
    )
}