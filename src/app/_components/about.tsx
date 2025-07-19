import Image from "next/image";
import aboutimg1 from "../../../public/about-1.png";
import aboutimg2 from "../../../public/about-2.png";
import { Check, MapPinIcon } from "lucide-react";
import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";

export function About() {
  return (
    <section className="bg-[#fdf6ec] py-16">
      <div className="container px-4 mx-auto ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative" data-aos="fade-up-left">
            <div className="relative w-full h-[400px] rounded-3xl overflow-hidden">
              <Image
                src={aboutimg1}
                alt="Foto cachorro"
                fill
                quality={100}
                priority
                className="object-cover hover:scale-110 duration-300"
              />
            </div>

            <div className="absolute w-40 h-40 right-4 -bottom-8 rounded-lg overflow-hidden border-4 border-white">
              <Image
                src={aboutimg2}
                alt="Foto gato 2"
                fill
                quality={100}
                priority
              />
            </div>
          </div>
          <div className="space-y-6 mt-10" data-aos="fade-up-right">
            <h2 className="text-4xl font-bold">SOBRE</h2>
            <p>
              Até que alguém ame um animal, uma parte da sua alma permanece
              adormecida. Acreditamos nisso e acreditamos no fácil acesso a
              coisas que são boas para nossa mente, corpo e espírito. Com uma
              oferta inteligente, suporte excelente e um checkout seguro, você
              está em boas mãos.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Aberto desde 2006.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Equipe com mais de 10
                veterinários.
              </li>
              <li className="flex items-center gap-2">
                <Check className="text-red-500" /> Qualidade e nossa prioridade.
              </li>
            </ul>
            <div className="flex gap-1  items-center">
              <a
                className="bg-red-500 px-5 py-2 text-white rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                href="#"
              >
                <WhatsappLogoIcon className="w-5 h-5" />
                Contato via WhatsApp
              </a>
              <a
                className="px-5 py-5 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
                href="#"
              >
                <MapPinIcon className="w-5 h-5" />
                Endereço da loja
                
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
