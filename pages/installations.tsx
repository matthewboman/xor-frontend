import Layout from '../components/layouts'

export default function Installations() {
  return (
    <Layout>
      <div className='my-8 grid grid-cols-8 '>
        <div className='col-span-4 col-start-3 p-[4rem] bg-black bg-opacity-40 rounded-lg text-lg'>
          <div className='mb-8'>
            <h2 className='font-semibold text-xl'>
              Animal Tracks
            </h2>
            <p className='text-sm mb-6'>
              September 27, 2024 – March 15th, 2025
            </p>
            <img src='' className='lg-rounded'/>
            <p className="mb-4">
              Zine, sound sculpture, and compilation of imaginary bands 
              for Swannatopia's Deer Freaks and Decoys exhibit at the Black Mountain College Museum.
            </p>
          </div>

          <hr className='my-4'/>

          <div className='my-8'>
            <h2 className='font-semibold text-xl'>
              The Entity
            </h2>
            <p className='text-sm mb-6'>
              November 9, 2024
            </p>
            <img src='' className='lg-rounded'/>
            <p className="mb-4">
              Sound sculpture for Swannatopia's How Do We Mark the Flood?
            </p>
          </div>

          <hr className='my-4'/>

          <div className='mt-8'>
            <h2 className='font-semibold text-xl'>
              May the Forest Outlive Us
            </h2>
            <p className='text-sm mb-6'>
              June 20, 2024
            </p>
            <img src='' className='lg-rounded'/>
            <p className="mb-4">
              Performance at and honorarium from the Asheville Art Museum 
            </p>
          </div>
          
        </div>
      </div>
    </Layout>
  )
} 