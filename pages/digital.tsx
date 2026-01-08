import Layout from '../components/layouts'

export default function Installations() {
  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mt-4 mb-8 flex justify-center -mx-4'>
          <div className="w-full md:w-3/4 p-4">
            <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>

              <div className='mb-8'>
                <h2 className='font-semibold text-xl'>
                  Infinity
                </h2>
                <p className='mb-4'>
                  A <a href="/infinity" className="orange-text">collection</a> of released
                  and unreleased loops that invites the user to change the length, start and stop,
                  speed, and volume.
                </p>
                <p className="mb-4">
                  The music is both interactive and generative, creating an infinite combination
                  of sounds and constantly evolving music experience.
                </p>
              </div>

              <hr className='my-4'/>

              <div className='mb-8'>
                <h2 className='font-semibold text-xl'>
                  Soundboard
                </h2>
                <p className="mb-4">
                  Life is more interesting with a sitcom sounboard. I made <a href="/soundboard" className="orange-text">this</a> for
                  Swannatopia's Puppet Fashion Show at the Black Mountain College Museum.
                </p>
                <p className="mb-4">
                  It's <a href="https://github.com/matthewboman/xor-frontend/blob/main/pages/soundboard.tsx" target="_blank" className="orange-text">open source</a>,
                  so you can copy it to make your own. Or just ask me to add sounds.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}