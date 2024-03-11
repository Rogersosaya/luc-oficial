import { filterIndustrialData } from "./seed-course-industrial";
import { filterSystemsData } from "./seed-course-systen";




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
