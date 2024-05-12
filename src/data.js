import Abstraccion from "./assets/abstraccion-verbal.png";
import Asociacion from "./assets/asociacion.png";
import Colores from "./assets/colores.png";
import ComprensionVerbal from "./assets/comprension-verbal.png";
import Escritura from "./assets/escritura.png";
import Geografia from "./assets/geografia.png";
import Gestos from "./assets/gestos.png";
import Informacion from "./assets/informacion.png";
import LenguajeAutomatico from "./assets/lenguaje-automatico.png";
import LenguajeEspontaeno from "./assets/lenguaje-espontaneo.png";
import Matematico from "./assets/matematico.png";
import MemoriaVisual from "./assets/memoria-visual.png";
import Posturas from "./assets/posturas.png";
import Superpuestas from "./assets/superpuestas.png";

export const imgs = [
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
];
export const categories = {
  abstraccionVerbal: "Abstracción verbal (comprensión)",
  asociacion: "Evocación categorial en asociación",
  colores: "Colores",
  comprensionVerbal: "Comprensión verbal",
  escritura: "Escritura al dictado",
  geografia: "geografía",
  gestos: "Gesto simbólico e imitación de posturas",
  informacion: "Información",
  lenguajeAutomatico: "Lenguaje automático-control mental",
  lenguajeEspontaneo: "Lenguaje espontáneo",
  matematico: "Cálculo y problemas aritméticos",
  memoriaVisual: "Aprendizaje seriado y memoria visual",
  posturas: "Secuencia de posturas",
  superpuestas: "Discriminación de imágenes superpuestas",
};

const {
  abstraccionVerbal,
  asociacion,
  colores,
  comprensionVerbal,
  escritura,
  geografia,
  gestos,
  informacion,
  lenguajeAutomatico,
  lenguajeEspontaneo,
  matematico,
  memoriaVisual,
  posturas,
  superpuestas,
} = categories;

export const questions = [
  {
    id: 1,
    difficulty: "Fácil",
    question: "¿Cuántos segundos tiene un minuto?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "60 segundos",
    incorrect_answers: ["30 segundos", "45 segundos", "90 segundos"],
  },
  {
    id: 2,
    difficulty: "Fácil",
    question: "¿Cuántas horas tiene un día?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "24 horas",
    incorrect_answers: ["12 horas", "36 horas", "48 horas"],
  },
  {
    id: 3,
    difficulty: "Fácil",
    question: "¿Cuántos días tiene el mes de febrero en año bisiesto?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "29 días",
    incorrect_answers: ["28 días", "30 días", "31 días"],
  },
  {
    id: 4,
    difficulty: "Fácil",
    question: "¿Cuántos meses tarda un embarazo?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "9 meses",
    incorrect_answers: ["6 meses", "7 meses", "12 meses"],
  },
  {
    id: 5,
    difficulty: "Fácil",
    question: "¿Cuántos meses faltan para su próximo año?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "7 meses",
    incorrect_answers: ["6 meses", "8 meses", "12 meses"],
  },
  {
    id: 6,
    difficulty: "Medio",
    question: "¿Cuáles son los 4 puntos cardinales?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "Norte, Sur, Este, Oeste",
    incorrect_answers: [
      "Noreste, Sudeste, Noroeste, Sudoeste",
      "Arriba, Abajo, Izquierda, Derecha",
      "Norte, Sur, Occidente, Oriente",
    ],
  },
  {
    id: 7,
    difficulty: "Medio",
    question: "¿Cuántos planetas existen en el sistema solar?",
    category: "Abstracción verbal (comprensión)",
    correct_answer: "8 planetas",
    incorrect_answers: ["7 planetas", "9 planetas", "10 planetas"],
  },
  {
    id: 8,
    difficulty: "Medio",
    question: "¿Cuántas estaciones tiene el año? Mencionarlas",
    category: "Abstracción verbal (comprensión)s",
    correct_answer: "4 estaciones: Primavera, Verano, Otoño, Invierno",
    incorrect_answers: [
      "3 estaciones: Calor, Frío, Lluvias",
      "2 estaciones: Seca, Lluviosa",
      "5 estaciones: Primavera, Verano, Otoño, Invierno, Monzón",
    ],
  },
  {
    id: 9,
    difficulty: "Medio",
    question: "¿Cada cuántos años hay cambio de presidente de la república?",
    category: "abstraccionVerbal",
    correct_answer: "6 años",
    incorrect_answers: ["4 años", "8 años", "10 años"],
  },
  {
    id: 10,
    difficulty: "Medio",
    question: "¿Cuántos años tiene un siglo?",
    category: "abstraccionVerbal",
    correct_answer: "100 años",
    incorrect_answers: ["50 años", "200 años", "500 años"],
  },
  {
    id: 11,
    difficulty: "Fácil",
    question: "¿Cuántos días tiene la semana?",
    category: "abstraccionVerbal",
    correct_answer: "7 días",
    incorrect_answers: ["5 días", "10 días", "30 días"],
  },
  {
    id: 12,
    difficulty: "Fácil",
    question: "¿Cuántos metros tiene un kilómetro?",
    category: "abstraccionVerbal",
    correct_answer: "1000 metros",
    incorrect_answers: ["500 metros", "2000 metros", "1500 metros"],
  },
  {
    id: 13,
    difficulty: "Fácil",
    question: "¿Cuáles son las prendas básicas de vestir?",
    category: "abstraccionVerbal",
    correct_answer: "Camisa, Pantalón, Zapatos",
    incorrect_answers: [
      "Corbata, Sombrero, Guantes",
      "Vestido, Bufanda, Botas",
      "Chaleco, Corbata, Sandalias",
    ],
  },
  {
    id: 14,
    difficulty: "Fácil",
    question: "¿Cuáles son las vocales, te las sabes? Mencionelas",
    category: "abstraccionVerbal",
    correct_answer: "a, e, i, o, u",
    incorrect_answers: ["e, o, u, a, i", "i, a, u, e, o", "o, u, i, a, e"],
  },
  {
    id: 15,
    difficulty: "Fácil",
    question: "Ahora repitelas desde la última a la primera",
    category: "abstraccionVerbal",
    correct_answer: "u, o, i, e, a",
    incorrect_answers: ["a, e, i, o, u", "i, a, u, e, o", "e, o, u, a, i"],
  },
  {
    id: 16,
    difficulty: "Fácil",
    question: "Menciona 5 pares de sílabas",
    category: "abstraccionVerbal",
    correct_answer: "ma-me, pe-po, ti-ta, lo-la, re-ri",
    incorrect_answers: [
      "sa-se, cu-ca, de-di, ga-go, bo-bu",
      "pi-pa, mu-mo, ni-na, so-su, le-la",
      "be-bi, fu-fo, mo-mu, ra-ro, ve-vi",
    ],
  },
  {
    id: 17,
    difficulty: "Fácil",
    question: "¿Cuáles son las notas musicales?",
    category: "abstraccionVerbal",
    correct_answer: "do, re, mi, fa, sol, la, si",
    incorrect_answers: [
      "sol, la, si, do, re, mi, fa",
      "do, re, mi, fa, la, si, sol",
      "mi, fa, sol, la, si, do, re",
    ],
  },
  {
    id: 18,
    difficulty: "Fácil",
    question: "¿Quién descubrió América?",
    category: "abstraccionVerbal",
    correct_answer: "Cristóbal Colón",
    incorrect_answers: [
      "Amerigo Vespucci",
      "Vasco da Gama",
      "Fernando de Magallanes",
    ],
  },
  {
    id: 19,
    difficulty: "Fácil",
    question: "Menciona 5 colores",
    category: "abstraccionVerbal",
    correct_answer: "Rojo, Azul, Amarillo, Verde, Negro",
    incorrect_answers: [
      "Blanco, Morado, Naranja, Gris, Rosa",
      "Cyan, Magenta, Amarillo, Negro, Blanco",
      "Verde, Azul, Naranja, Rosa, Marrón",
    ],
  },
];
