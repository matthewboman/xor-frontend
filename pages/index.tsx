import Drone  from '../components/drone'
import Layout from '../components/layouts'

export default function Index() {
  return (
    <Layout>
      <div className='flex h-screen'>
        <div className='m-auto'>
          <div className='p-[4rem] bg-black bg-opacity-40 rounded-lg text-lg'>
            <p className="mb-6 text-center">
              XOR is the experimental/electronic project of Matthew Boman.
            </p>
            <Drone />   
          </div>
        </div>
      </div>     
    </Layout>
  )
} 