import { WhatsappLogoIcon } from "@phosphor-icons/react/dist/ssr";
import dogimg from "../../../public/hero-dog.webp";
import catimg from "../../../public/cat-hero.png";
import Image from "next/image";

export function Hero() {
  return (
    <section className="bg-[#e84c3d] text-white relative overflow-hidden lg:px-15">
      <div>
        <Image
          src={dogimg}
          alt="foto do dog"
          className="object-cover opacity-65 lg:hidden"
          fill
          sizes="100vw "
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-40 lg:hidden"></div>
      </div>

      <div className="container mx-auto pt-16 pb-16 md:pb-0 px-4 relative">
        <article className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold leading-10"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              Seu pet merece cuidado, carinho e atenção especial.
            </h1>
            <p className="lg:text-lg"
            data-aos="fade-up">
              Oferecemos os melhores serviços para garantir o bem-estar e a
              felicidade do seu amigo de quatro patas.
            </p>

            <a
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              href={`https://wa.me/5511965668190?text=Olá gostaria de mais informações`}
              target="_blank"
              data-aos="fade-down"
            >
              <WhatsappLogoIcon className="w-5 h-5" />
              Contato via WhatsApp
            </a>
            <div className="mt-8">
              <p className="text-sm mb-4">
                <b className="bg-black text-white px-2 py-1 rounded-md">5%</b>
                de desconto na primeira compra.
              </p>
              <div className="flex mt-4">
                <div className="w-32 hidden lg:block">
                  <Image
                    src={catimg}
                    alt="Fotodo gata"
                    quality={100}
                    className="object-fill"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:block h-full relative"
          data-aos="fade-right">
            <Image
              src={dogimg}
              alt="foto do dog"
              className="object-contain"
              fill
              sizes="(max-width: 768px) 0vw, 50vw "
              quality={100}
              priority
            />
          </div>
        </article>
      </div>
    </section>
  );
}
5;
