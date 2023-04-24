/* eslint-disable jsx-a11y/alt-text */
import { Inter } from "next/font/google";
import HeaderComponent from "@/components/header";
import Image from "next/image";
import profileimage from "../../public/images/profileImage.png";
import teamImage from "../../public/images/growUpTeamImage.jpg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white ">
      <div className="max-w-screen-xl w-full h-full mx-auto ">
        <HeaderComponent />
        <section className="pt-5 flex flex-col justify-center">
          <div className="flex flex-col justify-between items-center mx-auto gap-5">
            <div>
              <Image
                src={profileimage}
                width={150}
                height={200}
                className="rounded-full"
              />
            </div>
            <h2 className="text-base font-bold">
              Christian Mendes, consultor SAP
            </h2>
          </div>
          <div className="mx-auto mt-10 flex items-center flex-col gap-7">
            <h1 className="text-6xl font-bold max-w-2xl">
              Consultoria SAP Expert para elevar seu negócio
            </h1>
            <p className="max-w-lg text-justify">
              Olá! me chamo Christian Mendes, sou consultor SAP com mais de duas
              décadas de experiência em tecnologia e inovação, atuo como agente
              de transformação em projetos nacionais e internacionais. Entre em
              contato comigo para descobrir como minha consultoria SAP Expert
              pode impulsionar seu negócio.
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
            Com vasta experiência em empresas de tecnologia e <br /> inovação,
            atuo como consultor SAP e agente de <br /> transformação digital em
            diversos segmentos.
          </p>
          <p>
            Expecializado em planejamento estratégico, gerencio equipes <br />
            multidisciplinares com resiliência, negociação e inteligência <br />{" "}
            emocional, resolvendo problemas e tomando decisões <br />
            complexas de maneiras simples.
          </p>
          <span>Entre em contato para saber mais</span>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-28">
        <div className="flex items-center flex-col">
          <h1 className="text-4xl font-bold text-center">
            Especializado em planejamento estratégico <br /> com foco nas
            pessoas como diferencial competitivo <br /> para alcançar
            resultados.
          </h1>
          <span className="mt-28 text-center font-light">
            Eficiente e empático no desenvolvimento de relacionamentos sólidos,
            cultivo <br /> confiança e agrego valor ao ecossistema, guiado pela
            transparência.
          </span>
        </div>
      </div>
    </div>
  );
}
