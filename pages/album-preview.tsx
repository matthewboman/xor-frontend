import Layout from '../components/layouts'

export default function Tracks() {
  const tracks = [
    { name: 'unwound', url: 'audio/present-tense/unwound.wav' },
    { name: 'anomie', url: 'audio/present-tense/anomie.wav' },
    { name: 'laurel holler', url: 'audio/present-tense/laurel-holler.wav' },
    { name: 'swells', url: 'audio/present-tense/swells.wav' },
    { name: 'wave returns to the ocean', url: 'audio/present-tense/wave-returns-to-the-ocean.wav' },
    { name: 'ever changing', url: 'audio/present-tense/ever-changing.wav' },
    { name: 'hell', url: 'audio/present-tense/hell.wav' },
    { name: 'the malady of the infinite', url: 'audio/present-tense/the-malady-of-the-infinite.wav' },

  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className="mt-4">
          {
            tracks.map((track) => (
              <div key={track.name} className='mb-4'>
                <div className='mb-1 px-2'>{ track.name }</div>
                <audio controls>
                  <source src={track.url}/>
                </audio>
              </div>
            ))
          }
        </div>
      </div>
    </Layout>
  )
}