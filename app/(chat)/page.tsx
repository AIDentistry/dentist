import React from 'react'
import Card from '../../components/Card'
import Image from 'next/image'
import nicolette_mashile from '../assets/nicolette_mashile.png'
import { Button } from '@/components/ui/button'
import quote from '../assets/quote.svg'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex  xl:flex-row justify-center flex-col sm:w-3/5 w-full bg-black mt-10 mb-[8rem] gap-8">
      <div className="flex flex-col justify-center items-center h-[22rem] bg-black xl:size-1/2 w-full p-4 mt-4">
        <Image
          src={nicolette_mashile}
          alt=""
          width={300}
          className="rounded-2xl"
        />

        <div className="flex flex-row justify-center items-center w-full gap-2 mt-8 bg-black">
          <Button className="w-3/5 rounded-2xl bg-[#00A7BE] px-4">
            <h2 className="text-center font-bold text-white text-lg">
              Bookings
            </h2>
          </Button>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center bg-black xl:w-1/2 w-full gap-2 mt-[2rem]">
        <div className="flex flex-row justify-center items-center sm:w-full gap-2">
          <Card
            color="from-[#980089]"
            title="Car Finance Chat"
            gradient="bg-gradient-to-br"
          />
          <Link href="/chatbot">
            <Card
              color="from-[#830098]"
              title="Budget & Savings"
              gradient="bg-gradient-to-bl"
            />
          </Link>
        </div>

        <div className="flex flex-row justify-center items-center sm:w-full gap-2 mb-3">
          <Card
            color="from-[#8E0B5A]"
            title="Lobola Calculator"
            gradient="bg-gradient-to-tr"
          />
          <Card
            color="from-[#501282]"
            title="Rent vs Mortgage"
            gradient="bg-gradient-to-tl"
          />
        </div>

        <div className="flex w-full bg-black p-4">
          <Image src={quote} alt="" width={60} />
        </div>
        <div className="flex w-full justify-center bg-black m-4">
          <h1 className="bg-gradient-to-r from-white to-[#002256] bg-clip-text text-center max-sm:text-2xl text-3xl font-bold text-transparent m-4">
            Click your AI assistant to get started!
          </h1>
        </div>
      </div>
    </div>
  )
}
