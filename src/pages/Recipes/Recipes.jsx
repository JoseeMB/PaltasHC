import React from "react";
import RecipesCard from "../../components/RecipesCard";
import palta from "../../assets/palta.png";
import TostadasConPaltaYHuevo from "../../assets/Recetas/TostadasConPaltaYHuevo.jpg";
import Sushi from "../../assets/Recetas/Sushi.jpg";
import Quinoa from "../../assets/Recetas/Quinoa.jpg";
import Burrito from "../../assets/Recetas/Burrito.jpg";
import Ensalada from "../../assets/Recetas/Ensalada.jpg";
import Hamburguesa from "../../assets/Recetas/Hamburguesa.jpg";
import Pan from "../../assets/Recetas/Pan.jpg";
import Tarta from "../../assets/Recetas/Tarta.jpg";



const Recipes = () => {
  const recetas_con_palta = {
    "Tostadas con palta y huevo": {
        "imagen": TostadasConPaltaYHuevo,
        "descripcion": "Tostadas integrales cubiertas con palta molida y huevo pochado, ideales para un desayuno saludable."
    },
    "Ensalada de palta y tomate": {
        "imagen": Ensalada,
        "descripcion": "Refrescante ensalada con palta, tomate cherry, cebolla morada y aliño de limón con aceite de oliva."
    },
    "Sushi de palta": {
        "imagen": Sushi,
        "descripcion": "Rollos de sushi rellenos con palta cremosa, pepino y zanahoria, acompañados con salsa de soya."
    },
    "Sandwich de pollo con palta": {
        "imagen": Pan,
        "descripcion": "Sandwich de pan artesanal con pechuga de pollo, palta en láminas, lechuga y mayonesa."
    },
    "Hamburguesa vegetariana con palta": {
        "imagen": Hamburguesa,
        "descripcion": "Hamburguesa de garbanzos con topping de palta, tomate y cebolla caramelizada en pan integral."
    },
    "Bowl de quinoa con palta": {
        "imagen": Quinoa,
        "descripcion": "Plato nutritivo con base de quinoa, acompañado de palta, garbanzos, zanahoria rallada y semillas."
    },
    "Wrap de atún con palta": {
        "imagen": Burrito,
        "descripcion": "Tortilla integral rellena con mezcla de atún, palta, lechuga y yogur natural como aderezo."
    },
    "Tarta salada de palta y tomate": {
        "imagen": Tarta,
        "descripcion": "Tarta horneada con base de masa quebrada, rellena de palta, tomate cherry y queso crema."
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
        <div className="grid grid-cols-1 md:grid-cols-1 gap-10 max-w-6xl mx-auto text-center py-10">
          {Object.entries(recetas_con_palta).map(([nombre, { imagen, descripcion }]) => (
            <RecipesCard
              key={nombre}
              icon={imagen}
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