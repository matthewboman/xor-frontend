import Layout from '../components/layouts'
import Video  from "../components/video"

export default function Remixes() {
  const videos = [
    // {
    //     title: "",
    //     link:  "",
    //     src:   ``
    // }
    {
      title: "Waiting",
      link:  "https://www.youtube.com/watch?v=mtcOXvs8s7g",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/mtcOXvs8s7g?si=qYLyK7-Cjhif6leD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "strawberries",
      link:  "https://www.youtube.com/watch?v=qBgr7odSwiQ",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/qBgr7odSwiQ?si=Xww1oDxCMVMUSUOh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "holy",
      link:  "https://www.youtube.com/watch?v=_5lG0VwjbpA",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/_5lG0VwjbpA?si=5gefmZ7SYdaiiDrr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "blursed",
      link:  "https://www.youtube.com/watch?v=AVnPERRmU1w",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/AVnPERRmU1w?si=7qMAOUa6-ROPB306" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "solstice",
      link:  "https://www.youtube.com/watch?v=AEVKPjziocc",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/AEVKPjziocc?si=HTDIR8buisyDWyVA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "winter",
      link:  "https://www.youtube.com/watch?v=nqPEb5bS_HE",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/nqPEb5bS_HE?si=WWesP5IzLH-1wcF-" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "growing",
      link:  "https://www.youtube.com/watch?v=xoQYoOAvTd0",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/xoQYoOAvTd0?si=7h9bh3kxoPJ-eG-e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Coreopsis",
      link:  "https://www.youtube.com/watch?v=UJsmu6hxb4c",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/UJsmu6hxb4c?si=zZTBDhkwrjWetBCy" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Tooth Worms",
      link:  "https://www.youtube.com/watch?v=Jwp7cDHzxhQ",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/Jwp7cDHzxhQ?si=cNvqHGcD1zn9jpg6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Path",
      link:  "https://www.youtube.com/watch?v=dxEd1bsk2ZY",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/dxEd1bsk2ZY?si=89wfhN2kKjKJuBxC" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    }
  ]

  const streams = [
    {
      title: "Return - modular ambient livestream (7-27-22)",
      link:  "https://www.youtube.com/watch?v=FpUEDAC5pkM",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/FpUEDAC5pkM?si=ie2M4acOynsHbTKZ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Ostara (generative Subharmonicon ambient 3-21-22)",
      link:  "https://www.youtube.com/watch?v=-zKiBOs4bpo",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/-zKiBOs4bpo?si=q0fo8UhSHx9txYlz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Blursed (modular downtempo 1-16-22)",
      link:  "https://www.youtube.com/watch?v=1cVbs5ZSCxc",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/1cVbs5ZSCxc?si=EuwuoaJWCp4656XV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Snowdrift (Generative downtempo 1-16-2022) ",
      link:  "https://www.youtube.com/watch?v=IquqW8sBlWk",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/IquqW8sBlWk?si=adtcKHN686EvYXAO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Open strings (generative lofi 11-24-21)",
      link:  "https://www.youtube.com/watch?v=4eH5Ip-CmF0",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/4eH5Ip-CmF0?si=U_2ysmw-AXPVTp4m" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Marigolds (downtempo & ambient livestream - 9-12-2021)",
      link:  "https://www.youtube.com/watch?v=TTv5lu2q5Mo",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/TTv5lu2q5Mo?si=h-CSY-6fhHUhL76r" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Patch #3 - Warble (8-23-21)",
      link:  "https://www.youtube.com/watch?v=XIiZNnG1N_0",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/XIiZNnG1N_0?si=e_UbivCT1K4VTxoo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Patch #2 - Tropical depression (8-17-2021)",
      link:  "https://www.youtube.com/watch?v=wfECJrcJua0",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/wfECJrcJua0?si=0szNLER7SVwMpdFo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Patch #1 - Minimal house // maximum cables (8-10-2021)",
      link:  "https://www.youtube.com/watch?v=rHjNJXnauVg",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/rHjNJXnauVg?si=jJ5q8JjVVGR7W_BW" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Sunset livestream (6-26-2021)",
      link:  "https://www.youtube.com/watch?v=sIOBlGv2awE",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/sIOBlGv2awE?si=L90iVq4vGtwvovrX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Sunset 6 (ambient house loop, 5-31-2021)",
      link:  "https://www.youtube.com/watch?v=WMDW7p66eWs",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/WMDW7p66eWs?si=VW87KxC1pCyP3ZVm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    {
      title: "Beltane (generative ambient with Moog Subharmonicon and DFAM, field samples 5-1-2021)",
      link:  "https://www.youtube.com/watch?v=GKeRWzc17x4",
      src:   `<iframe class="w-full h-full" src="https://www.youtube.com/embed/GKeRWzc17x4?si=e5H9L-6KpfzE-FuX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`
    },
    // {
    //     title: "",
    //     link:  "",
    //     src:   ``
    // }
  ]

  return (
    <Layout>
      <div className="container mx-auto px-4 mb-10">
        <div className='mb-4 text-center'>
          <h2 className='font-semibold text-2xl'>Videos</h2>
        </div>
        <div className="flex flex-wrap -mx-4 mb-4">
          {
            videos.map((video) => <Video key={video.title} video={video} />)
          }
        </div>

        <div className='mb-4 text-center'>
          <h2 className='font-semibold text-2xl'>Streams</h2>
        </div>
        <div className="flex flex-wrap -mx-4 mb-4">
          {
            streams.map((stream) => <Video key={stream.title} video={stream} />)
          }
        </div>
      </div>
    </Layout>
  )
} 