import Image from 'next/image'
import { Jost } from 'next/font/google'

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500']
})

export default function Home() {
    return (
        <main className="min-h-screen bg-white">
            <div className='bg-orange flex flex-col items-center relative overflow-hidden h-[843px] mb-24'>
                <h1 className={`${jost.className} text-white text-center text-[32px] not-italic font-medium leading-9 w-[327px] h-[118px] mb-4 mt-16 z-20`}>Award-winning custom designs and digital branding solutions</h1>

                <p className={`${jost.className} text-white text-center text-[15px] not-italic font-normal leading-[25px] w-[327px] mb-4 z-20`}>With over 10 years in the industry, we are experienced in creating fully responsive websites,
                    app design, and engaging brand experiences. Find out more about our services.
                </p>

                <button className={`${jost.className} cursor-pointer no-underline inline-flex justify-center items-center bg-white text-black text-[15px] not-italic font-medium leading-normal tracking-wider uppercase py-4 px-6 rounded-lg z-20`}>Learn More</button>

                <Image
                    priority
                    src="/images/home/desktop/bg-pattern-hero-home.svg"
                    width={640}
                    height={640}
                    alt='A circle for the design'
                    className='absolute top-[14%] left-[6rem] z-10'
                />

                <Image
                    priority
                    src="/images/home/desktop/image-hero-phone.png"
                    width={663}
                    height={828}
                    alt='hero phone frame display'
                    className='absolute top-[61%] z-10'
                />
            </div>

            <div className='grid gap-y-4 justify-items-center mb-[128px]'>
                {/* First Image */}
                <div className='relative'>
                    <Image
                        priority
                        src="/images/home/mobile/image-web-design.jpg"
                        width={327}
                        height={250}
                        alt='A part of a laptop with a touchpad'
                        className='rounded-lg'
                    />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                        <div className='text-center'>
                            <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>Web design</p>
                            <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                        </div>
                    </div>
                </div>

                {/* Second Image */}
                <div className='relative'>
                    <Image
                        priority
                        src="/images/home/mobile/image-app-design.jpg"
                        width={327}
                        height={250}
                        alt='a smartphone'
                        className='rounded-lg'
                    />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                        <div className='text-center'>
                            <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>App design</p>
                            <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                        </div>
                    </div>
                </div>

                {/* Third Image */}
                <div className='relative'>
                    <Image
                        priority
                        src="/images/home/mobile/image-graphic-design.jpg"
                        width={327}
                        height={250}
                        alt='idk'
                        className='rounded-lg'
                    />
                    <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center'>
                        <div className='text-center'>
                            <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>Graphic design</p>
                            <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                        </div>
                    </div>
                </div>
            </div>

                <div className='flex flex-col items-center'>
                    <div className='relative z-10 mb-12'>
                        <Image
                            src="/images/home/desktop/illustration-passionate.svg"
                            width={202}
                            height={202}
                            alt='Character working on a graphical tablet'
                        />

                        <div className='absolute top-0 z-0'>
                            <Image
                                src="/images/shared/desktop/bg-pattern-small-circle.svg"
                                width={202}
                                height={202}
                                alt='Light circle design'
                            />
                        </div>
                    </div>

                    <div>
                        <p className={`text-black text-center ${jost.className} text-xl font-medium leading-[26px] tracking-[5px] mb-8`} >PASSIONATE</p>
                        <p className={`text-black text-center ${jost.className} text-base font-normal leading-[26px] w-[327px] mb-20`}>
                            Each project starts with an in-depth brand research to ensure we only create products that serve a purpose.
                            We merge art, design, and technology into exciting new solutions.
                        </p>
                    </div>

                    <div className='relative z-10 mb-12'>
                        <Image
                            src="/images/home/desktop/illustration-resourceful.svg"
                            width={202}
                            height={202}
                            alt='Character working on a graphical tablet'
                        />

                        <div className='absolute top-0 z-0'>
                            <Image
                                src="/images/shared/desktop/bg-pattern-small-circle.svg"
                                width={202}
                                height={202}
                                alt='Light circle design'
                            />
                        </div>
                    </div>

                    <div>
                        <p className={`text-black text-center ${jost.className} text-xl font-medium leading-[26px] tracking-[5px] mb-8`} >RESOURCEFUL</p>
                        <p className={`text-black text-center ${jost.className} text-base font-normal leading-[26px] w-[327px] mb-20`}>
                            Everything that we do has a strategic purpose.
                            We use an agile approach in all of our projects and value customer collaboration.
                            It guarantees superior results that fulfill our clients needs.
                        </p>
                    </div>

                    <div className='relative z-10 mb-12'>
                        <Image
                            src="/images/home/desktop/illustration-friendly.svg"
                            width={202}
                            height={202}
                            alt='Character working on a graphical tablet'
                        />

                        <div className='absolute top-0 z-0'>
                            <Image
                                src="/images/shared/desktop/bg-pattern-small-circle.svg"
                                width={202}
                                height={202}
                                alt='Light circle design'
                            />
                        </div>
                    </div>

                    <div>
                        <p className={`text-black text-center ${jost.className} text-xl font-medium leading-[26px] tracking-[5px] mb-8`} >FRIENDLY</p>
                        <p className={`text-black text-center ${jost.className} text-base font-normal leading-[26px] w-[327px] mb-20`}>
                            We are a group of enthusiastic folks who know how to put people first.
                            Our success depends on our customers,
                            and we strive to give them the best experience a company can provide.
                        </p>
                    </div>

                </div>
        </main>
    )
}
