import { useEffect } from 'react'
import { options } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addTVTrailerVideo } from '../utilis/movieSlice'


export const useTVTrailerVideo = (movieId)=>{
  

  // console.log(movieId)
    const dispatch = useDispatch()

     const TVTrailerVideo= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/tv/'+movieId+'/videos?language=en-US', options)

     const json= await data.json()
     
     const trailer = json.results.filter(video => video.type === 'Trailer');

     dispatch(addTVTrailerVideo(trailer))
    

  }


  useEffect(()=>{
    TVTrailerVideo()
  },[])


}