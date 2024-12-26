import React, { useRef } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

const NumericalSpecs = () => {
  const containerRef = useRef(null)
  const numberRefs = useRef([])
  const numberContainerRefs = useRef([])
  gsap.registerPlugin(ScrollTrigger)

  const specs = [
    {
      title: 'Max Power',
      value: '1200+',
      unit: 'HP',
      startValue: 0
    },
    {
      title: 'EPA est.',
      value: '358',
      unit: 'Mi',
      startValue: 0
    },
    {
      title: 'Minutes to charge 200 Miles',
      value: '12',
      unit: 'Mins',
      startValue: 0
    },
    {
      title: '0 - 60 mph',
      value: '2',
      unit: 'Sec',
      startValue: 0
    }
  ]

  useGSAP(() => {
    // Initial position - slide up
    numberContainerRefs.current.forEach((container) => {
      gsap.set(container, {
        y: 100,
        opacity: 0
      })
    })

    specs.forEach((spec, index) => {
      let endValue = parseInt(spec.value)
      if(isNaN(endValue)) {
        endValue = parseInt(spec.value.replace('+',''))
      }

      // Slide up animation with opacity
      gsap.to(numberContainerRefs.current[index], {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      })

      // Number counting animation with opacity
      gsap.to(numberRefs.current[index], {
        innerHTML: endValue + (spec.value.includes('+') ? '+' : ''),
        opacity: 1,
        duration: 2,
        snap: { innerHTML: 1 },
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          end: "bottom center",
          toggleActions: "play none none reverse"
        }
      });

      // Set initial opacity for number elements
      gsap.set(numberRefs.current[index], {
        opacity: 0
      });
    })
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="h-[50vh] w-full flex justify-evenly text-white bg-[#111]">
      {specs.map((spec, index) => (
        <div key={index} className='flex flex-col items-center justify-center'>
          <p className='text-sm font-medium'>{spec.title}</p>
          <div 
            ref={el => numberContainerRefs.current[index] = el} 
            className='h-[100px] overflow-hidden flex items-center'
          >
            <div ref={el => numberRefs.current[index] = el} className='text-8xl'>{spec.startValue}</div>
          </div>
          <h1 className='text-xl'>{spec.unit}</h1>
        </div>
      ))}
    </div>
  )
}

export default NumericalSpecs
