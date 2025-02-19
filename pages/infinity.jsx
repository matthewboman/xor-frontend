import dynamic from 'next/dynamic'
import Layout  from '../components/layouts'

const Waveform = dynamic(() => import('../components/waveform'), {
  ssr: false
})

const DEFAULT_ENVELOPE = [
  { time: 6, volume: 0.2 },
  { time: 11.2, volume: 0.5 },
  { time: 15.5, volume: 0.8 },
]
const DEFAULT_START = 1
const DEFAULT_STOP  = 10
const DEFAULT_ZOOM  = 10

export default function Infinity() {

  const tracks = [
    // {
    //   name: '',
    //   file: '',
    //   start: 1,
    //   stop: 10,
    //   zoom: 10,
    //   envelope: [
    //     { time: 1, volume: 0.9 },
    //     { time: 5, volume: 0.9 }
    //   ]
    // },
    {
      name:     'bass-1',
      file:     '/audio/loops/bass-1.mp3',
      start:    2.28,
      stop:     6,
      envelope: [
        { time: 1.3, volume: 0.85 },
        { time: 5, volume: 0.9 }
      ]
    },
    {
      name:     'bass-2',
      file:     '/audio/loops/bass-2.mp3',
      start:    0.15,
      stop:     5,
      envelope: [
        { time: 0.14, volume: 0.56 },
        { time: 1.45, volume: 0.96 },
        { time: 5.12, volume: 0.56 }
      ]
    },
    {
      name:     'cello-delay',
      file:     '/audio/loops/cello-delay.mp3',
      start:    1.5,
      stop:     26.25,
      envelope: [
        { time: 7, volume: 0.85 },
        { time: 11, volume: 0.5 },
        { time: 15, volume: 0.8 },
        { time: 21, volume: 0.8 },
      ]
    },
    {
      name:     'flutter',
      file:     '/audio/loops/flutter.mp3',
      start:    1,
      stop:     12,
      envelope: [
        { time: 0, volume: 0.9 },
        { time: 5, volume: 0.5 },
        { time: 10, volume: 0.9 },
      ]
    },
    {
      name:     'guitar-chords',
      file:     '/audio/loops/guitar-chords.mp3',
      start:    7.8,
      stop:     23.8,
      envelope: [
        { time: 0, volume: 1 },
      ]
    },
    {
      name:     'hellsbells',
      file:     '/audio/loops/hellsbells.mp3',
      start:    2.11,
      stop:     5.63,
      envelope: [
        { time: 1.95, volume: 0 },
        { time: 5, volume: 0.7 },
      ]
    },
    {
      name:     'hi-res-1',
      file:     '/audio/loops/hi-res-1.mp3',
      start:    1,
      stop:     12,
      envelope: [
        { time: 0.86, volume: 0.21 },
        { time: 6, volume: 0.9 },
        { time: 11.8, volume: 0.3 },
      ]
    },
    {
      name:     'hi-res-2',
      file:     '/audio/loops/hi-res-2.mp3',
      start:    3.4,
      stop:     8.88,
      envelope: [
        { time: 0, volume: 0.2 },
        { time: 6, volume: 0.9 },
        { time: 12, volume: 0.2 },
      ]
    },
    {
      name:     'LR-tapes',
      file:     '/audio/loops/LR-tapes.mp3',
      start:    3.4,
      stop:     4.9,
      envelope: [
        { time: 3.22, volume: 0.27 },
        { time: 6, volume: 0.9 },
      ]
    },
    {
      name:     'metallic-rubber',
      file:     '/audio/loops/metallic-rubber.mp3',
      start:    0.837,
      stop:     5.372,
      envelope: [
        { time: 0, volume: 1 },
        { time: 3, volume: 0.6 },
        { time: 5.4, volume: 0.9 }
      ]
    },
  ]

  return (
    <Layout>
      <div className='m-8'>
        <div className='p-[4rem] bg-black bg-opacity-90 rounded-lg text-lg'>
        <div style={{ width: '80vw' }}>
          {
            tracks.map(t => (
              <div className='my-12'>
                <Waveform
                  key       = { t.name }
                  audioFile = { t.file }
                  envProp   = { t.envelope || DEFAULT_ENVELOPE }
                  startProp = { t.start || DEFAULT_START }
                  stopProp  = { t.stop || DEFAULT_STOP }
                  zoomProp  = { t.zoom || DEFAULT_ZOOM } />
            </div>
            ))
          }
        </div>
        </div>
      </div>
    </Layout>
  )
}