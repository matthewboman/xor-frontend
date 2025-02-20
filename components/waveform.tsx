import React, { FC, useEffect, useRef, useState } from 'react'
import { Knob }            from 'primereact/knob'
import WaveSurfer          from 'wavesurfer.js'
import EnvelopePlugin,
       { EnvelopePoint }   from 'wavesurfer.js/dist/plugins/envelope.esm.js'
import RegionsPlugin       from "wavesurfer.js/dist/plugins/regions.esm.js"
import { PlayPauseButton } from './buttons'

interface WaveformProps {
  audioFile: string,
  envProp:   EnvelopePoint[],
  startProp: number,
  stopProp:  number,
  zoomProp:  number,
}

const Waveform: FC<WaveformProps> = ({ audioFile, envProp, startProp, stopProp, zoomProp }) => {
  const waveformRef = useRef<HTMLDivElement | null>(null)
  const wavesurfer  = useRef<WaveSurfer | null>(null)
  let activeRegion  = useRef<any>(null)
  let audioContext  = useRef<any>(null)
  let panNode       = useRef<any>(null)

  const [isMobile, setIsMobile] = useState(false)
  const [ pan, setPan ] = useState(0)
  const [ preservePitch, setPreservePitch ] = useState(true)
  const [ selectedOption, setSelectedOption ] = useState("speed")
  const [ speed, setSpeed ]   = useState(1)
  const [ zoom, setZoom ]     = useState(zoomProp)

  const regions  = RegionsPlugin.create()
  const envelope = EnvelopePlugin.create({
      volume:          0.8,
      lineColor:       '#548fe8',
      lineWidth:       '2',
      dragPointSize:   6,
      dragLine:        true,
      dragPointFill:   '#548fe8',
      dragPointStroke: '#548fe8',
      points:          envProp,
    })

  // Allow waveformRef for desktop and mobile
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Waveform rendering
  useEffect(() => {
    if (waveformRef.current) {
      wavesurfer.current = create(waveformRef.current)
    }

    return () => {
      wavesurfer.current?.destroy()
    }
  }, [ audioFile ])

  const create = (waveformRef: HTMLElement) => {
    let ws = WaveSurfer.create({
      container:     waveformRef,
      autoScroll:    false,
      waveColor:     "#54e8c5",
      progressColor: "#54e8c5",
      barWidth:      0,
      audioRate:     1,
      plugins:       [ regions, envelope ]
    })

    ws.load(audioFile)

    ws.on('decode', () => {
      regions.addRegion({
        start:  startProp,
        end:    stopProp,
        color:  hexToRgba("#54e8c5"),
        drag:   true,
        resize: true
      })
    })

    // Region looping
    regions.on("region-in", (region: any) => {
      activeRegion.current = region
    })
    regions.on("region-out", (region: any) => {
      if (activeRegion.current === region) {
        region.play()
      }
    })

    // Panning
    ws.on('ready', () => {
      audioContext.current = new AudioContext()

      const audio  = ws.getMediaElement()
      const source = audioContext.current.createMediaElementSource(audio)

      panNode.current = audioContext.current.createStereoPanner()

      source.connect(panNode.current)
      panNode.current.connect(audioContext.current.destination)
    })

    // TESTING: un-comment to test values
    regions.on('region-updated', (region) => {
      console.log('Updated region', region)
    })
    envelope.on('points-change', (points) => {
      console.log('Envelope points changed', points)
    })

    return ws
  }

  // Converts hex colors to rgba
  const hexToRgba = (hex: string, alpha = 0.2) => {
    hex = hex.replace(/^#/, '')

    const r = parseInt(hex.slice(0, 2), 16)
    const g = parseInt(hex.slice(2, 4), 16)
    const b = parseInt(hex.slice(4, 6), 16)

    return `rgba(${r}, ${g}, ${b}, ${alpha})`
  }

  // Handles L/R audio panning
  const panAudio = (event: any) => {
    const panAmount = isMobile ? event.value : event.target.value

    setPan(panAmount)

    const panValue = parseInt(panAmount) / 45 // Normalize value to range [-1, 1]

    if (panNode.current) {
      panNode.current.pan.value = panValue // Set the panning position
    }
  }

  // Toggles play/pause panning
  const playPause = () => {
    wavesurfer.current?.playPause()
  }

  // Toggles whether pitch is preserved with audio speed adjustment
  const togglePreservePitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const preserve = event.target.checked
    setPreservePitch(preserve)
    wavesurfer.current?.setPlaybackRate(wavesurfer.current?.getPlaybackRate(), preserve)
  }

  // Changes the playback speed of the audio
  const updateSpeed = (event) => {
    const speed = parseFloat(event.value)

    setSpeed(speed)
    wavesurfer.current?.setPlaybackRate(speed)
  }

  // Changes the zoom of the waveform
  const updateZoom = (event) => {
    const minPxPerSec = Number(event.value)

    setZoom(minPxPerSec)
    wavesurfer.current?.zoom(minPxPerSec)
  }

  return (
    <div>
      {/* Desktop and Tablet Landscape Layout */}
      <div className="hidden md:grid grid-cols-[auto_1fr] items-center gap-4">
        <div>
          <div className="grid grid-cols-2 gap-4 gap-y-8 mb-8">
            <div className="flex flex-col justify-center items-center">
              <Knob
                  value={speed}
                  onChange={updateSpeed}
                  min={0.25}
                  max={4}
                  step={0.01}
                  strokeWidth={10}
                  size={60}
                  textColor='#54e8c5'
                  valueColor='#54e8c5'
                  rangeColor='#0a0a0a'/>
                  <br/>
              <label className="teal mt-2">Speed</label>
            </div>
            <div className="flex flex-col justify-center items-center">
              <Knob
                  value={zoom}
                  onChange={updateZoom}
                  min={10}
                  max={1000}
                  strokeWidth={10}
                  size={60}
                  textColor='#54e8c5'
                  valueColor='#54e8c5'
                  rangeColor='#0a0a0a'/>
                  <br/>
              <label className="teal mt-2">Zoom</label>
            </div>
            <div className="flex justify-center items-center">
              <label className="teal flex flex-col items-center">
                <input
                  type="checkbox"
                  checked={preservePitch}
                  onChange={togglePreservePitch}
                  className='mb-2 border-teal'
                  />
                  Preserve pitch
              </label>
            </div>
            <div className="flex justify-center items-center">
              <PlayPauseButton onClick={playPause} />
            </div>
          </div>
          <div className="hidden md:flex justify-center items-center teal">
            <div className='mr-2'>L</div>
            <input
              id="panner-input"
              type="range"
              min="-45"
              max="45"
              defaultValue="0"
              onChange={panAudio}
              className='border-teal background-teal'
            />
            <div className='ml-2'>R</div>
          </div>
        </div>
        { isMobile ? '' : <div ref={waveformRef} className="waveform-container" /> }
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        <div className="mb-8">
          <select
              className="w-full p-2 border rounded teal-select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
          >
              <option value="speed">Speed</option>
              <option value="zoom">Zoom</option>
              <option value="pan">Pan</option>
              <option value="play">Play/Pause</option>
          </select>
          <div className="mt-4 flex flex-col justify-center items-center">
            { selectedOption === "speed" && <div className="grid grid-cols-2 justify-center items-center gap-4">
                <div className="flex flex-col items-center">
                  <Knob
                    value={speed}
                    onChange={updateSpeed}
                    min={0.25}
                    max={4}
                    step={0.01}
                    strokeWidth={10}
                    size={60}
                    textColor='#54e8c5'
                    valueColor='#54e8c5'
                    rangeColor='#0a0a0a'/>
                  <br/>
                  <label className="teal mt-2">Speed</label>
                </div>
                <div className="flex flex-col justify-between items-center h-full">
                  <div className="flex-grow flex justify-center items-center">
                    <input
                      type="checkbox"
                      checked={preservePitch}
                      onChange={togglePreservePitch}
                      className='border-teal'
                    />
                  </div>
                  <label className="teal text-center">
                    Preserve pitch
                  </label>
                </div>

              </div> }
              { selectedOption === "zoom" && <div className="flex flex-col justify-center items-center">
              <Knob
                  value={zoom}
                  onChange={updateZoom}
                  min={10}
                  max={1000}
                  strokeWidth={10}
                  size={60}
                  textColor='#54e8c5'
                  valueColor='#54e8c5'
                  rangeColor='#0a0a0a'/>
                  <br/>
              <label className="teal mt-2">Zoom</label>
              </div> }
              {selectedOption === "pan" && <div className="flex flex-col justify-center items-center">
              <Knob
                  value={pan}
                  onChange={panAudio}
                  min={-45}
                  max={45}
                  strokeWidth={10}
                  size={60}
                  textColor='#54e8c5'
                  valueColor='#54e8c5'
                  rangeColor='#0a0a0a'/>
                  <br/>
              <label className="teal mt-2">Pan</label>
              </div> }
              {selectedOption === "play" && <div className="flex justify-center items-center">
              <PlayPauseButton onClick={playPause} />
              </div>}
          </div>
        </div>
        { isMobile ? <div ref={waveformRef} className="waveform-container" /> : '' }
      </div>
    </div>
  )
}

export default Waveform