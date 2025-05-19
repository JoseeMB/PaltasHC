import React from "react";
import RecipesCard from "../../components/RecipesCard";
import palta from "../../assets/palta.png";

const Recipes = () => {
  const recetas_con_palta = {
    "Tostadas con palta y huevo": {
        "imagen": "https://example.com/tostadas_palta_huevo.jpg",
        "descripcion": "Tostadas integrales cubiertas con palta molida y huevo pochado, ideales para un desayuno saludable."
    },
    "Ensalada de palta y tomate": {
        "imagen": "https://example.com/ensalada_palta_tomate.jpg",
        "descripcion": "Refrescante ensalada con palta, tomate cherry, cebolla morada y aliño de limón con aceite de oliva."
    },
    "Sushi de palta": {
        "imagen": "https://example.com/sushi_palta.jpg",
        "descripcion": "Rollos de sushi rellenos con palta cremosa, pepino y zanahoria, acompañados con salsa de soya."
    },
    "Guacamole clásico": {
        "imagen": "https://example.com/guacamole.jpg",
        "descripcion": "Delicioso guacamole preparado con palta, cebolla, cilantro, limón y un toque de ají."
    },
    "Sandwich de pollo con palta": {
        "imagen": "https://example.com/sandwich_pollo_palta.jpg",
        "descripcion": "Sandwich de pan artesanal con pechuga de pollo, palta en láminas, lechuga y mayonesa."
    },
    "Hamburguesa vegetariana con palta": {
        "imagen": "https://example.com/hamburguesa_veg_palta.jpg",
        "descripcion": "Hamburguesa de garbanzos con topping de palta, tomate y cebolla caramelizada en pan integral."
    },
    "Ceviche de salmón con palta": {
        "imagen": "https://example.com/ceviche_salmón_palta.jpg",
        "descripcion": "Trozos de salmón fresco marinados en limón con cebolla morada, cilantro, ají y cubos de palta."
    },
    "Bowl de quinoa con palta": {
        "imagen": "https://example.com/bowl_quinoa_palta.jpg",
        "descripcion": "Plato nutritivo con base de quinoa, acompañado de palta, garbanzos, zanahoria rallada y semillas."
    },
    "Wrap de atún con palta": {
        "imagen": "https://example.com/wrap_atun_palta.jpg",
        "descripcion": "Tortilla integral rellena con mezcla de atún, palta, lechuga y yogur natural como aderezo."
    },
    "Tarta salada de palta y tomate": {
        "imagen": "https://example.com/tarta_palta_tomate.jpg",
        "descripcion": "Tarta horneada con base de masa quebrada, rellena de palta, tomate cherry y queso crema."
    },
    "Arepas con palta y queso": {
        "imagen": "https://example.com/arepas_palta_queso.jpg",
        "descripcion": "Arepas doradas rellenas con palta cremosa y queso fresco, al estilo venezolano."
    },
    "Palta rellena con camarones": {
        "imagen": "https://example.com/palta_rellena_camarones.jpg",
        "descripcion": "Mitades de palta rellenas con camarones cocidos, mayonesa, limón y especias suaves."
    },
    "Smoothie verde con palta": {
        "imagen": "https://example.com/smoothie_verde_palta.jpg",
        "descripcion": "Bebida saludable con palta, espinaca, plátano, leche vegetal y un toque de miel."
    },
    "Pizza con palta y rúcula": {
        "imagen": "https://example.com/pizza_palta_rucula.jpg",
        "descripcion": "Pizza casera con base de tomate, queso mozzarella, láminas de palta y hojas frescas de rúcula."
    }
}

  return (
    <div className="w-full">
      <section className="flex flex-col items-center justify-center px-3 pt-10 pb-20 min-h-screen max-w-7xl mx-auto animate-fadeIn">
        <h1 className="text-4xl md:text-5xl font-bold text-primary leading-tight">
          Recetas
        </h1>
        <p className="text-muted text-lg md:text-xl max-w-lg">
          Aquí puedes encontrar recetas deliciosas con palta.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto text-center py-10">
          {Object.entries(recetas_con_palta).map(([nombre, { imagen, descripcion }]) => (
            <RecipesCard
              key={nombre}
              icon={palta}
              title={nombre}
              description={descripcion}
            />
          ))}
        </div>
        </section>

    </div>

  );
}
export default Recipes;