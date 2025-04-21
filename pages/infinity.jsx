import { Responsive, WidthProvider } from 'react-grid-layout'
import dynamic from 'next/dynamic'
import Clippy       from '../components/clippy'
import Instructions from '../components/infinity_instructions'
import Layout       from '../components/layouts'

import 'react-grid-layout/css/styles.css'
import 'react-resizable/css/styles.css'

const ResponsiveGridLayout = WidthProvider(Responsive)

// Wavesurfer.js requires 'window'
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
    {
      name: 'one',
      file: '/music/wash.mp3',
      start: 1,
      stop: 10,
      zoom: 10,
      envelope: [
        { time: 1, volume: 0.9 },
        { time: 5, volume: 0.9 }
      ],
      x: 0, y: 0, w: 1, h: 1, static: false,
    },
    {
      name: 'two',
      file: '/music/wash.mp3',
      start: 1,
      stop: 10,
      zoom: 10,
      envelope: [
        { time: 1, volume: 0.9 },
        { time: 5, volume: 0.9 }
      ],
      x: 0, y: 2, w: 1, h: 1, static: false,
    },
    {
      name: 'three',
      file: '/music/wash.mp3',
      start: 1,
      stop: 10,
      zoom: 10,
      envelope: [
        { time: 1, volume: 0.9 },
        { time: 5, volume: 0.9 }
      ],
      x: 0, y: 4, w: 1, h: 1, static: false,
    },
    // {
    //   name:     'bass-1',
    //   file:     '/audio/loops/bass-1.mp3',
    //   start:    2.28,
    //   stop:     6,
    //   envelope: [
    //     { time: 1.3, volume: 0.85 },
    //     { time: 5, volume: 0.9 }
    //   ]
    // },
    // {
    //   name:     'bass-2',
    //   file:     '/audio/loops/bass-2.mp3',
    //   start:    0.15,
    //   stop:     5,
    //   envelope: [
    //     { time: 0.14, volume: 0.56 },
    //     { time: 1.45, volume: 0.96 },
    //     { time: 5.12, volume: 0.56 }
    //   ]
    // },
    // {
    //   name:     'cello-delay',
    //   file:     '/audio/loops/cello-delay.mp3',
    //   start:    1.5,
    //   stop:     26.25,
    //   envelope: [
    //     { time: 7, volume: 0.85 },
    //     { time: 11, volume: 0.5 },
    //     { time: 15, volume: 0.8 },
    //     { time: 21, volume: 0.8 },
    //   ]
    // },
    // {
    //   name:     'flutter',
    //   file:     '/audio/loops/flutter.mp3',
    //   start:    1,
    //   stop:     12,
    //   envelope: [
    //     { time: 0, volume: 0.9 },
    //     { time: 5, volume: 0.5 },
    //     { time: 10, volume: 0.9 },
    //   ]
    // },
    // {
    //   name:     'guitar-chords',
    //   file:     '/audio/loops/guitar-chords.mp3',
    //   start:    7.8,
    //   stop:     23.8,
    //   envelope: [
    //     { time: 0, volume: 1 },
    //   ]
    // },
    // {
    //   name:     'hellsbells',
    //   file:     '/audio/loops/hellsbells.mp3',
    //   start:    2.11,
    //   stop:     5.63,
    //   envelope: [
    //     { time: 1.95, volume: 0 },
    //     { time: 5, volume: 0.7 },
    //   ]
    // },
    // {
    //   name:     'hi-res-1',
    //   file:     '/audio/loops/hi-res-1.mp3',
    //   start:    1,
    //   stop:     12,
    //   envelope: [
    //     { time: 0.86, volume: 0.21 },
    //     { time: 6, volume: 0.9 },
    //     { time: 11.8, volume: 0.3 },
    //   ]
    // },
    // {
    //   name:     'hi-res-2',
    //   file:     '/audio/loops/hi-res-2.mp3',
    //   start:    3.4,
    //   stop:     8.88,
    //   envelope: [
    //     { time: 0, volume: 0.2 },
    //     { time: 6, volume: 0.9 },
    //     { time: 12, volume: 0.2 },
    //   ]
    // },
    // {
    //   name:     'LR-tapes',
    //   file:     '/audio/loops/LR-tapes.mp3',
    //   start:    3.4,
    //   stop:     4.9,
    //   envelope: [
    //     { time: 3.22, volume: 0.27 },
    //     { time: 6, volume: 0.9 },
    //   ]
    // },
    // {
    //   name:     'metallic-rubber',
    //   file:     '/audio/loops/metallic-rubber.mp3',
    //   start:    0.837,
    //   stop:     5.372,
    //   envelope: [
    //     { time: 0, volume: 1 },
    //     { time: 3, volume: 0.6 },
    //     { time: 5.4, volume: 0.9 }
    //   ]
    // },
  ]

  return (
    <Layout>
      <div className='md:m-8'>
        <div className='p-4 md:p-[4rem] bg-black bg-opacity-90 rounded-lg text-lg'>
          <div style={{ width: '80vw' }}>
            <ResponsiveGridLayout
              layout = { {lg: tracks } }
              breakpoints = {{ lg: 0 }}
              cols   = { { lg: 1} }
              rowHeight = { 240 }
              isBounded = { true }
              preventCollision = { false }
              margin = {[0,0]}
              containerPadding = {[0,0]}
              compactType = 'vertical'
              isResizeable = { false }
              allowOverlap = { false }
              draggableHandle = '.drag-handle'
            >
              {
                tracks.map(t => (
                  <div key = {t.name} className='flex'>
                    <div className='drag-handle border-4 border-gray-300 cursor-pointer my-6'></div>
                    <div className="pl-4 flex-1">
                      <Waveform
                        key       = { t.name }
                        audioFile = { t.file }
                        envProp   = { t.envelope || DEFAULT_ENVELOPE }
                        startProp = { t.start || DEFAULT_START }
                        stopProp  = { t.stop || DEFAULT_STOP }
                        zoomProp  = { t.zoom || DEFAULT_ZOOM } />
                    </div>
                  </div>
                ))
              }
            </ResponsiveGridLayout>
          </div>
        </div>
      </div>
      <Clippy>
        <Instructions/>
      </Clippy>
    </Layout>
  )
}