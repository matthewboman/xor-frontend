interface VideoProps {
  title: string
  src:   string
  link:  string
}

export default function Video({ video }: VideoProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="mb-4">
        <div className="mb-3 font-semibold text-xl">{ video.title }</div>
        <div className="relative w-full aspect-16-9 rounded-lg" dangerouslySetInnerHTML={ {__html: video.src} }></div>
        <div className="my-4">
          <a href="{ video.link }" target="_blank" className="">{ video.title }</a>
        </div>
      </div>
    </div>
  )
}