import Drone  from '../components/drone'
import Layout from '../components/layouts'

export default function Bio() {
  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mt-4 mb-8 flex justify-center -mx-4'>
          <div className="w-full md:w-3/4 p-4">
            <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>
              <p className="mb-4">
                XOR is the experimental/electronic project of Matthew Boman.
              </p>
              <p className="my-4">
              His latest release Moss and Mud was written for the Ambient Farm Stroll
              portion of Swannatopia's How Do We Mark the Flood? installation at
              Warren Wilson farm. The event was part of a larger exhibition, Deer Freaks
              and Decoys, with the Black Mountain College Museum and focused on the aftermath
              of hurricane Helene.
              </p>
              <div className='mt-[3rem] flex justify-center'>
                <img src="./images/1.jpg" className='rounded-lg'/>
              </div>
              <p className='mb-[2rem] mt-2 text-sm'>
                credit: <a href="https://www.instagram.com/secretplaygroundphoto/" target="_blank">Jaysen</a>
              </p>
              <p className='my-4'>
                With haunting melodies, pulsating rhythms, and seductive hooks, XOR propels
                electronic music into a realm of sonic uncertainty. At times ambient, at times
                darkwave or synthpop, the tracks draw listeners into a labyrinthine soundscape
                where the familiar dissolves into the enigmatic.
              </p>
              <div className='mt-[3rem] flex justify-center'>
                <img src="./images/drones.jpg" className='rounded-lg'/>
              </div>
              <p className='mb-[2rem] mt-2 text-sm'>
                credit: <a href="https://www.instagram.com/chajbo/" target="_blank">Charlie Boss</a>
              </p>
              <p className='my-4'>
                Matthew had been recording under various monikers over the past decade before XOR.
                His debut full-length was an electropop album, written and recorded amidst the pandemic's disquiet.
              </p>
              <p className='my-4'>
                In recent years, Matthew began exploring the world of modular synthesizers, reshaping
                mundane days of remote work into impromptu compositions he would later live-stream
                against sunsets or amidst the flowers in his garden. "Ephemeral Tracks, vol. 1" emerged
                in 2022 from these sonic experiments, followed by the 2023 release of “vol. 2.” The name
                draws inspiration from the ephemeral woodland wildflowers that briefly bloom in Appalachia's
                early spring, mirroring the transient nature of his modular-first compositions.
              </p>
              {/* <p className='my-4'>
                In 2023, XOR also released the EP "beyond the tall trees somewhere.” Branching out from his
                previously more straightforward darkwave, the five tracks explore the complexities of human
                existence, the nebulous boundaries between natural and artificial, and the discomfort of
                existing in a dying world.
              </p> */}
              <p className='my-4'>
                In 2024, Matthew released 'May the Forest Outlive Us' as Ceremony of Season's summer release.
                The title of the album is for the Weelaunee forest and the movement to defend it
              </p>
              <div className='mt-4 mb-8 flex flex-wrap justify-center'>
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