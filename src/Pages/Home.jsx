import React from 'react'

const Home = () => {
  return (
    <div>
      <div className='h-screen w-full bg-[#000]'>
        <img className='h-full w-full object-cover object-center' src="./hero-image.png" alt="" />
        <div className='absolute top-0 w-full h-full'>
            <button className='absolute bottom-[15%] text-white left-1/2 -translate-x-1/2 border-[1px] border-white px-8 py-2'>Test Drive</button>
        </div>
      </div>
    </div>
  )
}

export default Home