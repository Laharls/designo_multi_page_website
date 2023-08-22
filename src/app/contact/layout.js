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
      <p>Footer space</p>
    </footer>
  </div>
)

export default Layout