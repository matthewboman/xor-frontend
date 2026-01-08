import Layout  from '../components/layouts'
import Release from "../components/min_release"

export default function Remixes() {
  const remixes = [
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
      title:        "BOB11",
      release_date: "May 16, 2025",
      info:         "by Social Caterpillar",
      image_url:    "https://f4.bcbits.com/img/a0555907959_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2709579772/size=small/bgcol=333333/linkcol=e99708/track=2188749201/transparent=true/" seamless><a href="https://socialcaterpillar.bandcamp.com/album/disappearing-mouths-2">Disappearing Mouths by Social Caterpillar</a></iframe>`,
      bandcamp:     "https://socialcaterpillar.bandcamp.com/track/bob11-xor-remix-2",
      spotify:      "https://open.spotify.com/track/4J7uu1PWNjU4xX6QUJXZkq?si=cb9b34e2f7d949c7",
      official:     true
    },
    {
        title:        "Unfurling Putridy (Hurricane Helene remix)",
        release_date: "November 11, 2024",
        info:         "by Cave Grave",
        image_url:    "",
        html:         ``,
        bandcamp:     "",
        spotify:      "",
        src:          `<iframe class="w-full h-full" src="https://www.youtube.com/embed/1QK06aNspfI?si=tk2-8eJ_-JzgChVU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
        link:         "https://youtu.be/1QK06aNspfI",
        official:     false
    },
    {
        title:        "Love is Surrender",
        release_date: "May 3, 2024",
        info:         "by Vexagon",
        image_url:    "https://f4.bcbits.com/img/a2747915344_16.jpg",
        html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=3548641382/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/track/love-is-surrender-remix">Love is Surrender (remix) by Vexagon, XOR</a></iframe>`,
        bandcamp:     "https://xoravl.bandcamp.com/track/love-is-surrender-remix",
        spotify:      "https://open.spotify.com/track/44GHKKENSokYkOkBhXQ3WV?si=4387b5150bb245b3",
        official:     true
    },
    // {
    //     title:        "Mercy",
    //     release_date: "",
    //     info:         "by Bleached Cross",
    //     image_url:    "",
    //     html:         ``,
    //     bandcamp:     "",
    //     spotify:      ""
    // },
    {
      title:        "Ours",
      release_date: "October 23, 2023",
      info:         "by Shadow Age",
      image_url:    "https://f4.bcbits.com/img/a3876742731_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=3669168228/size=small/bgcol=333333/linkcol=e99708/track=1646407661/transparent=true/" seamless><a href="https://shadowage.bandcamp.com/album/ours-ep">Ours EP by Shadow Age</a></iframe>`,
      bandcamp:     "https://shadowage.bandcamp.com/track/ours-x-r-dream-mix",
      spotify:      "https://open.spotify.com/track/64Rm1TcRbzWZJbFzmiRV6z?si=f199f161c0204067",
      official:     true
    },
    {
      title:        "Orkney",
      release_date: "August 5, 2022",
      info:         "by Apparitioner",
      image_url:    "https://i.scdn.co/image/ab67616d0000b2730da1da0b595e8738a19cd164",
      html:         ``,
      bandcamp:     "",
      spotify:      "https://open.spotify.com/album/2fY5Q4aZnAp7iipGgE7eTq?si=UBR1g2STTIG6QI77u5Isvg",
      official:     true
    },
    {
      title:        "Endless Night",
      release_date: "April 22, 2022",
      info:         "by Bedroom Wounds",
      image_url:    "https://f4.bcbits.com/img/a0164165200_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=3343782220/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://mindovermatterrecords.bandcamp.com/track/endless-night-xor-remix">Endless Night (XOR Remix) by Bedroom Wounds</a></iframe>`,
      bandcamp:     "https://mindovermatterrecords.bandcamp.com/track/endless-night-xor-remix",
      spotify:      "https://open.spotify.com/track/5TKH7khbEfOQks3MYc9Q0a?si=b8a66668cd62473e",
      official:     true
    },
    {
      title:        "Curses",
      release_date: "April 1, 2022",
      info:         "by Bonnie and the Mere Mortals",
      image_url:    "https://f4.bcbits.com/img/a1932449018_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/track=852027191/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://bonnieandthemeremortals.bandcamp.com/track/curses-xor-remix">CURSES - XOR remix by Bonnie &amp; the Mere Mortals, XOR</a></iframe>`,
      bandcamp:     "https://bonnieandthemeremortals.bandcamp.com/track/curses-xor-remix",
      spotify:      "https://open.spotify.com/track/1B2anwyz5nzRS9oEnNJguH?si=0c6db73e82504c6f",
      official:     true
    },
    {
      title:        "Paper Flowers",
      release_date: "October 27, 2021",
      info:         "by Cold Choir",
      image_url:    "https://f4.bcbits.com/img/a2969586294_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1525251721/size=small/bgcol=333333/linkcol=e99708/track=302830159/transparent=true/" seamless><a href="https://xoravl.bandcamp.com/album/xor-cold-choir-re-mixes">xor / cold choir - re.mixes by xor</a></iframe>`,
      bandcamp:     "https://xoravl.bandcamp.com/album/xor-cold-choir-re-mixes",
      spotify:      "https://open.spotify.com/album/5Vc0n69q26nIb7VdHbVVTM?si=7CCClH3lQ-6QymBn2Uik-A",
      official:     true
    },
    {
      title:        "Cigarettes",
      release_date: "September 29, 2021",
      info:         "by Douglas",
      image_url:    "https://f4.bcbits.com/img/a1167568684_16.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1452268740/size=small/bgcol=333333/linkcol=e99708/track=2141396974/transparent=true/" seamless><a href="https://amydouglaswhite.bandcamp.com/album/ashes-remix-ep">Ashes Remix EP by Douglas</a></iframe>`,
      bandcamp:     "https://amydouglaswhite.bandcamp.com/track/cigarettes-xor-remix-2",
      spotify:      "https://open.spotify.com/track/7plj97H1NAKSGzec8So6yP?si=2deacba814f74b33",
      official:     true
    },
    {
      title:        "Void",
      release_date: "August 7, 2020",
      info:         "by Harsh Realm",
      image_url:    "https://f4.bcbits.com/img/a4275373755_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2516209965/size=small/bgcol=333333/linkcol=e99708/transparent=true/" seamless><a href="https://harshrealm.bandcamp.com/album/harsh-realm-xor">Harsh Realm + XOR by Harsh Realm</a></iframe>`,
      bandcamp:     "https://harshrealm.bandcamp.com/album/harsh-realm-xor",
      spotify:      "https://open.spotify.com/track/51I15N0dWmUtW4WgeeqbSR?si=5eb00005036a45a3",
      official:     true
    },
    {
      title:        "Free and Young",
      release_date: "June 23, 2020",
      info:         "by The Holy Circle",
      image_url:    "https://f4.bcbits.com/img/a1831866173_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=196076977/size=small/bgcol=333333/linkcol=e99708/track=884386662/transparent=true/" seamless><a href="https://deathbombarc.bandcamp.com/album/heart-in-a-vice">Heart in a Vice by The Holy Circle</a></iframe>`,
      bandcamp:     "https://deathbombarc.bandcamp.com/album/heart-in-a-vice",
      spotify:      "https://open.spotify.com/track/1H6zbyBevqkv7bzFmY1PJk?si=733a27f95c0b4899",
      official:     true
    },
    {
      title:        "Calm",
      release_date: "March 27, 2022",
      info:         "by Secret Shame",
      image_url:    "https://f4.bcbits.com/img/a0580034947_10.jpg",
      html:         `<iframe style="border: 0; width: 100%; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=1268115942/size=small/bgcol=333333/linkcol=e99708/track=1805200233/transparent=true/" seamless><a href="https://secretshame.bandcamp.com/album/dark-synthetics-remixes">Dark Synthetics (Remixes) by Secret Shame</a></iframe>`,
      bandcamp:     "https://secretshame.bandcamp.com/album/dark-synthetics-remixes",
      spotify:      "https://open.spotify.com/album/4RVP40h90PTkDJ7cOX5d38?si=vtIUkHiiT8uJAkyC-qBh-g",
      official:     true
    }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mt-4 mb-8 flex justify-center -mx-4'>
          <div className="w-full md:w-3/4 p-4">
            <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg'>
              {
                remixes.map((release) => <Release key={release.title} release={release} /> )
              }
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}