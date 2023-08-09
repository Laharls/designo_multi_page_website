import Image from "next/image"
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500']
})

export default function About() {
  return (
    <main className="bg-white min-h-screen">
      <div className="flex flex-col justify-center items-center">
        <Image
          priority
          src="/images/about/mobile/image-about-hero.jpg"
          width={375}
          height={320}
          alt="A lot of desktop on a table"
        />

        <div className="bg-orange relative overflow-hidden pt-20 w-full">
          <div className="flex flex-col justify-center items-center">
            <h1 className={`w-[327px] text-white text-center ${jost.className} text-[32px] not-italic font-medium leading-9 mb-6`}>About us</h1>

            <p className={`w-[327px] text-white text-center ${jost.className} text-[15px] not-italic font-normal leading-[25px] mb-20`}>
              Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact.
              We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.
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

        </div>
      </div>

      <div className="flex flex-col justify-center items-center">
        <Image
          priority
          src="/images/about/mobile/image-world-class-talent.jpg"
          width={375}
          height={320}
          alt="A lot of desktop on a table"
        />

        <div className="bg-beige relative pt-20 w-full">
          <div className="flex flex-col justify-center items-center">
            <h2 className={`w-[327px] text-center text-orange ${jost.className} text-[32px] not-italic font-medium leading-9 mb-6`}>World-class talent</h2>

            <p className={`w-[327px] text-black text-center ${jost.className} text-[15px] not-italic font-normal leading-[25px] mb-20`}>
              We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market.
              We are constantly updating our skills in a myriad of platforms.

              Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important.
              We give great importance to craftsmanship, service, and prompt delivery.
              Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.
            </p>
          </div>

        </div>

        <div className="flew flex-col justify-center items-center">
          {/* Thing with the different places */}
          <div className="relative">
            <Image 
              src="/images/shared/desktop/illustration-canada.svg"
              width={182}
              height={143}
              alt="Mythic monument of Canada"
            />
            <div className="absolute top-0">
              <Image
                src="/images/shared/desktop/bg-pattern-small-circle.svg"
                width={202}
                height={202}
                alt='Light circle design'
              />
            </div>
            
            <div className="flex flex-col justify-center items-center">
              <p>CANADA</p>
              <button>SEE LOCATION</button>
            </div>
          </div>

          <div className="relative">
            <Image 
              src="/images/shared/desktop/illustration-australia.svg"
              width={182}
              height={143}
              alt="Mythic monument of Australia"
            />
            <div className="absolute top-0">
              <Image
                src="/images/shared/desktop/bg-pattern-small-circle.svg"
                width={202}
                height={202}
                alt='Light circle design'
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <p>AUSTRALIA</p>
              <button>SEE LOCATION</button>
            </div>
          </div>

          <div className="relative">
            <Image 
              src="/images/shared/desktop/illustration-united-kingdom.svg"
              width={182}
              height={143}
              alt="United kingdom mythic bridge"
            />
            <div className="absolute top-0">
              <Image
                src="/images/shared/desktop/bg-pattern-small-circle.svg"
                width={202}
                height={202}
                alt='Light circle design'
              />
            </div>

            <div className="flex flex-col justify-center items-center">
              <p>UNITED KINGDOM</p>
              <button>SEE LOCATION</button>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center">
          <Image
            priority
            src="/images/about/mobile/image-real-deal.jpg"
            width={689}
            height={320}
            alt="random thing"
          />

          <div className="bg-beige pt-20 w-full">
            <div className="flex flex-col justify-center items-center">
              <h2 className={`w-[327px] text-center text-orange ${jost.className} text-[32px] not-italic font-medium leading-9 mb-6`}>The real deal</h2>

              <p className={`w-[327px] text-black text-center ${jost.className} text-[15px] not-italic font-normal leading-[25px] mb-20`}>
                As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own.
                Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity.
                We make design and technology more accessible and give you tools to measure success.

                We are visual storytellers in appealing and captivating ways.
                By combining business and marketing strategies, we inspire audiences to take action and drive real results.
              </p>
            </div>

          </div>
        </div>
      </div>
    </main>
  )
}