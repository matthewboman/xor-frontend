export default function Drone() {
  return (
    <div className='flex items-center justify-center'>
      <audio controls>
        <source src="./music/wash.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}