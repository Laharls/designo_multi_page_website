import Image from 'next/image'
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500']
})


const Contact = () => (
  <main className="bg-white min-h-screen">
    <div className="bg-orange flex flex-col justify-center items-center mb-[120px]">
      <div className="w-[327px] mb-12">
        <h1 className={`${jost.className} text-white text-center text-[32px] font-medium leading-9 mb-6 mt-[72px]`}>Contact Us</h1>

        <p className={`${jost.className} text-white w-[327px] text-center text-[15px] font-normal not-italic leading-[25px]`}>
          Ready to take it to the next level? Let’s talk about your project or idea and find out how we can help your business grow.
          If you are looking for unique digital experiences that’s relatable to your users, drop us a line.
        </p>
      </div>

      <div>
        <form action="/send-data-here" method="post" className=" w-[327px]">
          <label for="name"></label>
          <input type="text" id="name" name="name" className="bg-orange text-white placeholder-white placeholder-opacity-75 border-b-[1px] w-full pl-2 pb-2 focus:border-white focus:outline-none" placeholder="Name" />
          <label for="email"></label>
          <input type="email" id="email" name="email" className="bg-orange text-white placeholder-white placeholder-opacity-75 border-b-[1px] w-full pl-2 pb-2 focus:border-white focus:outline-none" placeholder="Email Address" />
          <label for="phone"></label>
          <input type="tel" id="phone" name="phone" className="bg-orange text-white placeholder-white placeholder-opacity-75 border-b-[1px] w-full pl-2 pb-2 focus:border-white focus:outline-none" placeholder="Phone" />
          <label for="message"></label>
          <input type="text" id="message" name="message" className="bg-orange text-white placeholder-white placeholder-opacity-75 border-b-[1px] w-full pl-2 pb-16 focus:border-white focus:outline-none mb-10" placeholder="Your message" />
          <button type="submit" className="block mx-auto bg-white px-12 py-4 rounded-lg mb-[72px]">Submit</button>
        </form>
      </div>
    </div>

    <div className="flex flex-col justify-center items-center desktop:flex-row desktop:w-[1110px] desktop:justify-around desktop:mb-40">
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

        <div className="flex flex-col justify-center items-center mb-12">
          <p className={`${jost.className} text-center font-medium leading-[26px] tracking-wider not-italic text-xl mb-8 mt-8`}>CANADA</p>
          <button className={`py-4 px-6 bg-orange rounded-lg text-white ${jost.className}`}>SEE LOCATION</button>
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

        <div className="flex flex-col justify-center items-center mb-12">
          <p className={`${jost.className} text-center font-medium leading-[26px] tracking-wider not-italic text-xl mb-8 mt-8`}>AUSTRALIA</p>
          <button className={`py-4 px-6 bg-orange rounded-lg text-white ${jost.className}`}>SEE LOCATION</button>
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

        <div className="flex flex-col justify-center items-center mb-12">
          <p className={`${jost.className} text-center font-medium leading-[26px] tracking-wider not-italic text-xl mb-8 mt-8`}>UNITED KINGDOM</p>
          <button className={`py-4 px-6 bg-orange rounded-lg text-white ${jost.className}`}>SEE LOCATION</button>
        </div>
      </div>
    </div>
  </main>

)

export default Contact