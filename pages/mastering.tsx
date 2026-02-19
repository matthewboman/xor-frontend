import Layout from '../components/layouts'
import Release from "../components/min_release"

export default function Mastering() {
  const mastering = [
    {
        title:        "Ants d'ants // Blue Goose Beat",
        release_date: "January 3, 2026",
        info:         "cassingle released 1/3/2026 at RIBBON TIME! at LamplightAVL edition of ~100",
        image_url:    "https://f4.bcbits.com/img/a2708068633_10.jpg",
        html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2760681314/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://swannatopia.bandcamp.com/album/ants-dants-blue-goose-beat">Ants D&#39;Ants / Blue Goose Beat by XOR / Superflower</a></iframe>`,
        bandcamp:     "https://swannatopia.bandcamp.com/album/ants-dants-blue-goose-beat",
        link:         "https://swannatopia.bandcamp.com/album/ants-dants-blue-goose-beat",
        spotify:      ""
    },
    {
      title:        "Ambient Radiance (compilation)",
      release_date: "April 20, 2024",
      info:         "Ambient compillation currated by Swannatopia for the Black Mountain College ReHappening",
      image_url:    "https://f4.bcbits.com/img/a3328792621_16.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2328967875/size=small/bgcol=333333/linkcol=e99708/track=2684916475/transparent=true/" seamless><a href="https://swannatopia.bandcamp.com/album/ambient-radiance">Ambient Radiance by Swannatopia presents:</a></iframe>`,
      bandcamp:     "https://swannatopia.bandcamp.com/track/red-xor",
      link:         "https://swannatopia.bandcamp.com/track/red-xor",
      spotify:      ""
    },
    {
      title:        "St. Sol - Limina",
      release_date: "September 24, 2021",
      info:         "",
      image_url:    "https://f4.bcbits.com/img/a3750920263_10.jpg",
      html:         ``,
      bandcamp:     "https://solsolsolmusic.bandcamp.com/album/limina",
      link:         "https://solsolsolmusic.bandcamp.com/album/limina",
      spotify:      "https://open.spotify.com/album/33rFuE9Om1Rm23ohTsizD8?si=j7wdEiBORbSVrWMeS62LTQ"
    },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mt-4 mb-8 flex justify-center -mx-4'>
          <div className="w-full md:w-3/4 p-4">
            <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>
              <h2 className='font-semibold text-2xl mb-2'>Mastering</h2>

              <div className='mb-8'>
                <p>for quotes email xor[dot]music[at]protonmail[dot]com</p>
              </div>

              {
                mastering.map((album) => <Release release={album} />)
              }

            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}