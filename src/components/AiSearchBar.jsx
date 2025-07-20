import  { useEffect, useRef } from 'react'
import { backgroundURL, options } from '../utilis/constants'
import lang from '../utilis/language'
import { useDispatch, useSelector } from 'react-redux'
import { addgptmovies } from '../utilis/gptSlice'

function AiSearchBar() {

 const searchtext = useRef(null)
 const langKey= useSelector(store=>store.lang.lang)

 const dispatch = useDispatch()

  
 
 const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      options
    );
    const json = await data.json();

    dispatch(addgptmovies({name: movie,movies:json.results}))
  };

 const handleAiSearch = ()=>{
   const movie=searchtext.current.value
   searchMovieTMDB(movie)
//    dispatch(searchMovieTMDB)

 }

 useEffect(()=>{
    // Optionally, you can call searchMovieTMDB with a default value or leave it empty
    searchMovieTMDB()
 },[])

  return (
    <div>
        <img src={backgroundURL} alt="logo" className='h-screen object-cover fixed -z-10' />
    <div className='flex justify-center'>
        <form className='w-full md:w-1/2 grid grid-cols-12 bg-black mt-40 md:mt-30' onSubmit={(e)=>e.preventDefault()}>
              <input type="text" placeholder={lang[langKey]?.searchPlaceholder} className='p-4 m-3 bg-white border rounded-lg col-span-9' ref={searchtext} />
              <button className='py-2 px-4 m-4 bg-red-600 rounded-lg col-span-3' onClick={handleAiSearch}>{lang[langKey]?.search}</button>
         </form>
    </div>
    </div>
  )
}

export default AiSearchBar