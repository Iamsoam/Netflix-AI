import { useEffect } from 'react'
import { options } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utilis/movieSlice'


export const useNowPlaying = ()=>{
  

    const dispatch = useDispatch()

     const NowPlaying= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/now_playing?&page=1', options)
     const json= await data.json()


     dispatch(addNowPlayingMovies(json.results))

  }


  useEffect(()=>{
    NowPlaying()
  },[])


}