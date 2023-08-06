import Image from 'next/image'
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400','500']
})

export default function Home() {
    return (
        <main className="min-h-screen">
            <div className='bg-orange flex flex-col justify-center items-center'>
                <h1 className={`${jost.className} text-white text-center text-[32px] not-italic font-medium leading-9 w-[327px] h-[118px] mb-4 mt-16`}>Award-winning custom designs and digital branding solutions</h1>

                <p className={`${jost.className} text-white text-center text-[15px] not-italic font-normal leading-[25px] w-[327px] mb-4`}>With over 10 years in the industry, we are experienced in creating fully responsive websites,
                   app design, and engaging brand experiences. Find out more about our services.
                </p>

                <button className={`${jost.className} cursor-pointer no-underline inline-flex justify-center items-center bg-white text-black text-[15px] not-italic font-medium leading-normal tracking-wider uppercase py-4 px-6 rounded-lg`}>Learn More</button>
            </div>
        </main>
    )
}
