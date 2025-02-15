import Drone  from '../components/drone'
import Layout from '../components/layouts'

export default function Bio() {
  return (
    <Layout>
      <div className='my-8 grid grid-cols-8 '>
        <div className='col-span-4 col-start-3 p-[4rem] bg-black bg-opacity-40 rounded-lg text-lg'>
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
          <div className='my-[3rem] flex justify-center'>
            <img src="./images/1.jpeg" className='rounded-lg'/>
          </div>
          <p className='my-4'>
            With haunting melodies, pulsating rhythms, and seductive hooks, XOR propels 
            electronic music into a realm of sonic uncertainty. At times ambient, at times 
            darkwave or synthpop, the tracks draw listeners into a labyrinthine soundscape 
            where the familiar dissolves into the enigmatic.
          </p> 
          <div className='my-[3rem] flex justify-center'>
            <img src="./images/temp-drones.png" className='rounded-lg'/>
          </div>
          <p className='my-4'>
            Matthew had been recording under various monikers over the past decade before XOR. 
            Somewhat arbitrarily, he named the project XOR after the logic gate inspired by 
            his burgeoning interest in software development. His debut full-length was an electropop 
            album, written and recorded amidst the pandemic's disquiet.
          </p>
          <p className='my-4'>
            In recent years, Matthew began exploring the world of modular synthesizers, reshaping 
            mundane days of remote work into impromptu compositions he would later live-stream 
            against sunsets or amidst the flowers in his garden. "Ephemeral Tracks, vol. 1" emerged 
            in 2022 from these sonic experiments, followed by the 2023 release of “vol. 2.” The name 
            draws inspiration from the ephemeral woodland wildflowers that briefly bloom in Appalachia's 
            early spring, mirroring the transient nature of his modular-first compositions.
          </p>
          <p className='my-4'>
            In 2023, XOR also released the EP "beyond the tall trees somewhere.” Branching out from his 
            previously more straightforward darkwave, the five tracks explore the complexities of human 
            existence, the nebulous boundaries between natural and artificial, and the discomfort of 
            existing in a dying world.
          </p>
          <div className='my-6'>
            <Drone />  
          </div>
          <p className='mt-4 mb-8 flex justify-center'>
            xor[dot]whatever[at]gmail
            <span className='px-2'>||</span>
            xor[dot]music[at]proton
          </p>
        </div>
      </div>
    </Layout>
  )
} 