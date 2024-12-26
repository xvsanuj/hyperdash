import React from 'react'

const Features = () => {
  return (
    <div className='min-h-screen w-full overflow-x-hidden'>
      <div className='product-1 h-screen bg-[#111] px-80 w-full relative flex flex-col justify-center items-center'>
        <h1 className='text-white absolute top-[12.5%] self-start left-[24%] text-7xl font-light'>Air X</h1>
        <img className='h-[60vh] object-cover w-[65vw]' src="./Features 2.1 video.png" alt="" />
        <p className='self-start text-3xl mt-4 text-white'>Accelerate into a new era</p>
      </div>
      <div className='product-2 h-screen bg-[#111] w-full flex justify-center items-center'>
        <div className='h-full w-full bg-[#222] px-40 pt-40 border-t-[1px] border-white border-opacity-40'>
          <h1 className='text-white text-7xl font-light'>Lexo Z</h1>
          <p className='text-white text-3xl mt-4'>A new generation of performance</p>
          <div className='subtext pt-12'>
            <p className='text-white text-lg mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius impedit iure explicabo!</p>
            <p className='text-white text-lg mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius impedit iure explicabo!</p>
            <p className='text-white text-lg mt-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius impedit iure explicabo!</p>
          </div>
          <div className='buttons flex gap-4 pt-12'>
            <button className='bg-white text-black px-10 py-4 font-medium'>Order Now</button>
            <button className='text-white px-10 py-4 font-medium'>Learn More</button>
          </div>
        </div>
        <div className='h-full w-full bg-[#222]'>
          <img className='h-full object-cover w-full' src="./Features 2.2 Image.png" alt="" />
        </div>
      </div>
      <div className='product-3 h-screen relative bg-white w-full flex justify-center items-center'>
        <img className='h-[70%] absolute top-[30%] left-[5%] object-contain w-full' src="./Features 2.3 Img.png" alt="" />
        <div className='h-full absolute w-full px-40 pt-40'>
          <h1 className='text-black text-7xl font-light'>Air X</h1>
          <p className='text-black text-3xl mt-4'>A new generation of performance</p>
          <div className='subtext pt-12'>
            <p className='text-black text-lg mt-4 font-medium w-[30%]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor reiciendis quisquam doloribus praesentium cum nam.</p>
          </div>
          <div className='buttons flex gap-4 pt-12'>
            <button className='bg-black text-white px-10 py-4 font-medium'>Order Now</button>
            <button className='text-black px-10 py-4 font-medium'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
