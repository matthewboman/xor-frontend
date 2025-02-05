interface ExtLinkProps {
  url:  string | null
  text: string | null
  pre:  string
}

export const Link = ({ url, text, pre }: ExtLinkProps) => {
  if (!url) return

  return (
    <div>
      { pre }<a href={ url } target="_blank" className="">{ text }</a>
    </div>
  )
}

interface ReleaseProps {
  title:        string
  release_date: string
  image_url:    string
  html:         string | null
  info:         string
  bandcamp:     string | null
  spotify:      string | null
}

export default function Release({ release }: ReleaseProps) {
  return (
    <div className="w-full md:w-1/2 lg:w-1/3 p-4">
      <div className="mb-4">
        <div className="mb-3 font-semibold text-xl">{ release.title }</div>
          <img className="mb-4 rounded-lg" src={ release.image_url } />
          <div className="mb-4" dangerouslySetInnerHTML={{ __html: release.html }} />
          <div className="mb-4">{ release.info }</div>
          <Link url={ release.bandcamp} pre="Buy on " text="Bandcamp" />
          <Link url={ release.spotify } pre="Listen on " text="Spotify" />
        </div>
      </div>
  )
}