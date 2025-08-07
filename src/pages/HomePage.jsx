import { Link, useNavigate } from "react-router";

export default function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="w-full h-full min-h-140 flex flex-col items-center py-10 bg-[#f6e8cd] font-serif">
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-[#76a7a4] md:mb-8">
          ¿Qué estás Buscando?
        </h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8 p-5 md:w-190 lg:w-220">
        <article onClick={() => {navigate("/products");}} className="group">
          <div className="relative h-64 overflow-hidden cursor-pointer border-3 border-[#76a7a4]">
            <div className="absolute inset-0 bg-[url('https://elgaleon.com.mx/cdn/shop/articles/Bisuteria_artesanal-2_600x.jpg?v=1644941081')] blur-xs md:blur-none bg-cover bg-center transition-all duration-500 md:group-hover:scale-110 md:group-hover:blur-sm"></div>
            <div className="relative flex items-center justify-center h-full p-8 group">
              <h2 className="text-3xl md:text-5xl font-bold drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)] text-white md:text-transparent md:group-hover:text-white group-hover:drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)] transition-all duration-500 text-center leading-tight z-10">
                Bisutería Artesanal
              </h2>
            </div>
          </div>
        </article>

        <article onClick={() => {navigate("/products");}} className="group">
          <div className="relative h-64 overflow-hidden cursor-pointer border-3 border-[#76a7a4]">
            <div className="absolute inset-0 bg-[url('https://m.media-amazon.com/images/I/61z4JVhGAuL.jpg')] blur-xs md:blur-none bg-cover bg-center transition-all duration-500 md:group-hover:scale-110 md:group-hover:blur-sm"></div>
            <div className="relative flex items-center justify-center h-full p-8 group">
              <h2 className="text-3xl md:text-5xl font-bold drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)] text-white md:text-transparent md:group-hover:text-white group-hover:drop-shadow-[0_3px_5px_rgba(0,0,0,0.4)] transition-all duration-500 text-center leading-tight z-10">
                Vagilla de Mesa
              </h2>
            </div>
          </div>
        </article>
      </div>
    </main>
  );
}
