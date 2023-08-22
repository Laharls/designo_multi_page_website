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
            <div className='bg-orange flex flex-col items-center relative overflow-hidden h-[843px] mb-24 md:mx-10 md:rounded-lg'>
                <h1 className={`${jost.className} text-white text-center text-[32px] not-italic font-medium leading-9 w-[327px] h-[118px] mb-4 mt-16 z-20 md:w-[573px] md:text-[48px] md:leading-[48px] md:mb-12`}>Award-winning custom designs and digital branding solutions</h1>

                <p className={`${jost.className} text-white text-center text-[15px] not-italic font-normal leading-[25px] w-[327px] mb-4 z-20 md:w-[445px] md:text-base md:leading-[26px]`}>With over 10 years in the industry, we are experienced in creating fully responsive websites,
                    app design, and engaging brand experiences. Find out more about our services.
                </p>

                <button className={`${jost.className} cursor-pointer no-underline inline-flex justify-center items-center bg-white text-black text-[15px] not-italic font-medium leading-normal tracking-wider uppercase py-4 px-6 rounded-lg z-20`}>Learn More</button>

                <Image
                    priority
                    src="/images/home/desktop/bg-pattern-hero-home.svg"
                    width={640}
                    height={640}
                    alt='A circle for the design'
                    className='absolute top-[14%] left-[0rem] z-10 max-w-[150%] md:left-[16rem]'
                />

                <Image
                    priority
                    src="/images/home/desktop/image-hero-phone.png"
                    width={663}
                    height={828}
                    alt='hero phone frame display'
                    className='absolute top-[32%] z-10 max-w-[175%]'
                />
            </div>

            <div className='desktop:flex desktop:justify-center'>
                <div className='grid gap-y-4 justify-items-center mb-[128px] desktop:grid-cols-[541px_541px] desktop:grid-rows-2 desktop:gap-x-4'>
                    {/* First Image */}
                    <div className='relative desktop:row-span-2 group'>
                        <Image
                            priority
                            src="/images/home/mobile/image-web-design.jpg"
                            width={327}
                            height={250}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/home/tablet/image-web-design.jpg"
                            width={689}
                            height={200}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/home/desktop/image-web-design-large.jpg"
                            width={541}
                            height={640}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg hidden row-span-2 desktop:inline-block'
                        />
                        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 desktop:group-hover:bg-orange desktop:group-hover:bg-opacity-80 desktop:transition-colors desktop:duration-300'>
                            <div className='text-center'>
                                <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>Web design</p>
                                <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Second Image */}
                    <div className='relative group'>
                        <Image
                            priority
                            src="/images/home/mobile/image-app-design.jpg"
                            width={327}
                            height={250}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/home/tablet/image-app-design.jpg"
                            width={689}
                            height={200}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/home/desktop/image-app-design.jpg"
                            width={541}
                            height={308}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg hidden row-span-2 desktop:inline-block'
                        />
                        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 desktop:group-hover:bg-orange desktop:group-hover:bg-opacity-80 desktop:transition-colors desktop:duration-300'>
                            <div className='text-center'>
                                <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>App design</p>
                                <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                            </div>
                        </div>
                    </div>

                    {/* Third Image */}
                    <div className='relative group'>
                        <Image
                            priority
                            src="/images/home/mobile/image-graphic-design.jpg"
                            width={327}
                            height={250}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/home/tablet/image-graphic-design.jpg"
                            width={689}
                            height={200}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/home/desktop/image-graphic-design.jpg"
                            width={541}
                            height={308}
                            alt='A part of a laptop with a touchpad'
                            className='rounded-lg hidden row-span-2 desktop:inline-block'
                        />
                        <div className='absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 desktop:group-hover:bg-orange desktop:group-hover:bg-opacity-80 desktop:transition-colors desktop:duration-300'>
                            <div className='text-center'>
                                <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>Graphic design</p>
                                <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            {/* --------------------------------------------------------------------------------- */}
            <div className='desktop:flex desktop:justify-center'>
                <div className='flex flex-col items-center md:items-stretch desktop:flex-row'>
                    <div className='flex flex-col items-center md:flex-row justify-around desktop:flex-col'>
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

                        <div className='desktop:flex desktop:flex-col desktop:justify-center desktop:items-center'>
                            <p className={`text-black text-center ${jost.className} text-xl font-medium leading-[26px] tracking-[5px] mb-8 md:text-start md:w-[439px] desktop:text-center`} >PASSIONATE</p>
                            <p className={`text-black text-center ${jost.className} text-base font-normal leading-[26px] w-[327px] mb-20 md:text-start md:w-[439px] desktop:text-center desktop:w-[350px]`}>
                                Each project starts with an in-depth brand research to ensure we only create products that serve a purpose.
                                We merge art, design, and technology into exciting new solutions.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center md:flex-row justify-around desktop:flex-col'>
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

                        <div className='desktop:flex desktop:flex-col desktop:justify-center desktop:items-center'>
                            <p className={`text-black text-center ${jost.className} text-xl font-medium leading-[26px] tracking-[5px] mb-8 md:text-start md:w-[439px] desktop:text-center`} >RESOURCEFUL</p>
                            <p className={`text-black text-center ${jost.className} text-base font-normal leading-[26px] w-[327px] mb-20 md:text-start md:w-[439px] desktop:text-center desktop:w-[350px]`}>
                                Everything that we do has a strategic purpose.
                                We use an agile approach in all of our projects and value customer collaboration.
                                It guarantees superior results that fulfill our clients needs.
                            </p>
                        </div>
                    </div>

                    <div className='flex flex-col items-center md:flex-row justify-around desktop:flex-col'>
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

                        <div className='desktop:flex desktop:flex-col desktop:justify-center desktop:items-center'>
                            <p className={`text-black text-center ${jost.className} text-xl font-medium leading-[26px] tracking-[5px] mb-8 md:text-start md:w-[439px] desktop:text-center`} >FRIENDLY</p>
                            <p className={`text-black text-center ${jost.className} text-base font-normal leading-[26px] w-[327px] mb-20 md:text-start md:w-[439px] desktop:text-center desktop:w-[350px]`}>
                                We are a group of enthusiastic folks who know how to put people first.
                                Our success depends on our customers,
                                and we strive to give them the best experience a company can provide.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
