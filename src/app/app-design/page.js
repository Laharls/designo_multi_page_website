import Image from 'next/image'
import { Jost } from 'next/font/google'
import Link from "next/link"

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500']
})

export default function App_design() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-orange relative h-[320px] mb-24 overflow-hidden">
                <div className="flex flex-col justify-center items-center pt-[105px]">
                    <h1 className={`${jost.className} w-[327px] text-center text-[32px] not-italic font-medium leading-9 text-white mb-6 md:w-[689px] md:text-5xl md:leading-[48px]`}>App Design</h1>
                    <p className={`${jost.className} w-[327px] text-center text-[15px] not-italic font-normal leading-[25px] text-white md:w-[425px] md:leading-[26px]`}>
                        Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.
                    </p>
                </div>

                <Image
                    priority
                    src="/images/home/desktop/bg-pattern-hero-home.svg"
                    width={292}
                    height={292}
                    alt='A circle for the design'
                    className='absolute top-0 left-20 md:hidden'
                />

                <Image
                    priority
                    src="/images/web-design/desktop/bg-pattern-intro-web.svg"
                    width={800}
                    height={800}
                    alt='A circle for the design'
                    className='absolute hidden top-[-6rem] left-28 md:inline-block desktop:left-[69rem]'
                />
            </div>

            <div className='flex justify-center'>
                <div className='grid gap-y-4 justify-items-center mb-24 desktop:grid-cols-[350px_350px_350px] desktop:grid-rows-2 desktop:gap-x-4'>
                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/app-design/desktop/image-airfilter.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-airfilter.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-airfilter.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>AIRFILTER</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>Solving the problem of poor indoor air quality by filtering the air    </p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/app-design/desktop/image-eyecam.jpg"
                            width={327}
                            height={320}
                            alt='Transfer project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-eyecam.jpg"
                            width={338}
                            height={320}
                            alt='Transfer project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-eyecam.jpg"
                            width={350}
                            height={320}
                            alt='Transfer project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>EYECAM</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>Product that lets you edit your favorite photos and videos at any time</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/app-design/desktop/image-faceit.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-faceit.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-faceit.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>FACEIT</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>Get to meet your favorite internet superstar with the faceit app</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/app-design/desktop/image-todo.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-todo.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-todo.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>TODO</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>A todo app that features cloud sync with light and dark mode</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/app-design/desktop/image-loopstudios.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-loopstudios.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/app-design/desktop/image-loopstudios.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>LOOPSTUDIOS</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>A VR experience app made for Loopstudios</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* App design & graphic design */}

            <div className='flex flex-col justify-center items-center gap-y-4 desktop:flex-row desktop:gap-4 pb-40'>
                <div className='relative group'>
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
                        src="/images/home/desktop/image-web-design-small.jpg"
                        width={541}
                        height={308}
                        alt='A part of a laptop with a touchpad'
                        className='rounded-lg hidden desktop:inline-block'
                    />
                    <Link href="/web-design">
                        <div className='absolute top-0 left-0 w-full h-full md:h-[200px] desktop:h-[308px] rounded-lg flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 desktop:group-hover:bg-orange desktop:group-hover:bg-opacity-80 desktop:transition-colors desktop:duration-300'>
                            <div className='text-center'>
                                <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>Web design</p>
                                <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                            </div>
                        </div>
                    </Link>

                </div>

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
                    <Link href="/graphic-design">
                        <div className='absolute top-0 left-0 w-full h-full md:h-[200px] desktop:h-[308px] rounded-lg flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 desktop:group-hover:bg-orange desktop:group-hover:bg-opacity-80 desktop:transition-colors desktop:duration-300'>
                            <div className='text-center'>
                                <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>Graphic design</p>
                                <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </main>
    )
}