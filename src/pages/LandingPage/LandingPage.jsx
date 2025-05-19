import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import BenefitsCard from '../../components/BenefitsCard';
import palta from '../../assets/palta.png';
import Carousel from '../../components/Carousel';
import Sabrosa from '../../assets/Paltas/Sabrosa.jpg';
import Cremosas from '../../assets/Paltas/Cremosas.jpg';
import Desayuno from '../../assets/Paltas/Desayuno.jpg';
import Diferente from '../../assets/Paltas/Diferente.jpg';
import Hass_Premium from '../../assets/Paltas/Hass_Premium.jpg';
import Calidad_Hass from '../../assets/Paltas/Calidad_Hass.jpg';

const LandingPage = () => {
  const [showBenefits, setShowBenefits] = useState(false);
  const benefitsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowBenefits(true);
          observer.unobserve(entry.target); // Opcional: deja de observar para que no se dispare más veces
        }
      },
      { threshold: 0.3 } // 30% visible para activar
    );

    if (benefitsRef.current) {
      observer.observe(benefitsRef.current);
    }

    return () => {
      if (benefitsRef.current) observer.unobserve(benefitsRef.current);
    };
  }, []);

  return (
    <div className="w-full">

      {/* Sección Home */}
        <section className="flex flex-col md:flex-row items-center justify-between px-3 pt-10 pb-20 min-h-screen max-w-7xl mx-auto">
          <div className="md:w-1/2 flex flex-col justify-center items-center text-center space-y-6 animate-fadeIn">
            <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
              Bienvenido a Paltas HC
            </h1>
            <p className="text-muted text-lg md:text-xl max-w-lg">
              Prueba las mejores paltas de la región a un click de distancia.
            </p>
            <Link
              to="/order"
              className="bg-primary hover:bg-primary_dark text-white font-semibold py-3 px-6 rounded-xl border-2 border-primary transition duration-300 flex items-center justify-center"
            >
              Realiza tu pedido
            </Link>
            </div>

            <div className="sm:h-full md:w-1/2 mt-10 md:mt-0 flex flex-col items-center animate-fadeIn delay-200">
              <Carousel images={[Sabrosa, Desayuno, Cremosas, Diferente, Hass_Premium, Calidad_Hass]} direction="vertical" timeout={7000} />
            </div>
            </section>

            {/* Sección de beneficios */}
      <section
        className={`py-20 px-6 transition-all duration-700 ease-in-out max-w-6xl mx-auto ${
        showBenefits 
          ? 'opacity-100 translate-y-0 rotate-0' 
          : 'opacity-0 translate-y-10 rotate-12'
      }`}>
        <h2 className="text-3xl font-bold text-center text-primary mb-10">
          ¿Qué hacer?
        </h2>
        <div ref={benefitsRef} className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center py-10">
          <BenefitsCard
            icon={palta}
            title="Realiza tu pedido"
            description="Pide lo que quieras y nosotros lo llevamos a tu casa."
          />
          <BenefitsCard
            icon={palta}
            title="Sobre nosotros"
            description="Conoce a nuestro equipo y nuestra historia."
          />
          <BenefitsCard
            icon={palta}
            title="Nuestro horario"
            description="Descubre cuándo estamos disponibles para ti."
          />
        </div>
      </section>


      {/* Sección visión */}
      <section
        className="relative w-full py-24 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${palta})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        <div className="relative max-w-3xl mx-auto text-center text-white space-y-6 backdrop-blur-md bg-white/10 p-10 rounded-xl">
          <h2 className="text-3xl font-bold">Nuestra visión</h2>
          <p className="text-lg">
            Las mejores paltas a tu puerta. Buscamos ser una plataforma de ventas de productos frescos y saludables, con un enfoque en la calidad y la sostenibilidad. Queremos que cada cliente disfrute de la frescura y el sabor de nuestros productos, mientras apoyamos a los agricultores locales y promovemos prácticas agrícolas responsables.
          </p>
        </div>
      </section>

    </div>
  );
};

export default LandingPage;