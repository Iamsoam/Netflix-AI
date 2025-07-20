import React from 'react'

function VideoTitle({title,overview}) {


  return (
    <div className='pt-100 p-6 absolute  text-white' >
        <h1 className='-mt-85 text-sm md:-mt-0 w-1/2 font-bold md:text-6xl'>{title}</h1>
        {/* <p className='w-1/3 p-2'>{overview}</p> */}
        <button className='border-black px-2 md:px-5 p-2 border rounded-lg bg-white text-black m-2 hover:opacity-50 cursor-pointer'> ▶ Play</button>
        <button className='hidden md:inline-block border-black px-2 md:px-5 p-2 border rounded-lg bg-gray-100  text-black hover:opacity-20 cursor-pointer opacity-40 '> ⓘ More Info</button>
    </div>
  )
}

export default VideoTitle

// bg-gradient-to-r from-black'