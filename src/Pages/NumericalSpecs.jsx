import React from 'react'

const NumericalSpecs = () => {
  const specs = [
    {
      title: 'Max Power',
      value: '1200+',
      unit: 'HP'
    },
    {
      title: 'EPA est.',
      value: '358',
      unit: 'Mi'
    },
    {
      title: 'Minutes to charge 200 Miles',
      value: '12',
      unit: 'Mins'
    },
    {
      title: '0 - 60 mph',
      value: '2',
      unit: 'Sec'
    }
  ]

  return (
    <div className="h-[50vh] w-full flex justify-evenly text-white bg-[#111]">
      {specs.map((spec, index) => (
        <div key={index} className='flex flex-col items-center justify-center'>
          <p className='text-sm font-medium'>{spec.title}</p>
          <h1 className='text-8xl'>{spec.value}</h1>
          <h1 className='text-xl'>{spec.unit}</h1>
        </div>
      ))}
    </div>
  )
}

export default NumericalSpecs
