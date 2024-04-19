import React from 'react'
import Card from '../../components/Card'
import Image from 'next/image'
import dentist_male from '../assets/dentist_male.jpg'
import { Button } from '@/components/ui/button'
import quote from '../assets/tick.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex  xl:flex-row justify-center flex-col sm:w-3/5 w-full bg-[#FDF9FF] mt-10 mb-[8rem] gap-8">
      <div className="flex flex-col justify-center items-center h-[22rem] bg-[#FDF9FF] xl:size-1/2 w-full p-4 mt-4">
        <Image src={dentist_male} alt="" width={300} className="rounded-2xl" />

        <div className="flex flex-row justify-center items-center w-full gap-2 mt-8 bg-[#FDF9FF]">
          <Button className="w-3/5 rounded-2xl bg-[#00A7BE] px-4">
            <h2 className="text-center font-bold text-white text-lg">
              Bookings
            </h2>
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-[#FDF9FF] xl:w-1/2 w-full gap-1 mt-[2rem]">
        <div className="flex flex-row justify-center items-center sm:w-full gap-1">
          <Card
            colorfrom="from-[#004CBD]"
            colorto="to-[#7CD8FF]"
            title="Oral Sex Chat"
            gradient="bg-gradient-to-br"
          />
          <Link href="/chatbot">
            <Card
              colorfrom="from-[#A10091]"
              colorto="to-[#EE88FF]"
              title="Tell Me Your Symptoms"
              gradient="bg-gradient-to-bl"
            />
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center sm:w-full gap-1 mb-3">
          <Card
            colorfrom="from-[#A10091]"
            colorto="to-[#EE88FF]"
            title="Our Services"
            gradient="bg-gradient-to-tr"
          />
          <Card
            colorfrom="from-[#004CBD]"
            colorto="to-[#7CD8FF]"
            title="Smile Engineering 101"
            gradient="bg-gradient-to-tl"
          />
        </div>

        <div className="flex w-full bg-[#FDF9FF] px-4">
          <Image src={quote} alt="" width={60} />
        </div>
        <div className="flex w-full justify-center bg-[#FDF9FF] m-4">
          <h1 className="bg-gradient-to-r from-[#01002E] to-[#00CAE6] bg-clip-text text-center max-sm:text-2xl text-3xl font-bold text-transparent mx-4">
            Click your AI assistant to get started!
          </h1>
        </div>
      </div>
    </div>
  )
}
