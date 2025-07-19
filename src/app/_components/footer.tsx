import whiskas from "../../../public/whiskas.png";
import golden from "../../../public/golden.png";
import natural from "../../../public/natural.png";
import primier from "../../../public/primier.png";
import royal from "../../../public/royal.png";
import Image from "next/image";
import {
  FacebookLogoIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  WhatsappLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

const brands = [
  { name: "Royal Canin", logo: royal },
  { name: "Golden", logo: golden },
  { name: "Primier", logo: primier },
  { name: "Formula Natural", logo: natural },
  { name: "Whiskas", logo: whiskas },
  { name: "Golden", logo: golden },
];

export function Footer() {
  return (
    <section className="bg-[#e84c3d] py-16 text-white text-center lg:text-start ">
      <div className="container mx-auto px-4">
        <div className="border-b border-white/20 pb-8">
          <h4 className="text-3xl font-semibold mb-8 text-center ">
            Marcas que trabalhamos
          </h4>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-8">
            {brands.map((item, index) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg flex items-center justify-center"
              >
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={100}
                  height={50}
                  quality={100}
                  style={{ width: "auto", height: "auto" }}
                  className="object-contain "
                />
              </div>
            ))}
          </div>
        </div>
        <footer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 mt-5">
          <div className="text-lg flex flex-col gap-3 justify-center lg:justify-start">
            <h3 className="text-3xl font-semibold mb-2">Pet Shop Dev</h3>
            <p className="text-2xl mb-4 ">
              Cuidado do seu melhor amigo com amor e dedicação{" "}
            </p>
            <a
              className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center justify-center w-fit gap-2"
              href=""
            >
              <WhatsappLogoIcon className="w-5 h-5" />
              Contato via WhatsApp
            </a>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-semibold">Contatos</h3>
            <div className="text-2xl">
              <p>Rua dos Pets, 123</p>
              <p>Cidade,Estado - CEP 12345-678</p>
              <p>TEL: (11) 1234-5789</p>
              <p>Email:contato@petshop.com</p>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h3 className="text-3xl font-semibold">Redes Sociais</h3>
            <div className="flex gap-1 justify-center lg:justify-start">
              <a href="#">
                <FacebookLogoIcon className="w-8 h-8" target="_blank" />
              </a>
              <a href="#">
                <InstagramLogoIcon className="w-8 h-8" target="_blank" />
              </a>
              <a href="#">
                <TwitterLogoIcon className="w-8 h-8" target="_blank" />
              </a>
            </div>
          </div>
        </footer>
        <footer>
          <div className="flex justify-center">
            <p className="text-2xl">
              2025 Pet Shop. Todos os direitos reservados.
            </p>
          </div>
        </footer>
      </div>
    </section>
  );
}
