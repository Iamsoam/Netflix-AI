import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondConatiner() {

 const movies=  useSelector(store=>store.movies)

 console.log(movies.TrendingMovies)

  return (
    <div className='bg-black'>
       <div className="md:-mt-40 relative z-20 rounded-lg">
        <MovieList title={"Popular"} movies={movies?.NowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies?.PopularMovies}/>
        <MovieList title={"Television Series"} movies={movies?.TrendingMovies}/>
      <MovieList title={"Popular"} movies={movies?.NowPlayingMovies}/>
        <MovieList title={"Top Rated"} movies={movies?.PopularMovies}/>
        <MovieList title={"Television Series"} movies={movies?.TrendingMovies}/>
    </div>
    </div>
  )
}

export default SecondConatiner