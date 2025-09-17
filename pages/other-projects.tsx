import Layout from '../components/layouts'

export default function Projects() {
  const projects = [
    {
      name:        'Secret Shame',
      link:        'https://secretshame.bandcamp.com/',
      description: 'post-punk',
      years:       '(2016-2025)'
    },
    {
      name:        'DShK',
      link:        'https://dshkpunk.bandcamp.com/',
      description: 'd-beat',
      years:       '(2021-2024)'
    },
    {
      name:        "Watcher's Woods",
      link:        'https://watcherswoods.bandcamp.com/',
      description: 'post-punk',
      years:       '(2014-2015)'
    },
    {
      name:        'Pansy',
      link:        'https://pansymke.bandcamp.com/',
      description: 'pornogrind',
      years:       '(2013-2015)'
    },
    {
      name:        'Crowdpleaser',
      link:        'https://crowdpleaser.bandcamp.com/',
      description: 'post-punk',
      years:       '(2013-2015)'
    },
    {
      name:        'Crotch Honey',
      link:        'https://crotchhoney.bandcamp.com/',
      description: 'riot grrl',
      years:       '(2013-2014)'
    }
  ]

  return (
      <Layout>
        <div className="container mx-auto px-4 mb-10">
          <div className="bg-black bg-opacity-40 p-8">
            {
              projects.map((project) => 
                <div className='w-full mb-4'>
                  <div className=''>
                    <a href={project.link} target="_blank" className='link-hover text-lg font-semibold'>{ project.name }</a>
                    <span className='ms-2 text-sm'>{ project.years }</span>
                  </div>
                  
                  <div>{ project.description }</div>
                </div>
              )
            } 
          </div>
        </div>
      </Layout>
    )
}