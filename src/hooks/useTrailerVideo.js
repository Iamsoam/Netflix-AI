import { useEffect } from 'react'
import { options } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utilis/movieSlice'


export const useTrailerVideo = (movieId)=>{
  

  // console.log(movieId)
    const dispatch = useDispatch()

     const trailerVideo= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/'+ movieId+'/videos?language=en-US', options)

     const json= await data.json()
     
     const trailer = json.results.filter(video => video.type === 'Trailer');

     dispatch(addTrailerVideo(trailer))
    

  }


  useEffect(()=>{
    trailerVideo()
  },[])


}