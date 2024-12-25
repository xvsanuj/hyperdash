import React from 'react'

const Outflow = () => {
  return (
    <div className='h-[70vh] w-full relative text-white'>
        <img className='h-full w-full object-cover' src="./Air X Img-2.png" alt="" />
        <div className='absolute top-0 left-0 h-full w-full bg-black/50'></div>
        <div className='absolute top-[55%] left-40 h-full w-full'>
            <h1 className='text-6xl'>Air X</h1>
            <p className='text-2xl py-5'>Accelerate into a New Era</p>
            <div className='buttons flex gap-4'>
                <button className='bg-white font-medium text-black px-10 py-4'>Order Now</button>
                <button className='text-white px-8 py-4 rounded-md'>Learn More</button>
            </div>
        </div>
    </div>
  )
}

export default Outflow