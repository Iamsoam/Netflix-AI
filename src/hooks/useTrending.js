import { useEffect } from 'react'
import { options } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addTrendingMovies } from '../utilis/movieSlice'


export const useTrending = ()=>{
  

    const dispatch = useDispatch()

     const Trending= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/trending/tv/week?language=en-US', options)
     const json= await data.json()


     dispatch(addTrendingMovies(json.results))

  }


  useEffect(()=>{
    Trending()
  },[])


}