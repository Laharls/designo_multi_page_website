'use client'

import dynamic from 'next/dynamic';
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500']
})

const Canada = dynamic(
  () => import('../__components/canada_map'), // Replace '@components/Map' with the actual location of your Map component
  { ssr: false }
);

const Australia = dynamic(
  () => import('../__components/australia_map'), // Replace '@components/Map' with the actual location of your Map component
  { ssr: false }
);

const UnitedKingdom = dynamic(
  () => import('../__components/united_kingdom_map'), // Replace '@components/Map' with the actual location of your Map component
  { ssr: false }
);

function Locations() {
  return (
    <main className='bg-white min-h-screen'>
      <div className='flex flex-col justify-center items-center md:w-[90%] md:my-0 mx-auto desktop:flex-row-reverse desktop:items-stretch'>
        <Canada />

        <div className='flex flex-col justify-center items-center bg-beige w-full mb-10 desktop:mb-0'>
          <div >
            <h1 className={`${jost.className} text-orange text-center text-[32px] font-medium leading-9 mb-6 mt-20`}>Canada</h1>

            <p className={`${jost.className} text-center font-[15px] leading-[25px] mb-6`}>
              <span className='font-bold'>Designo Central Office</span> <br />
              3886 Wellington Street <br />
              Toronto, Ontario M9C 3J5
            </p>
          </div>

          <p className={`${jost.className} text-center font-[15px] leading-[25px] pb-[60px]`}>
            <span className='font-bold'>Contact</span> <br />
            P: +1 253-863-8967 <br />
            M : contact@designo.co
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center md:w-[90%] md:my-0 mx-auto desktop:flex-row desktop:items-stretch'>
        <Australia />

        <div className='flex flex-col justify-center items-center bg-beige w-full mb-10 desktop:mb-0'>
          <div>
            <h1 className={`${jost.className} text-orange text-center text-[32px] font-medium leading-9 mb-6 mt-20`}>Australia</h1>

            <p className={`${jost.className} text-center font-[15px] leading-[25px] mb-6`}>
              <span className='font-bold'>Designo AU Office</span> <br />
              19 Balonne Street <br />
              New South Wales 2443
            </p>
          </div>

          <p className={`${jost.className} text-center font-[15px] leading-[25px] pb-[60px]`}>
            <span className='font-bold'>Contact</span> <br />
            P : (02) 6720 9092 <br />
            M : contact@designo.au
          </p>
        </div>
      </div>

      <div className='flex flex-col justify-center items-center md:w-[90%] md:my-0 mx-auto desktop:flex-row-reverse desktop:items-stretch'>
        <UnitedKingdom />

        <div className='flex flex-col justify-center items-center bg-beige w-full mb-10 desktop:mb-0'>
          <div>
            <h1 className={`${jost.className} text-orange text-center text-[32px] font-medium leading-9 mb-6 mt-20`}>United Kingdom</h1>

            <p className={`${jost.className} text-center font-[15px] leading-[25px] mb-6`}>
              <span className='font-bold'>Designo UK Office</span> <br />
              13  Colorado Way <br />
              Rhyd-y-fro SA8 9GA
            </p>
          </div>

          <p className={`${jost.className} text-center font-[15px] leading-[25px] pb-[60px]`}>
            <span className='font-bold'>Contact</span> <br />
            P : 078 3115 1400 <br />
            M : contact@designo.uk
          </p>
        </div>
      </div>
    </main>
  )

  //return <Map />;
}

export default Locations;