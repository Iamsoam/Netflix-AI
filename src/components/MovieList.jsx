import MovieCard from './MovieCard'

function MovieList({title,movies}) {
  

    if(!movies) return

  return (
     <div className="px-6">
      <h1 className="text-lg md:text-3xl py-4 text-white">{title}</h1>
      <div className="flex overflow-x-scroll">
        <div className="flex">
            { movies.map(movie=><MovieCard key={movie.id} poster={movie.poster_path} movieId={movie.id}/> ) }
            </div>
        </div>
    </div>
  )
}

export default MovieList