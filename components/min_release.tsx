interface ExtLinkProps {
  url:  string | null
  text: string | null
  pre:  string
}

export const Link = ({ url, text, pre }: ExtLinkProps) => {
  if (!url) return

  return (
    <div>
      { pre }<a href={ url } target="_blank" className="orange-text">{ text }</a>
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
    <div className="mb-8">
      <div className="font-semibold text-xl">{ release.title }</div>
      <div className="mb-2">{ release.info }</div>

      {
        release.official ? (
          <div className="flex items-center gap-6">
            <Link url={ release.bandcamp } pre="Buy on " text="Bandcamp" />
            <div className="mb-2" dangerouslySetInnerHTML={{ __html: release.html }} />
          </div>
        ) : <Link url={ release.link } pre="Listen " text="here" />
      }
      <div>
        <hr className="white mt-6" />
      </div>
    </div>
  )
}