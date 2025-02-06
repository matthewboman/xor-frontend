import Layout from '../components/layouts'
import Release from "../components/release"

export default function BannikKnob() {
  
  const releases = [
    {
      title:        "Moss and Mud",
      release_date: "January 17, 2025",
      info:         "BKE 002. Zine about Appalachian nature and Hurricane Helene by Mica Rutkowski. Drone track by XOR.",
      image_url:    "https://f4.bcbits.com/img/a3358122626_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4247787159/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://bannikknobeditions.bandcamp.com/album/moss-and-mud">Moss and Mud by XOR</a></iframe>`,
      bandcamp:     "https://bannikknobeditions.bandcamp.com/album/moss-and-mud",
      spotify:      "https://open.spotify.com/track/5VpqvjBzQnrC7czlxgVcry?si=3bbd6e18e5f740e3"
    },
    {
      title:        "Animal Tracks",
      release_date: "September 27, 2024",
      info:         "BKE 001. Compilation of imaginary bands and accompanying zine of band bios and animal drawings",
      image_url:    "https://f4.bcbits.com/img/a3150822772_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3831205725/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://bannikknobeditions.bandcamp.com/album/animal-tracks">animal tracks by XOR</a></iframe>`,
      bandcamp:     "https://bannikknobeditions.bandcamp.com/album/animal-tracks",
      spotify:      ""
    },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mt-4 mb-8 flex flex-wrap -mx-4'>
          <div className="w-full md:w-1/2 p-4 ">
            <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>
              <div className='mb-8'>
               <h2 className='font-semibold text-2xl mb-3'>
                  Bannik Knob
                </h2>
                <p className='mb-3'>
                  Bannik Knob is a studio and artist residency in the mountains of WNC.
                </p>
                <p className='mb-3'>
                  Our goal is to provide an inspirational space for musicians, 
                  visual artists, and writers to create in nature. We also want to
                  help these projects see the light of day.
                </p>
                <p className='mb-3'>
                  Money is fake. The studio is free to use, either recording yourself
                  or working with us. We also offer a residency people outside of the 
                  region to stay and work on projects.
                </p>
              </div>
              <hr className='white'/>
              <div className='my-8'>
                <p className='mb-3'>
                  A Bannik is an Eastern European bathhouse spirit. The mountainside 
                  is often full of rainforest-like moisture and billowing 
                  clouds that travel up from the valley and surround the house, making one
                  feel as though they're are in a steamy sauna. 
                </p>
                <p className='mb-3'>
                  A knob is a geographic term specific to the Applachian and Ozark mountains, l
                  arger than a hill, but just shy of being its own mountain. 
                </p>
              </div>
              <hr className='white'/>
              <div className='my-8'>
                <p className='my-3'>
                  if interested, contact bannik[dot]knob[at]gmail
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <img src="images/bannik-knob.jpg" className='rounded-lg'/>
          </div>
        </div>
        <hr className='white'/>
        <div className='my-8 text-center'>
          <h2 className='font-semibold text-2xl mb'>Releases</h2>
        </div>
        <div className="flex flex-wrap -mx-4">
          {
            releases.map((release) => <Release release={release} />)
          } 
        </div>
      </div>
    </Layout>
  )
} 