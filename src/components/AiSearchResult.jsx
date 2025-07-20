import { useSelector } from 'react-redux'
import MovieList from './MovieList'


function AiSearchResult() {

  const{movies,name}  = useSelector(store=>store.gpt)

  if(!movies) return null

  console.log(movies);
  return (
    <div className='bg-black opacity-80 mt-20 pb-10'>

      <MovieList title={name} movies={movies} />
    </div>
  )
}

export default AiSearchResult