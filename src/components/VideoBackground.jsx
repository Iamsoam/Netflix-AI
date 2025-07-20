import { useTrailerVideo } from '../hooks/useTrailerVideo'
import { useSelector } from 'react-redux'

function VideoBackground({movieId}) {

 useTrailerVideo(movieId)

  const trailer = useSelector(store=>store.movies?.TrailerVideo)

  console.log(trailer)
 
  if(!trailer) return 

   const demon_key= "x7uLutVRBfI"

  return (
    <div>
      <iframe className='w-screen aspect-video' src={"https://www.youtube.com/embed/"+trailer[0].key +"?si=9DOP2Wr5n0CTjYcr"+"?loop=1&autoplay=1&mute=1"} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" >
      </iframe>

    </div>
  )
}

export default VideoBackground


// aGpDO0cTnzE

{/* <iframe width="560" height="315" src="https://www.youtube.com/embed/aGpDO0cTnzE?si=9DOP2Wr5n0CTjYcr" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}