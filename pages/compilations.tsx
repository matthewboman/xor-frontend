import Layout from '../components/layouts'
import Release from '../components/release'

export default function Compilations() {
  const compilations = [
    // {
    //     title:        "",
    //     release_date: "",
    //     info:         "",
    //     image_url:    "",
    //     html:         ``,
    //     bandcamp:     "",
    //     spotify:      ""
    // },
    {
      title:        "Animal Tracks",
      release_date: "September 27, 2024",
      info:         "Compilation of imaginary bands",
      image_url:    "https://f4.bcbits.com/img/a3150822772_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3831205725/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://bannikknobeditions.bandcamp.com/album/animal-tracks">animal tracks by XOR</a></iframe>`,
      bandcamp:     "https://bannikknobeditions.bandcamp.com/album/animal-tracks",
      spotify:      ""
    },
    {
      title:        "Red",
      release_date: "April 20, 2024",
      info:         "Part of Swannatopia's Ambient Radiance",
      image_url:    "https://f4.bcbits.com/img/a3328792621_16.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2328967875/size=small/bgcol=333333/linkcol=e99708/track=2684916475/transparent=true/" seamless><a href="https://swannatopia.bandcamp.com/album/ambient-radiance">Ambient Radiance by Swannatopia presents:</a></iframe>`,
      bandcamp:     "https://swannatopia.bandcamp.com/track/red-xor",
      spotify:      ""
    },
    {
      title:        "Long Blue Drive",
      release_date: "May 22, 2022",
      info:         "Collaboration with Nesting Doll",
      image_url:    "https://f4.bcbits.com/img/a2790042956_16.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4189595960/size=small/bgcol=333333/linkcol=e99708/track=1231039156/transparent=true/" seamless><a href="https://brokensoundtapes.bandcamp.com/album/unearthd-volume-ii">UNEARTH&#39;D Volume II by XOR (featuring Nesting Doll)</a></iframe>`,
      bandcamp:     "https://brokensoundtapes.bandcamp.com/album/unearthd-volume-ii",
      spotify:      ""
    },
    {
      title:        "Growing",
      release_date: "February 14, 2022",
      info:         "Written for Modular on the Mall's 'Rest in Patch: A Tribute to Patch Node'",
      image_url:    "https://f4.bcbits.com/img/a2326318924_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=30436996/size=small/bgcol=333333/linkcol=e99708/track=2573146530/transparent=true/" seamless><a href="https://modularonthemall.bandcamp.com/album/rest-in-patch-a-tribute-to-patch-node">Rest in Patch: A Tribute to Patch Node by XOR (Asheville)</a></iframe>`,
      bandcamp:     "https://modularonthemall.bandcamp.com/album/rest-in-patch-a-tribute-to-patch-node",
      spotify:      ""
    },
    {
      title:        "Asheville Cares About Beer",
      release_date: "January 8, 2021",
      info:         "All-Electribe piece recorded in one take. Written for Korg Electribe Showcase by Copyright 420",
      image_url:    "https://f4.bcbits.com/img/a2774410900_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2637886911/size=small/bgcol=333333/linkcol=e99708/track=1824640851/transparent=true/" seamless><a href="https://copyright420.bandcamp.com/album/korg-electribe-showcase-disc-1">Korg Electribe Showcase Disc 1 by KORG ELECTRIBE SHOWCASE</a></iframe>`,
      bandcamp:     "https://copyright420.bandcamp.com/album/korg-electribe-showcase-disc-1",
      spotify:      ""
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className="flex flex-wrap -mx-4">
          {
            compilations.map((comp) => <Release release={comp} />)
          } 
        </div>
      </div>
    </Layout>
  )
} 