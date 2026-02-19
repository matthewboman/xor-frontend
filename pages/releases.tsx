import Layout  from '../components/layouts'
import Release from "../components/min_release"

export default function Releases() {
  const releases = [
    {
      title:        "Present Tense",
      release_date: "Feburary 20, 2026",
      info:         "Ambient/drone album. Cello by Ashlee Booth. Mastered by Rafael Anton Irisarri",
      image_url:    "",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=200245700/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/present-tense">Present Tense by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/present-tense",
      spotify:      "",
      official:     true
    },
        {
      title:        "Generative #1",
      release_date: "October 2025",
      info:         "Edition of 15 one-of-a-kind cassette tapes recorded from a generative patch on a modular synth.",
      image_url:    "",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2949791388/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/generative-1-october-2025">Generative 1 - October 2025 by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/generative-1-october-2025",
      spotify:      "",
      official:     true
    },
    {
      title:        "Cantus in Memoriam Benjamin Britten",
      release_date: "September 26, 2025",
      info:         "Rendition of the Arvo Part composition. Mixed and mastered by Seamus Rooney at Drop of Sun.",
      image_url:    "",
      html:         ``,
      bandcamp:     "",
      spotify:      "",
      src:          `<iframe class="w-full h-full" src="https://www.youtube.com/embed/H947_VCSmes?si=lWbWe-XyU25iL1Iz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
      link:         "https://youtu.be/H947_VCSmes",
      official:     false
    },
    {
      title:        "Moss and Mud",
      release_date: "January 17, 2025",
      info:         "Drone track accompanying zine. Written and recorded at Bannik Knob.",
      image_url:    "https://f4.bcbits.com/img/a3358122626_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4247787159/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://bannikknobeditions.bandcamp.com/album/moss-and-mud">Moss and Mud by XOR</a></iframe>`,
      bandcamp:     "https://bannikknobeditions.bandcamp.com/album/moss-and-mud",
      spotify:      "https://open.spotify.com/track/5VpqvjBzQnrC7czlxgVcry?si=3bbd6e18e5f740e3",
      official:     true
    },
    {
      title:        "May the Forest Outlive Us",
      release_date: "June 20, 2024",
      info:         "Ambient EP on Ceremony of Seasons. Written and recorded at Bannik Knob. Mastered by Marcus Miller at HoloSuite Mastering.",
      image_url:    "https://f4.bcbits.com/img/a4145332224_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1681443368/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/may-the-forest-outlive-us">May The Forest Outlive Us by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/may-the-forest-outlive-us",
      spotify:      "https://open.spotify.com/album/0tPGTtmwGanOJDvYmzrmco?si=H8eJahqzSZCmvFq2yf-FTA",
      official:     true
    },
    {
      title:        "Waiting",
      release_date: "March 8, 2024",
      info:         "Synthpop single. Written and recorded at Bannik Knob. Mastered by Maurizio Baggio.",
      image_url:    "https://f4.bcbits.com/img/a1964065498_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=1654534229/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/track/waiting">waiting by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/track/waiting",
      spotify:      "https://open.spotify.com/track/6rjXakl9zNouVJLdTUfVaP?si=6516e1e3642a44ad",
      official:     true
    },
    {
      title:        "Ephemeral tracks, vol. 2",
      release_date: "June 9, 2023",
      info:         "Ambient, drone, and downtempo tracks. Written and recorded at Bannik Knob.",
      image_url:    "https://f4.bcbits.com/img/a2256821936_16.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3922441199/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/ephemeral-tracks-vol-2">Ephemeral Tracks, vol. 2 by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/ephemeral-tracks-vol-2",
      spotify:      "https://open.spotify.com/album/3hW6Vh5f1b050IzZSkK2fy?si=h-Q1S2DzRF2OfXX3IkCLmw",
      official:     true
    },
    {
      title:        "beyond the tall trees somewhere",
      release_date: "April 28, 2023",
      info:         "5 song synthpop/darkwave EP. Mixed and mastered by Adam McDaniel at Drop of Sun.",
      image_url:    "https://f4.bcbits.com/img/a2092478654_16.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1160131690/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/beyond-the-tall-trees-somewhere">beyond the tall trees somewhere by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/beyond-the-tall-trees-somewhere",
      spotify:      "https://open.spotify.com/album/3PBApVdacFrKqR15NjU7k9?si=8krnITUNSqONS8ebjtek0g",
      official:     true
    },
    // {
    //   title:        "On the spot",
    //   release_date: "March 20, 2023",
    //   info:         "Modular piece written for Ashevile's Modular on the Spot, September 2022.",
    //   image_url:    "https://f4.bcbits.com/img/a2025630180_10.jpg",
    //   html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=417905674/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/on-the-spot">on the spot by xor</a></iframe>`,
    //   bandcamp:     "https://xoravl.bandcamp.com/album/on-the-spot",
    //   spotify:      "",
    //   official:     true
    // },
    {
      title:        "Ephemeral tracks, vol. 1",
      release_date: "March 18, 2022",
      info:         "3 ambient/downtempo tracks recorded as a single session. Recorded and mixed at Bannik Knob. Mastered by Kri Samadhi.",
      image_url:    "https://f4.bcbits.com/img/a0272502562_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2018047/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/ephemeral-ep-1">Ephemeral EP 1 by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/ephemeral-ep-1",
      spotify:      "https://open.spotify.com/album/0VuYI8LrtI9YR0Fqpnsshj?si=0y84LQCBRYackf75K4svKw",
      official:     true
    },
    // {
    //   title:        "Long Shadows",
    //   release_date: "December 3, 2021",
    //   info:         "",
    //   image_url:    "https://f4.bcbits.com/img/a4098735292_10.jpg",
    //   html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=2324987125/size=small/bgcol=333333/linkcol=0f91ff/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/track/long-shadows">Long Shadows by xor</a></iframe>`,
    //   bandcamp:     "https://xoravl.bandcamp.com/track/long-shadows",
    //   spotify:      "",
    //   official:     true
    // },
    {
      title:        "XOR",
      release_date: "July 30, 2021",
      info:         "10 song darkwave/synthpop album written and recorded during quarantine. Mastered by Bryan Walthall.",
      image_url:    "https://f4.bcbits.com/img/a2868734555_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=922305637/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/xor">XOR by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/xor",
      spotify:      "https://open.spotify.com/album/0nSoeDg2hbTl4RBAxefSBz?si=v5vDapv5QB2iYIfs2CleTg",
      official:     true
    },
    {
      title:        "Sessions 4 & 2",
      release_date: "April 20, 2020",
      info:         "Genre-spanning electronic tracks written and recorded 2019-2020",
      image_url:    "https://f4.bcbits.com/img/a4059226071_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2085050368/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/sessions-4-2">sessions 4 &amp; 2 by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/sessions-4-2",
      spotify:      "https://open.spotify.com/album/7LUgjmjff3VljzLGIiW2Kb?si=LczD2UnYRhq0qT1iaT4I6w",
      official:     true
    },
    {
      title:        "Session 1",
      release_date: "April 20, 2019",
      info:         "Genre-spanning electronic music written and recorded 2018-2019",
      image_url:    "https://f4.bcbits.com/img/a3235946765_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2740945391/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/sessions-1">sessions 1 by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/sessions-1",
      spotify:      "https://open.spotify.com/album/6imTCxkweX9XnvmQMkK9De?si=WPPIb6qJTmGj1bqz81ipzQ",
      official:     true
    },
    // {
    //   title:        "Fractals (2)",
    //   release_date: "May 1, 2016",
    //   info:         "Ambient and downtempo music written and recorded in 2016",
    //   image_url:    "https://f4.bcbits.com/img/a1357197053_10.jpg",
    //   html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=557445508/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/fr-ct-ls-2016">FR△CT△LS (2016) by FR△CT△LS</a></iframe>`,
    //   bandcamp:     "https://xoravl.bandcamp.com/album/fr-ct-ls-2016",
    //   spotify:      "",
    //   official:     true
    // },
    // {
    //   title:        "Fractals",
    //   release_date: "November 1, 2015",
    //   info:         "Ambient music written and recorded in 2015",
    //   image_url:    "https://f4.bcbits.com/img/a2937665653_10.jpg",
    //   html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2874414542/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/fr-ct-ls-2015">FR△CT△LS (2015) by FR△CT△LS</a></iframe>`,
    //   bandcamp:     "https://xoravl.bandcamp.com/album/fr-ct-ls-2015",
    //   spotify:      "",
    //   official:     true
    // },
    // {
    //   title:        "before",
    //   release_date: "December 21, 2012",
    //   info:         "Assorted tracks written before and during 2012",
    //   image_url:    "https://f4.bcbits.com/img/a3784693788_10.jpg",
    //   html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3673301834/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/before">before by xor</a></iframe>`,
    //   bandcamp:     "https://xoravl.bandcamp.com/album/before",
    //   spotify:      "",
    //   official:     true
    // }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mt-4 mb-8 flex justify-center -mx-4'>
          <div className="w-full md:w-3/4 p-4">
            <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>
              {
                releases.map((release) => <Release key={release.title} release={release} /> )
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}