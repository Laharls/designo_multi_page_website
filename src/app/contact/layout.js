import Image from "next/image"
import Link from "next/link"
import { Jost } from 'next/font/google'

const jost = Jost({
  subsets: ['latin'],
  display: 'swap',
  weight: '400'
})

const Layout = ({ children }) => (
  <div>
    <header className="flex justify-between items-center h-24 bg-white md:p-12 desktop:pl-40">
      <Image
        priority
        src="/images/shared/desktop/logo-dark.png"
        width={202}
        height={27}
        className="ml-6 md:ml-10"
        alt="Designo logo"
      />

      <Image
        priority
        src="/images/shared/mobile/icon-hamburger.svg"
        width={24}
        height={20}
        className="mr-6 md:hidden"
        alt="Hamburger button for mobile"
      />

      <ul className="hidden md:flex items-center gap-x-10 tracking-wide desktop:pr-40">

        <li><Link href="/about" className={jost.className}>Our company</Link></li>
        <li><Link href="/locations" className={jost.className}>Locations</Link></li>
        <li><Link href="/contact" className={jost.className}>Contact</Link></li>
      </ul>
    </header>
    {children}
    <footer>
      <div className="bg-black">
        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between">
          <Image
            src="/images/shared/desktop/logo-light.png"
            width={202}
            height={27}
            alt="Designo logo light"
            className="mt-16 md:ml-[39px] md:mt-[87px] lg:ml-[169px]"
          />

          <ul className="text-white md:flex md:mr-[39px] items-center gap-x-10 mt-16 md:mt-[87px] tracking-wide lg:mr-[169px]">

            <li className="mb-8 text-center md:mb-0"><Link href="/about" className={`${jost.className} text-white  text-sm font-normal leading-[14px] tracking-wider`}>OUR COMPANY</Link></li>
            <li className="mb-8 text-center md:mb-0"><Link href="/locations" className={`${jost.className} text-white  text-sm font-normal leading-[14px] tracking-wider`}>LOCATIONS</Link></li>
            <li className="mb-8 text-center md:mb-0"><Link href="/contact" className={`${jost.className} text-white  text-sm font-normal leading-[14px] tracking-wider`}>CONTACT</Link></li>
          </ul>
        </div>

        <div className="flex flex-col justify-center items-center md:flex-row md:justify-between md:h-[200px]">
          <p className={`${jost.className} text-center font-[15px] leading-[25px] mb-6 text-white w-[327px] text-opacity-50 md:w-[240px] md:text-justify md:ml-[39px] lg:ml-[169px]`}>
            <span className='font-bold'>Designo Central Office</span> <br />
            3886 Wellington Street <br />
            Toronto, Ontario M9C 3J5
          </p>

          <p className={`${jost.className} text-center font-[15px] leading-[25px] pb-[60px] md:pb-0 md:mb-6 text-white w-[327px] md:w-[240px] text-opacity-50 md:text-justify lg:-ml-40`}>
            <span className='font-bold'>Contact</span> <br />
            P: +1 253-863-8967 <br />
            M : contact@designo.co
          </p>

          <ul className="flex gap-4 md:mr-[39px] lg:mr-[169px]">
            <Image 
              src="/images/shared/desktop/icon-facebook.svg"
              width={24}
              height={24}
              alt="Meta icon"
            />  
            <Image 
              src="/images/shared/desktop/icon-youtube.svg"
              width={24}
              height={24}
              alt="Youtube icon"
            />
            <Image 
              src="/images/shared/desktop/icon-twitter.svg"
              width={24}
              height={24}
              alt="Twitter (X) icon"
            />
            <Image 
              src="/images/shared/desktop/icon-pinterest.svg"
              width={24}
              height={24}
              alt="Pinterest icon"
            />
            <Image 
              src="/images/shared/desktop/icon-instagram.svg"
              width={24}
              height={24}
              alt="Instagram icon"
            />  
          </ul>
        </div>
      </div>
    </footer>
  </div>
)

export default Layout