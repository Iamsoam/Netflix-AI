import React from 'react'
import { IMG } from '../utilis/constants'
import { useSelector } from 'react-redux'
import { useTrailerVideo } from '../hooks/useTrailerVideo'


function MovieCard({poster,movieId}) {

 
//   useTrailerVideo(movieId)
  
//  const trailer = useSelector(store=>store.movies?.TrailerVideo)

//  console.log(trailer)

//   if(!trailer) return
 
  if(!poster) return

  return (
    <div className='w-40 pr-3 rounded md:w-48'>
        <img src={IMG+poster} alt=''/>
      {/* <iframe className='aspect-video' src={"https://www.youtube.com/embed/"+trailer[0].key +"?si=9DOP2Wr5n0CTjYcr"+"?loop=1&autoplay=1&mute=1"} 
      title="YouTube video player" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
      referrerpolicy="strict-origin-when-cross-origin" >
      </iframe> */}

    </div>
  )
}

export default MovieCard