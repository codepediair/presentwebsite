import React from 'react'
import { InfiniteMovingCards } from './ui/InfinitMovingCards'
import { testimonials } from '@/data'

const Clients = () => {
  return (
    <div className='py-20' id='clients'>
      <h1 className='heading'>
         Kind Words from
         <span className='text-purple'>{' '}satisfied clients</span>
      </h1>
      <div className='h-[50vh] md:h-[30rem] rounded-md flex flex-col items-center relative overflow-hidden'>
         <InfiniteMovingCards
            items={testimonials}
            direction='right'
            speed='slow'
         />
      </div>
    </div>
  )
}

export default Clients
