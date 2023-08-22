import Image from 'next/image'
import { Jost } from 'next/font/google'

const jost = Jost({
    subsets: ['latin'],
    display: 'swap',
    weight: ['400', '500']
})

export default function Web_design() {
    return (
        <main className="min-h-screen bg-white">
            <div className="bg-orange relative h-[320px] mb-24 overflow-hidden">
                <div className="flex flex-col justify-center items-center pt-[105px]">
                    <h1 className={`${jost.className} w-[327px] text-center text-[32px] not-italic font-medium leading-9 text-white mb-6 md:w-[689px] md:text-5xl md:leading-[48px]`}>Web Design</h1>
                    <p className={`${jost.className} w-[327px] text-center text-[15px] not-italic font-normal leading-[25px] text-white md:w-[425px] md:leading-[26px]`}>
                        We build websites that serve as powerful marketing tools
                        and bring memorable brand experiences.
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
                            src="/images/web-design/desktop/image-express.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-express.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-express.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>EXPRESS</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>A multi-carrier shipping website for ecommerce businesses</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/web-design/desktop/image-transfer.jpg"
                            width={327}
                            height={320}
                            alt='Transfer project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-transfer.jpg"
                            width={338}
                            height={320}
                            alt='Transfer project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-transfer.jpg"
                            width={350}
                            height={320}
                            alt='Transfer project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>TRANSFER</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>Site for low-cost money transfers and sending money within seconds</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/web-design/desktop/image-photon.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-photon.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-photon.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>PHOTON</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>A state-of-the-art music player with high-resolution audio and DSP effects</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/web-design/desktop/image-builder.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-builder.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-builder.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>BUILDER</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>Connects users with local contractors based on their location</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/web-design/desktop/image-blogr.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-blogr.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-blogr.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>BLOGR</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>Blogr is a platform for creating an online blog or publication</p>
                        </div>
                    </div>

                    {/*  */}

                    <div className='w-[327px] flex flex-col md:flex-row md:w-[689px] md:h[310px] md:justify-center desktop:flex-col desktop:w-[350px]'>
                        <Image
                            priority
                            src="/images/web-design/desktop/image-camp.jpg"
                            width={327}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg md:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-camp.jpg"
                            width={338}
                            height={320}
                            alt='Express project design'
                            className='rounded-l-lg hidden md:inline-block desktop:hidden'
                        />

                        <Image
                            priority
                            src="/images/web-design/desktop/image-camp.jpg"
                            width={350}
                            height={320}
                            alt='Express project design'
                            className='rounded-t-lg hidden desktop:inline-block'
                        />

                        <div className='bg-beige rounded-b-lg md:rounded-r-lg md:rounded-b-none desktop:rounded-r-none desktop:rounded-br-lg desktop:rounded-bl-lg flex flex-col justify-center items-center md:w-[350px] desktop:hover:bg-orange desktop:hover:transition-all group'>
                            <h2 className={`${jost.className} w-[267.206px] text-center text-xl not-italic font-medium leading-[26px] tracking-[5px] text-orange mt-8 mb-4 desktop:group-hover:text-white desktop:hover:transition-all`}>CAMP</h2>
                            <p className={`${jost.className} w-[267.206px] text-black text-center text-base not-italic font-normal leading-[26px] mb-8 desktop:group-hover:text-white desktop:hover:transition-all`}>Get expert training in coding, data, design, and digital marketing</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* App design & graphic design */}

            <div className='flex flex-col justify-center items-center gap-y-4 desktop:flex-row desktop:gap-4'>
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
                        className='rounded-lg hidden desktop:inline-block'
                    />

                    <div className='absolute top-0 left-0 w-full h-full md:h-[200px] desktop:h-[308px] rounded-lg flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 desktop:group-hover:bg-orange desktop:group-hover:bg-opacity-80 desktop:transition-colors desktop:duration-300'>
                        <div className='text-center'>
                            <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>App design</p>
                            <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                        </div>
                    </div>
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

                    <div className='absolute top-0 left-0 w-full h-full md:h-[200px] desktop:h-[308px] rounded-lg flex items-center justify-center bg-black bg-opacity-40 group-hover:bg-opacity-0 desktop:group-hover:bg-orange desktop:group-hover:bg-opacity-80 desktop:transition-colors desktop:duration-300'>
                        <div className='text-center'>
                            <p className={`${jost.className} text-white text-center text-[28px] not-italic font-medium leading-9 tracking-wider uppercase`}>Graphic design</p>
                            <p className={`${jost.className} text-white text-[15px] not-italic font-regular leading-normal tracking-widest uppercase`}>View projects <span className='text-orange'>&gt;</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}