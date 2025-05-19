import React from "react";
import Carousel from "../../components/Carousel";

const LandingV2 = () => {
  return (
    <div className="w-full h-dvh grid grid-cols-1 md:grid-cols-2">
      
      {/* IZQUIERDA: Carruseles */}
      <section className="bg-grey h-full overflow-y-auto">
        <div className="grid grid-cols-6 bg-yellow p-10">
          {[...Array(3)].map((_, rowIdx) => (
            <div key={rowIdx} className="col-span-6 grid grid-cols-6 gap-10 mb-10">
              {[...Array(3)].map((_, colIdx) => (
                <div key={colIdx} className="col-span-2">
                  <Carousel />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* DERECHA: Landing y navbar */}
      <section className="bg-white h-full overflow-y-auto flex flex-col">
        {/* Navbar */}
        <nav className="w-full p-4 border-b shadow-md flex justify-between items-center">
          <h1 className="text-xl font-bold">Mi Sitio</h1>
          <ul className="hidden md:flex gap-6">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Sobre Nosotros</a></li>
            <li><a href="#" className="hover:underline">Contacto</a></li>
          </ul>
        </nav>

        {/* Contenido de la landing */}
        <main className="flex-grow flex flex-col justify-center items-center text-center p-10">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Bienvenido a la mejor palta</h2>
          <p className="text-lg md:text-xl max-w-lg">
            En nuestro sitio encontrarás las paltas más sabrosas, con la mejor calidad y directamente desde los campos chilenos.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition">
            Ver productos
          </button>
        </main>
      </section>
    </div>
  );
};


export default LandingV2;