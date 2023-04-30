/* eslint-disable jsx-a11y/alt-text */
import {Inter} from 'next/font/google'
import HeaderComponent from '@/components/header'
import Image from 'next/image'
import profileimage from '../../public/images/profileImage.png'
import teamImage from '../../public/images/growUpTeamImage.jpg'
import businessImage from '../../public/images/pessoas-negocio-apertar-mao-junto.jpg'
import EmailIcon from '../../public/icons/envelope-at-fill.svg'
import FacebookIcon from '../../public/icons/facebook.svg'
import LinkadinIcon from '../../public/icons/linkedin.svg'
import InstagramIcon from '../../public/icons/instagram.svg'
import Link from 'next/link'
import {useState} from 'react'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  const [isCopied, setIsCopied] = useState(false)

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact')
    contactSection.scrollIntoView({behavior: 'smooth'})
  }

  const handleConsultClick = () => {
    const contactSection = document.getElementById('consult')
    contactSection.scrollIntoView({behavior: 'smooth'})
  }
  const handleAboutctClick = () => {
    const contactSection = document.getElementById('about')
    contactSection.scrollIntoView({behavior: 'smooth'})
  }

  const handleEmailClick = () => {
    const email = 'fabianomster@gmail.com'
    navigator.clipboard
      .writeText(email)
      .then(() => console.log(`E-mail ${email} copiado com sucesso!`))
      .catch(() => console.error(`Erro ao copiar e-mail ${email}.`))
    setIsCopied(true)
    setTimeout(() => {
      setIsCopied(false)
    }, 3000)
  }

  return (
    <div className="flex w-full h-full bg-white">
      <div className=" md:px-0 flex w-full flex-col">
        <div className="w-full">
          <HeaderComponent />
          <section className="pt-5 flex flex-col justify-center px-5 md:px-0">
            <div className="flex flex-col justify-between items-center mx-auto gap-5">
              <div>
                <Image src={profileimage} width={150} height={200} className="rounded-full" />
              </div>
              <h2 className="text-base font-bold">Christian Mendes, consultor SAP</h2>
            </div>
            <div className="mx-auto mt-10 flex items-center flex-col gap-7" id="consult">
              <h1 className="text-3xl text-center md:text-6xl font-bold max-w-2xl">
                Consultoria SAP Expert para elevar seu negócio
              </h1>
              <p className="max-w-lg text-justify">
                Olá! me chamo Christian Mendes, sou consultor SAP com mais de duas décadas de
                experiência em tecnologia e inovação, atuo como agente de transformação em projetos
                nacionais e internacionais. Entre em contato comigo para descobrir como minha
                consultoria SAP Expert pode impulsionar seu negócio.
              </p>
              <button
                onClick={handleContactClick}
                className="bg-black text-white rounded-full py-3 px-7 text-sm"
              >
                Entre em contato
              </button>
            </div>
          </section>
        </div>
        <div className="h-[480px] mt-20 w-full mx-auto ">
          <div className="flex text-white gap-5 right-0 bg-black w-full ">
            <div className="bg-white pl-5 hidden md:block">
              <Image src={teamImage} width={500} height={300} />
            </div>
            <div className="py-10 flex flex-col text-white gap-5 pl-5 md:pl-0 ">
              <h2 className="text-2xl font-bold md:text-4xl md:font-bold">
                Alcance sucesso com a <br className="hidden md:broken" /> melhor Consultoria SAP
              </h2>
              <p className="font-medium text-sm text-zinc-300 md:font-semibold ">
                Com vasta experiência em empresas de tecnologia e <br /> inovação, atuo como
                consultor SAP e agente de <br /> transformação digital em diversos segmentos.
              </p>
              <p className="font-medium text-sm md:text- text-zinc-400  md:font-semibold">
                Expecializado em planejamento estratégico, gerencio equipes <br />
                multidisciplinares com resiliência, negociação e inteligência <br /> emocional,
                resolvendo problemas e tomando decisões <br />
                complexas de maneiras simples.
              </p>
              <span className="font-medium text-white md:font-semibold">
                Entre em contato para saber mais.
              </span>
            </div>
          </div>
        </div>
        <hr class="border-b border-black/30 w-full"></hr>
        <div className="mx-auto mt-28 w-full max-w-screen-lg ">
          <div className="flex items-center flex-col w-full " id="about">
            <h1 className="text-4xl font-bold text-center">
              Especializado em planejamento estratégico <br /> com foco nas pessoas como diferencial
              competitivo <br /> para alcançar resultados.
            </h1>
            <span className="mt-20 text-center font-bold">
              Eficiente e empático no desenvolvimento de relacionamentos sólidos, cultivo <br />{' '}
              confiança e agrego valor ao ecossistema, guiado pela transparência.
            </span>

            <div className="grid grid-flow-col gap-5 overflow-x-scroll w-full mx-auto justify-center mt-10 md:overflow-x-hidden ">
              <div className="w-[250px] ml-[450px] md:ml-0">
                <h3 className="font-bold text-lg text-left pb-5">
                  Sabe lidar com cenários de incertezas
                </h3>
                <span className="font-semibold text-zinc-600 text-sm">
                  Adotando um olhar holístico sobre a organização e o mercado atual e futuro.
                </span>
              </div>
              <div className="w-[250px]">
                <h3 className="font-bold text-lg text-left pb-5">
                  Demonstra eficiência <br /> e empatia
                </h3>
                <span className="font-semibold text-zinc-600 text-sm">
                  No desenvolvimento de relacionamentos sólidos, guiados pela transparência,
                  cultivando confiança entre funcionários, parceiros e clientes.
                </span>
              </div>
              <div className="w-[250px]">
                <h3 className="font-bold text-lg text-left pb-5">
                  Assertividade na tomada de decisões
                </h3>
                <span className="font-semibold text-zinc-600 text-sm">
                  Complexas de maneira simples nas organizações que atende em nível de diretoria.
                </span>
              </div>
            </div>

            <div className="md:flex flex-col items-center gap-14 mt-20">
              <h1 className="text-4xl font-bold md:text-center">
                Estou pronto para elevar seu negócio <br className="hidden md:block" /> com nossa
                consultoria SAP. <br className="hidden md:block" /> Entre em contato para mais{' '}
                <br className="hidden md:block" /> informações ou agendar uma reunião.
              </h1>
            </div>
            <div className="flex flex-col md:flex-row gap-5 mt-20">
              <Image src={businessImage} width={400} height={200} />
              <div className="w-[400px]">
                <h3 className="text-lg font-bold">
                  Especializado em planejamento estratégico, gerencio equipes multidisciplinares com
                  resiliência, negociação e inteligência emocional, resolvendo problemas e tomando
                  decisões complexas de maneira simples.
                </h3>
                <p className="font-semibold text-zinc-600 text-sm mt-4 md:mt-0">
                  Eficiente e empático no desenvolvimento de relacionamentos sólidos, cultivo
                  confiança e agrego valor ao ecossistema, guiado pela transparência.
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr class="border-b border-black/30 w-full my-10"></hr>
        <footer
          className="flex flex-col w-full mb-10 max-w-screen-lg items-center mx-auto"
          id="contact"
        >
          <h2 className="mx-auto font-bold text-3xl mb-10">Entre em contato</h2>
          <ul className="flex md:justify-between items-center justify-evenly  md:mb-0 gap-5 md:gap-0 max-w-lg w-full ">
            <li className="flex flex-col gap-3 items-center w-[70px] text-zinc-600 hover:text-black">
              <button onClick={handleEmailClick}>
                <Image src={EmailIcon} width={40} height={40} alt="" />
              </button>
              <span className="font-semibold ">{isCopied ? 'Copiado' : 'E-mail'}</span>
              <hr className="border-b border-black w-7" />
            </li>
            <li className="flex flex-col gap-3 items-center text-zinc-600 hover:text-black">
              <Link href={'https://instagram.com/consultoriasapaltodesempenho'}>
                <Image src={InstagramIcon} width={40} height={40} alt="" />
              </Link>
              <Link href={'https://instagram.com/consultoriasapaltodesempenho'}>
                <span className="font-semibold ">instagram</span>
              </Link>
              <hr class="border-b border-black w-7"></hr>
            </li>
            <li className="flex flex-col gap-3 items-center text-zinc-600 hover:text-black">
              <Link href={'https://fb.com/ConsutoriaSAPaltoDesempenho'}>
                <Image src={FacebookIcon} width={40} height={40} alt="" />
              </Link>
              <Link href={'https://fb.com/ConsutoriaSAPaltoDesempenho'}>
                <span className="font-semibold ">Facebook</span>
              </Link>
              <hr class="border-b border-black w-7"></hr>
            </li>
            <li className="flex flex-col gap-3 items-center text-zinc-600 hover:text-black">
              <Link href={'https://www.linkedin.com/company/consultoria-sap-alto-desempenho'}>
                <Image src={LinkadinIcon} width={40} height={40} alt="" />
              </Link>
              <Link href={'https://www.linkedin.com/company/consultoria-sap-alto-desempenho'}>
                <span className="font-semibold ">Linkedin</span>
              </Link>
              <hr class="border-b border-black w-7"></hr>
            </li>
          </ul>
        </footer>
      </div>
    </div>
  )
}
