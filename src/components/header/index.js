import Image from 'next/image'
import EmailIcon from '../../../public/icons/envelope-at-fill.svg'
import Link from 'next/link'
import {useEffect, useRef, useState} from 'react'

const HeaderComponent = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const menuRef = useRef(null)

  const handleSetIsNavOpen = () => {
    setIsNavOpen(true)
  }

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection.scrollIntoView({behavior: 'smooth'})
    setIsNavOpen(false)
  }

  const handleConsultClick = () => {
    const contactSection = document.getElementById('consult')
    contactSection.scrollIntoView({behavior: 'smooth'})
    setIsNavOpen(false)
  }
  const handleAboutctClick = () => {
    const contactSection = document.getElementById('about')
    contactSection.scrollIntoView({behavior: 'smooth'})
    setIsNavOpen(false)
  }

  return (
    <div className="w-full px-5 md:px-0 flex justify-between pt-2 max-w-screen-lg mx-auto">
      <div className="flex gap-5 items-center">
        <Image src={EmailIcon} alt="" height={20} width={15} />
        <h2 className="text-xl font-bold">Christian M.</h2>
      </div>
      <nav className="flex items-center">
        <ul className="hidden md:flex gap-5 text-xs font-bold ">
          <li>
            <button onClick={handleConsultClick}>Consultoria</button>
          </li>
          <li>
            <button onClick={handleAboutctClick}>Sobre</button>
          </li>
          <li>
            <button onClick={handleContactClick}>Contato</button>
          </li>
        </ul>
        <div className="md:hidden">
          <nav>
            <section className="MOBILE-MENU flex lg:hidden">
              <div className="HAMBURGER-ICON space-y-2" onClick={handleSetIsNavOpen}>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
                <span className="block h-0.5 w-8 animate-pulse bg-gray-600"></span>
              </div>

              <div className={isNavOpen ? 'showMenuNav' : 'hideMenuNav'}>
                <div
                  className="absolute top-0 right-0 px-8 py-8"
                  onClick={() => setIsNavOpen(false)}
                >
                  <svg
                    className="h-8 w-8 text-gray-600"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </div>
                <ul className="flex flex-col items-center justify-between min-h-[250px]">
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button onClick={handleConsultClick}>Consultoria</button>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button onClick={handleAboutctClick}>Sobre</button>
                  </li>
                  <li className="border-b border-gray-400 my-8 uppercase">
                    <button onClick={handleContactClick}>Contato</button>
                  </li>
                </ul>
              </div>
            </section>
          </nav>
          <style>{`
      .hideMenuNav {
        display: none;
      }
      .showMenuNav {
        display: block;
        position: absolute;
        width: 100%;
        height: 100vh;
        top: 0;
        left: 0;
        background: white;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
      }
    `}</style>
        </div>
      </nav>
    </div>
  )
}

export default HeaderComponent
