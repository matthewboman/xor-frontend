interface VideoProps {
  title:  string
  src:    string
  link:   string
  info:   string
  author: string
}

export default function Video({ video }: VideoProps) {
  return (
    <div className="mb-8">
      <div className="mb-4 font-semibold text-xl">{ video.title }</div>
      { !!video.author ? "" : "" }
      <div className="mb-4 relative w-full aspect-16-9 rounded-lg" dangerouslySetInnerHTML={ {__html: video.src} }></div>
      { video.info?.length > 1 && (<div className="mb-4">{video.info}</div> )}
      <div className="">
        <a href={ video.link } target="_blank" className="border border-solid rounded-lg px-4 py-2">watch</a>
      </div>
      <div>
        <hr className="white mt-8" />
      </div>
    </div>
  )
}