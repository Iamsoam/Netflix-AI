import { useEffect } from 'react'
import { options } from '../utilis/constants'
import { useDispatch } from 'react-redux'
import { addPopularMovies } from '../utilis/movieSlice'


export const usePopular = ()=>{
  

    const dispatch = useDispatch()

     const Popular= async()=>{
     const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', options)
     const json= await data.json()


     dispatch(addPopularMovies(json.results))

  }


  useEffect(()=>{
    Popular()
  },[])


}