export default function Drone() {
  return (
    <div className='flex items-center justify-center'>
      <audio controls loop>
        <source src="./audio/drone.mp3" type="audio/mpeg"/>
        Your browser does not support the audio element.
      </audio>
    </div>
  )
}