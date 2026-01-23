import Layout from '../components/layouts'

export default function Bio() {
  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mt-4 mb-8 flex justify-center -mx-4'>
          <div className="w-full md:w-3/4 p-4">
            <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>
              <p className="mb-4">
                Matthew lives atop a mountain on the eastern continental divide. He grows over a dozen
                fruit and nut trees. Ever year, he plants more berries. He has been
                bitten by a copperhead and would not recommend it. He also makes music
                and art under the name XOR.
              </p>
              <p className="my-4">
                XOR is a regular collaborator with the <a href="https://swannatopia.com/" target="_blank" className='orange-text'>Swannatopia experimental art club</a>.
                Many great artists have made music videos for the tracks on
                his upcoming album <a href="https://xoravl.bandcamp.com/album/present-tense" target="_blank" className='orange-text'>Present Tense</a>.
              </p>
              <div className='mt-[3rem] flex justify-center'>
                <img src="./images/drones.jpg" className='rounded-lg'/>
              </div>
              <p className='mb-[2rem] mt-2 text-sm'>
                credit: <a href="https://www.instagram.com/chajbo/" target="_blank" className="orange-text">Charlie Boss</a>
              </p>
              <p className='my-4'>
                XOR is a type of logic gate. It is pronounced "ex-or", not "zor." Matthew picked
                the name when he was learning computers because it was more flyer-friendly than
                "Fuck Jamz," the name he was previously recording under. While aesthically nice
                in print, he regrets not choosing a more easily pronounceable name.
              </p>
              <hr className="white my-8" />
              <div className='flex flex-wrap justify-center'>
                <div>xor[dot]whatever[at]gmail</div>
                <span className='px-2'>||</span>
                <div>xor[dot]music[at]proton</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}