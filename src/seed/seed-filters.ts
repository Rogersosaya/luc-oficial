const filterIndustrialData = [
  {
    course: "Cálculo Diferencial",
    cycle: "1° ciclo",
  },
  {
    course: "Química I",
    cycle: "1° ciclo",
  },
  {
    course: "Redacción y Comunicación",
    cycle: "1° ciclo",
  },
  {
    course: "Etica y Filosofia Politica",
    cycle: "1° ciclo",
  },
  {
    course: "Geometría Analítica",
    cycle: "1° ciclo",
  },
  {
    course: "Dibujo de Ingeniería",
    cycle: "1° ciclo",
  },
  {
    course: "Introducción a la Ingeniería Industrial",
    cycle: "1° ciclo",
  },
  {
    course: "Algebra Lineal",
    cycle: "2° ciclo",
  },
  {
    course: "Cálculo Integral",
    cycle: "2° ciclo",
  },
  {
    course: "Introducción a la Computación",
    cycle: "2° ciclo",
  },
  {
    course: "Realidad Nacional, Constitución y Derechos Humanos",
    cycle: "2° ciclo",
  },
  {
    course: "Desarrollo Personal",
    cycle: "2° ciclo",
  },
  {
    course: "Teoría General de Sistemas",
    cycle: "2° ciclo",
  },
  {
    course: "Química II",
    cycle: "2° ciclo",
  },
  {
    course: "Física I",
    cycle: "3° ciclo",
  },
  {
    course: "Metodologia de la Investigación",
    cycle: "3° ciclo",
  },
  {
    course: "Matematica Discreta",
    cycle: "3° ciclo",
  },
];
const filterSystemsData = [
  {
    course: "Geometría Analítica",
    cycle: "1° ciclo",
  },
  {
    course: "Cálculo Diferencial",
    cycle: "1° ciclo",
  },
  {
    course: "Química I",
    cycle: "1° ciclo",
  },
  {
    course: "Introducción a la Computación",
    cycle: "1° ciclo",
  },
  {
    course: "Redacción y Comunicación",
    cycle: "1° ciclo",
  },
  {
    course: "Introducción al Pensamiento y a la Ingeniería  de Sistemas",
    cycle: "1° ciclo",
  },
  {
    course: "Álgebra lineal",
    cycle: "2° ciclo",
  },
  {
    course: "Cálculo Integral",
    cycle: "2° ciclo",
  },

  {
    course: "Ética y Filosofia Politica",
    cycle: "2° ciclo",
  },
  {
    course: "Psicología Sistémica",
    cycle: "2° ciclo",
  },
  {
    course: "Teoría y Ciencia de Sistemas",
    cycle: "2° ciclo",
  },
  {
    course: "Sistemas Biológicos y Ecológicos",
    cycle: "2° ciclo",
  },
  {
    course: "Algoritmia y Estructura de datos",
    cycle: "2° ciclo",
  },
  {
    course: "Matemática Discreta",
    cycle: "3° ciclo",
  },
  {
    course: "Calculo Multivariable",
    cycle: "3° ciclo",
  },
  {
    course: "Física I",
    cycle: "3° ciclo",
  },
];

const filtersIndustrial = filterIndustrialData.map((item) => ({
  course: item.course,
  cycle: item.cycle,
  career: "Ingeniería Industrial",
}));

const filtersSystems = filterSystemsData.map((item) => ({
  course: item.course,
  cycle: item.cycle,
  career: "Ingeniería de Sistemas",
}));


export const filters = filtersIndustrial.concat(filtersSystems)
