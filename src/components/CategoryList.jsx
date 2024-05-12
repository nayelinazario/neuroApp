import React from "react";
import { Link } from "react-router-dom";
import { imgs, categories } from "../data";
import { CategoryCard } from "./CategoryCard";
const [
  Abstraccion,
  Asociacion,
  Colores,
  ComprensionVerbal,
  Escritura,
  Geografia,
  Gestos,
  Informacion,
  LenguajeAutomatico,
  LenguajeEspontaeno,
  Matematico,
  MemoriaVisual,
  Posturas,
  Superpuestas,
] = imgs;
export const CategoryList = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-4 mt-10">
      {/* Abstracción Verbal */}
      <CategoryCard
        category={categories.abstraccionVerbal}
        src={Abstraccion}
        alt={`Categoria ${categories.abstraccionVerbal}`}
        gradientColor="from-purple-500 to-pink-500"
      />
      {/* Asociación */}
      <CategoryCard
        category={categories.asociacion}
        src={Asociacion}
        alt={`Categoria ${categories.asociacion}`}
        gradientColor="from-lime-400 to-teal-700"
      />
      {/* Colores */}

      <CategoryCard
        category={categories.colores}
        src={Colores}
        alt={`Categoria ${categories.colores}`}
        gradientColor="from-red-400 to-zinc-400"
      />
      {/* Comprensión Verbal */}

      <CategoryCard
        category={categories.comprensionVerbal}
        src={ComprensionVerbal}
        alt={`Categoria ${categories.comprensionVerbal}`}
        gradientColor="from-cyan-200 to-lime-200"
      />
      {/* Escritura */}

      <CategoryCard
        category={categories.escritura}
        src={Escritura}
        alt={`Categoria ${categories.escritura}`}
        gradientColor="from-sky-300 to-indigo-900"
      />
      {/* Geografía */}

      <CategoryCard
        category={categories.geografia}
        src={Geografia}
        alt={`Categoria ${categories.geografia}`}
        gradientColor="from-amber-500 to-emerald-600"
      />
      {/* Gestos */}

      <CategoryCard
        category={categories.gestos}
        src={Gestos}
        alt={`Categoria ${categories.gestos}`}
        gradientColor="from-blue-400 to-green-400"
      />
      {/* Información */}

      <CategoryCard
        category={categories.informacion}
        src={Informacion}
        alt={`Categoria ${categories.informacion}`}
        gradientColor="from-yellow-400 to-purple-400"
      />
      {/* Lenguaje Automático */}

      <CategoryCard
        category={categories.lenguajeAutomatico}
        src={LenguajeAutomatico}
        alt={`Categoria ${categories.lenguajeAutomatico}`}
        gradientColor="from-pink-400 to-indigo-400"
      />
      {/* Lenguaje Espontáneo */}

      <CategoryCard
        category={categories.lenguajeEspontaneo}
        src={LenguajeEspontaeno}
        alt={`Categoria ${categories.lenguajeEspontaneo}`}
        gradientColor="from-red-400 to-teal-400"
      />
      {/* Matemático */}

      <CategoryCard
        category={categories.matematico}
        src={Matematico}
        alt={`Categoria ${categories.matematico}`}
        gradientColor="from-orange-400 to-cyan-400"
      />
      {/* Memoria Visual */}

      <CategoryCard
        category={categories.memoriaVisual}
        src={MemoriaVisual}
        alt={`Categoria ${categories.memoriaVisual}`}
        gradientColor="from-green-400 to-yellow-400"
      />
      {/* Posturas */}

      <CategoryCard
        category={categories.posturas}
        src={Posturas}
        alt={`Categoria ${categories.posturas}`}
        gradientColor="from-purple-400 to-red-400"
      />
      {/* Superpuestas */}

      <CategoryCard
        category={categories.superpuestas}
        src={Superpuestas}
        alt={`Categoria ${categories.superpuestas}`}
        gradientColor="from-teal-400 to-pink-400"
      />
    </div>
  );
};
