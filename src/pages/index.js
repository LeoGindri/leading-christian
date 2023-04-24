/* eslint-disable jsx-a11y/alt-text */
import {Inter} from 'next/font/google'
import HeaderComponent from '@/components/header'
import Image from 'next/image'
import profileimage from '../../public/images/profileImage.png'
import teamImage from '../../public/images/growUpTeamImage.jpg'
import businessImage from '../../public/images/pessoas-negocio-apertar-mao-junto.jpg'

const inter = Inter({subsets: ['latin']})

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white ">
      <div className="max-w-screen-xl w-full h-full mx-auto ">
        <HeaderComponent />
        <section className="pt-5 flex flex-col justify-center">
          <div className="flex flex-col justify-between items-center mx-auto gap-5">
            <div>
              <Image src={profileimage} width={150} height={200} className="rounded-full" />
            </div>
            <h2 className="text-base font-bold">Christian Mendes, consultor SAP</h2>
          </div>
          <div className="mx-auto mt-10 flex items-center flex-col gap-7">
            <h1 className="text-6xl font-bold max-w-2xl">
              Consultoria SAP Expert para elevar seu negócio
            </h1>
            <p className="max-w-lg text-justify">
              Olá! me chamo Christian Mendes, sou consultor SAP com mais de duas décadas de
              experiência em tecnologia e inovação, atuo como agente de transformação em projetos
              nacionais e internacionais. Entre em contato comigo para descobrir como minha
              consultoria SAP Expert pode impulsionar seu negócio.
            </p>
            <button className="bg-black text-white rounded-full py-3 px-7 text-sm">
              Entre em contato
            </button>
          </div>
        </section>
      </div>
      <div className="h-[480px] w-full flex mt-20 pl-20 gap">
        <Image src={teamImage} width={900} height={400} />
        <div className="py-20 pl-10 flex flex-col text-white gap-5 w-full bg-black">
          <h2 className="text-4xl font-bold">
            Alcance sucesso com a <br /> melhor Consultoria SAP
          </h2>
          <p className="">
            Com vasta experiência em empresas de tecnologia e <br /> inovação, atuo como consultor
            SAP e agente de <br /> transformação digital em diversos segmentos.
          </p>
          <p>
            Expecializado em planejamento estratégico, gerencio equipes <br />
            multidisciplinares com resiliência, negociação e inteligência <br /> emocional,
            resolvendo problemas e tomando decisões <br />
            complexas de maneiras simples.
          </p>
          <span>Entre em contato para saber mais</span>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-28">
        <div className="flex items-center flex-col">
          <h1 className="text-4xl font-bold text-center">
            Especializado em planejamento estratégico <br /> com foco nas pessoas como diferencial
            competitivo <br /> para alcançar resultados.
          </h1>
          <span className="mt-28 text-center font-semibold">
            Eficiente e empático no desenvolvimento de relacionamentos sólidos, cultivo <br />{' '}
            confiança e agrego valor ao ecossistema, guiado pela transparência.
          </span>
          <div className="flex max-w-screen-lg mt-20 gap-5">
            <div className="max-w-[300px]">
              <h3 className="font-bold text-lg text-left pb-5">
                Sabe lidar com cenários de incertezas
              </h3>
              <span className="font-semibold text-zinc-600 text-sm">
                Adotando um olhar holístico sobre a organização e o mercado atual e futuro.
              </span>
            </div>
            <div className="max-w-[300px]">
              <h3 className="font-bold text-lg text-left pb-5">
                Demonstra eficiência <br /> e empatia
              </h3>
              <span className="font-semibold text-zinc-600 text-sm">
                No desenvolvimento de relacionamentos sólidos, guiados pela transparência,
                cultivando confiança entre funcionários, parceiros e clientes.
              </span>
            </div>
            <div className=" max-w-[300px]">
              <h3 className="font-bold text-lg text-left pb-5">
                Assertividade na tomada de decisões
              </h3>
              <span className="font-semibold text-zinc-600 text-sm">
                Complexas de maneira simples nas organizações que atende em nível de diretoria.
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center gap-14 max-w-screen-lg mt-20">
            <h1 className="text-4xl font-bold text-center">
              Estou pronto para elevar seu negócio <br /> com nossa consultoria SAP. <br /> Entre em
              contato para mais <br /> informações ou agendar uma reunião.
            </h1>
            <button className="bg-black max-w-max text-white rounded-full py-3 px-7 text-sm">
              Entre em contato
            </button>
          </div>
          <div className="flex flex-col bg-blue-200 text-start gap-14 max-w-screen-lg mt-20">
            <h2 className="text-lg font-bold ">Depoimentos</h2>
          </div>
          <div className="flex gap-5 max-w-screen-lg ">
            <Image src={businessImage} width={400} height={200} />
            <div className=" w-[400px]">
              <h3 className="text-lg font-bold">
                Especializado em planejamento estratégico, gerencio equipes multidisciplinares com
                resiliência, negociação e inteligência emocional, resolvendo problemas e tomando
                decisões complexas de maneira simples.
              </h3>
              <p className="font-semibold text-zinc-600 text-sm">
                Eficiente e empático no desenvolvimento de relacionamentos sólidos, cultivo
                confiança e agrego valor ao ecossistema, guiado pela transparência.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-5 max-w-screen-lg items-center mt-20">
            <h1 className="font-bold text-4xl">Principais Projetos:</h1>
            <div className="">
              <ul className="flex gap-5">
                <li>
                  <h3 className="font-semibold text-lg text-zinc-600">Projeto 1</h3>
                  <p>Lorem Ipsum lorem ipsum</p>
                </li>
                <li>
                  <h3 className="font-semibold text-lg text-zinc-600">Projeto 2</h3>
                  <p>Lorem Ipsum lorem ipsum</p>
                </li>
                <li>
                  <h3 className="font-semibold text-lg text-zinc-600">Projeto 3</h3>
                  <p>Lorem Ipsum lorem ipsum</p>
                </li>
                <li>
                  <h3 className="font-semibold text-lg text-zinc-600">Projeto 4</h3>
                  <p>Lorem Ipsum lorem ipsum</p>
                </li>
              </ul>
            </div>
          </div>
          <footer></footer>
        </div>
      </div>
    </div>
  )
}
