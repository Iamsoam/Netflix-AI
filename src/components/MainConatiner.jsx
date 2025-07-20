import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

import { useNowPlaying } from '../hooks/useNowPlaying'
import { useSelector } from 'react-redux'
import { usePopular } from '../hooks/usePopular'
import { useTrending } from '../hooks/useTrending'

function MainConatiner() {

  const movies = useSelector(store=>store.movies?.NowPlayingMovies)

 useNowPlaying()
 usePopular()
 useTrending()
  if (!movies)return

   const mainMovies = movies[14]
   console.log(mainMovies)

   const {title,overview,id}=mainMovies



  return (
    <div className='pt-35 bg-black md:pt-0'>


        <VideoTitle title={title} overview={overview} />
        <VideoBackground movieId={id}  />
    </div>
  )
}

export default MainConatiner