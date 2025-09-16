import { useEffect, useRef, useState } from 'react'
import Draggable from 'react-draggable'
import * as Tone from 'tone'
import Layout from '../components/layouts'

export default function Generative() {
  const nodeRef     = useRef<any>(null)
  const sequenceRef = useRef<any>(null)

  const [ isPlaying, setIsPlaying ] = useState(false)
  const [ tempo, setTempo ]         = useState(111)

  // Respond to tempo changes
  useEffect(() => {
    Tone.Transport.bpm.value = tempo
  }, [ tempo ])

  const handleDrag = (e, data) => {
    console.log(data)
  }

  // TODO: make changeable
  const notes = ['C4', 'E4', 'G4', 'B4']

  const play = async () => {
    await Tone.start()

    if (!sequenceRef.current) {

      const filter = new Tone.AutoFilter({
        frequency: 0.1,
        baseFrequency: 800,
        octaves: 2,
        filter: { type: 'lowpass'}
      }).toDestination()
      filter.start()

      const synth = new Tone.PolySynth().connect(filter)
      // const synth = new Tone.PolySynth().toDestination()


      synth.set({ envelope: { attack: 1, release: 2 } })
      synth.set({ oscillator: { type: 'sawtooth' } })



      sequenceRef.current = new Tone.Sequence(
        (time, note) => {
          synth.triggerAttackRelease(note, '2n', time)
        },
        notes,
        '2n'
      )
      sequenceRef.current.start(0)
    }

    if (Tone.Transport.state === 'started') {
      Tone.Transport.pause()
      setIsPlaying(false)
    } else {
      Tone.Transport.start()
      setIsPlaying(true)
    }
  }

  return (
    <Layout>
      <div className='flex h-screen'>
        <div className='mx-auto mt-[30vh]'>
          <div className="box" style={{height: '500px', width: '500px', position: 'relative', overflow: 'none', padding: '0'}}>
            <div style={{height: '1000px', width: '1000px', padding: '10px'}}>
              <Draggable nodeRef={nodeRef}
                          handle=".handle"
                          defaultPosition={{x: 0, y: 0}}
                          position={null}
                          grid={[25, 25]}
                          scale={1} >
                <div ref={nodeRef}>
                  <div className="handle">Drag from here</div>
                  <div>This readme is really dragging on...</div>
                </div>
              </Draggable>
              </div>
            </div>
          <button onClick={play}>play</button>
        </div>
      </div>
    </Layout>
  )
}