import Layout  from '../components/layouts'
import Release from "../components/release"
import Video   from "../components/video"

export default function Covers() {
  const covers = [
    {
      title:        "Book of Love",
      release_date: "recorded March 2021, released April 2021",
      info:         "origially by The Magnetic Fields",
      image_url:    "https://f4.bcbits.com/img/a0284205641_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=925132810/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/track/book-of-love">Book of Love by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/track/book-of-love",
      spotify:      "https://open.spotify.com/track/3LTscaPVwVC6NfQHbpET5n?si=f4470de885284349",
      official:     true
    },
    {
      title:        "Temptation",
      release_date: "recorded February 2021, released March 2021",
      info:         "originally by New Order",
      image_url:    "https://f4.bcbits.com/img/a2939593136_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=2558425736/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/track/temptation">Temptation by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/track/temptation",
      spotify:      "https://open.spotify.com/track/43bW8qTZof99U6iZvlLeqC?si=5569e99b742c4e78",
      official:     true
    },
    {
      title:        "God Called in Sick Today",
      release_date: "recorded January 2021, released February 2021",
      info:         "origionally by AFI",
      image_url:    "https://f4.bcbits.com/img/a2089346540_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=3248374599/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/track/god-called-in-sick-today">God Called in Sick Today by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/track/god-called-in-sick-today",
      spotify:      "https://open.spotify.com/track/1hp8EMoctFMTiUTzLXIl2f?si=99720172840249ce",
      official:     true
    },
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mt-4 mb-8 flex justify-center -mx-4'>
          <div className="w-full md:w-3/4 p-4">
            <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>
              {
                covers.map((release) => <Release key={release.title} release={release} /> )
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}