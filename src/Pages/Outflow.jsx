import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { useGSAP } from '@gsap/react'

const Outflow = () => {
  const outflowRef = useRef(null)
  useGSAP(() => {
    const titleSpans = document.querySelectorAll('.titleAnime span')
    const paraSpans = document.querySelectorAll('.paraAnime span')

    gsap.from(titleSpans, {
      y: 100,
      stagger: 0.2,
      duration: 1,
      ease: "power4.out",
      scrollTrigger: {
        trigger: outflowRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })

    gsap.from(paraSpans, {
      y: 100, 
      stagger: 0.1,
      duration: 1.5,
      ease: "expo.out",
      scrollTrigger: {
        trigger: outflowRef.current,
        start: "top center+=100",
        toggleActions: "play none none reverse"
      }
    })
  })
  
  return (
    <div ref={outflowRef} className='h-[70vh] w-full relative overflow-hidden text-white overflow-x-hidden'>
        <img className='h-full w-full object-cover' src="./Air X Img-2.png" alt="" />
        <div className='absolute top-0 left-0 h-full w-full bg-black/50'></div>
        <div className='absolute top-[55%] left-40 h-full w-full'>
            <h1 className='text-6xl'>
              <div className='titleAnime flex gap-2 h-fit overflow-hidden'>
                <span className='text-white inline-block'>Air</span>
                <span className='text-red-500 inline-block'>X</span>
              </div>
            </h1>
            <div className='text-2xl py-5'>
              <div className='paraAnime flex gap-2 h-fit overflow-hidden'>
                <span className='text-white inline-block'>Accelerate</span>
                <span className='text-red-500 inline-block'>into</span>
                <span className='text-white inline-block'>a</span>
                <span className='text-red-500 inline-block'>New</span>
                <span className='text-white inline-block'>Era</span>
              </div>
            </div>
            <div className="buttons flex gap-4">
              <button className="btnWrapMain overflow-hidden text-white bg-white h-16 w-40 cursor-pointer">
                <div className="relative h-full w-full flex items-center justify-center">
                  <div className="flex relative z-20 flex-col gap-2 h-5 overflow-hidden">
                    <span className="textWrap text-sm text-black font-medium mix-blend-exclusion">
                      Order Now
                    </span>
                    <span className="textWrap text-sm text-black  mix-blend-exclusion">
                      Order Now
                    </span>
                  </div>
                  <div className="btnWrap absolute top-[100%] left-0 h-full w-full bg-black"></div>
                </div>
              </button>
              <button className="buttonAnime-2 text-white overflow-hidden backdrop-blur-sm h-16 w-40">
                <div className="relative h-full w-full flex items-center justify-center overflow-hidden">
                  <div className="text-div-2 h-5 flex relative z-20 flex-col items-center overflow-hidden">
                    <span className="text-sm text-white font-medium mix-blend-exclusion">
                      Learn More
                    </span>
                    <span className="text-sm text-white font-medium mix-blend-exclusion">
                      Learn More
                    </span>
                  </div>
                  <div className="btnWrapper-2 absolute top-0 left-0 h-full w-0 bg-white"></div>
                </div>
              </button>
            </div>
        </div>
    </div>
  )
}

export default Outflow