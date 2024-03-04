 const filterIndustrial = [
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
];

export const filters = filterIndustrial.map((item) => ({
  course: item.course,
  cycle: item.cycle,
  career: "Ingeniería Industrial",
}));
