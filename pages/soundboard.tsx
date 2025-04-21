import { useRef } from 'react'
import Layout     from '../components/layouts'

const Sound = ({ path, name }) => {
  const audioRef = useRef(new Audio(path))

  const play = () => {
    audioRef.current.currentTime = 0
    audioRef.current.play()
  }

  return (
    <div className=''>
      <button onClick={play} className='py-4 w-[100px] rounded-xl bg-black bg-opacity-40'>
        { name }
      </button>
    </div>
  )
}

export default function Soundboard() {
  const sounds = [
    {
      path: '/audio/soundboard/airhorn.mp3',
      name: 'airhorn'
    },
    {
      path: '/audio/soundboard/grunt.mp3',
      name: 'grunt'
    },
    {
      path: '/audio/soundboard/tiger.mp3',
      name: 'tiger'
    },
    {
      path: '/audio/soundboard/owl.mp3',
      name: 'owl'
    },
    {
      path: '/audio/soundboard/wolf.mp3',
      name: 'wolf'
    },
    {
      path: '/audio/soundboard/boing.mp3',
      name: 'boing'
    },
    {
      path: '/audio/soundboard/fog-horn.mp3',
      name: 'fog horn'
    },
    {
      path: '/audio/soundboard/aww.mp3',
      name: 'aww'
    },
    {
      path: '/audio/soundboard/crickets.mp3',
      name: 'crickets'
    },
    {
      path: '/audio/soundboard/laugh.mp3',
      name: 'laugh'
    },
    {
      path: '/audio/soundboard/ohh.mp3',
      name: 'ohh'
    },
    {
      path: '/audio/soundboard/trombone.mp3',
      name: 'trombone'
    },
    {
      path: '/audio/soundboard/yay.mp3',
      name: 'yay'
    },
    {
      path: '/audio/soundboard/dolphin.mp3',
      name: 'dolphin'
    },
    {
      path: '/audio/soundboard/fart.mp3',
      name: 'fart'
    },
    {
      path: '/audio/soundboard/glass.mp3',
      name: 'glass'
    },
    {
      path: '/audio/soundboard/crow.mp3',
      name: 'crow'
    },
    {
      path: '/audio/soundboard/drum-roll.mp3',
      name: 'drum roll'
    },
    {
      path: '/audio/soundboard/boo.mp3',
      name: 'boo'
    },
    {
      path: '/audio/soundboard/cockroach.mp3',
      name: 'cockroach'
    },
    {
      path: '/audio/soundboard/chains.mp3',
      name: 'chains'
    },
    {
      path: '/audio/soundboard/nay.mp3',
      name: 'nay'
    },
    {
      path: '/audio/soundboard/chimp.mp3',
      name: 'chimp'
    },
    {
      path: '/audio/soundboard/cat.mp3',
      name: 'cat'
    },
    {
      path: '/audio/soundboard/dog.mp3',
      name: 'dog'
    },
    {
      path: '/audio/soundboard/dial-up.mp3',
      name: 'dial up'
    },
    {
      path: '/audio/soundboard/scratch.mp3',
      name: 'scratch'
    },
    {
      path: '/audio/soundboard/gun.mp3',
      name: 'gun'
    },
    {
      path: '/audio/soundboard/loon.mp3',
      name: 'loon'
    },
    // {
    //   path: '/audio/soundboard/seal.mp3',
    //   name: 'seal'
    // },
    {
      path: '/audio/soundboard/falling.mp3',
      name: 'falling'
    },
  ]

  const shuffle = (array: any[]) => {
    for (let i = array.length - 1; i >= 0; i--) {
      let j    = Math.floor(Math.random() * (i + 1));
      let temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
    return array
  }

  return (
    <Layout>
      <div className='grid grid-cols-3 gap-2 p-4 mb-4'>
        {
          shuffle(sounds).map(s => <Sound path={s.path} name={s.name}/>)
        }
      </div>
    </Layout>
  )
}