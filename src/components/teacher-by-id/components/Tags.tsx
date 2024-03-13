"use client";
import { FaUser } from "react-icons/fa6";
import { FaTags } from "react-icons/fa";
import { Teacher } from "@/interfaces/teacher.interface";
import { useValorationsStore } from "@/store/valorationsStore";
import { useEffect } from "react";
interface PropsTeacher {
  id: string;
  name: string;
  slug: string;
  url: string;
}
interface Props {
  teacher: PropsTeacher | null;
}
interface Tag {
  id: string;
  name: string;
}
function Tags({ teacher }: Props) {
  const { getValorations, valorations } = useValorationsStore();
  useEffect(() => {
    getValorations(teacher!.id);
  }, [getValorations,teacher]);

  const tags = valorations.map((item) => item.tags);

  function contarTags(
    arrayDeArrays: Tag[][]
  ): { name: string; cant: number }[] {
    // Crear un mapa para almacenar las ocurrencias de cada tag
    let tagsCount: { [key: string]: number } = {};

    // Recorrer cada subarray
    arrayDeArrays.forEach((subArray) => {
      // Recorrer cada objeto dentro del subarray
      subArray.forEach((tag) => {
        // Si el tag ya existe en el mapa, incrementar su contador
        if (tagsCount[tag.name]) {
          tagsCount[tag.name]++;
        } else {
          // Si el tag no existe, inicializar su contador en 1
          tagsCount[tag.name] = 1;
        }
      });
    });

    // Convertir el mapa en un array de objetos con el formato deseado
    let result: { name: string; cant: number }[] = [];
    for (let tagName in tagsCount) {
      result.push({ name: tagName, cant: tagsCount[tagName] });
    }
    result.sort((a, b) => b.cant - a.cant);
    return result;
  }
  const result = contarTags(tags);
  return (
    <>
      <div className="text-md font-bold mb-2 flex items-center ">
        <FaTags className="mr-2 text-secondary" />
        Etiquetas
      </div>
      <div className="flex flex-wrap ">
        {result.map((tag) => {
          return (
            <div key={tag.name} className="bg-secondary rounded-lg text-slate-950 px-2 py-1 font-bold mx-2  mb-2 text-base flex items-center">
              {tag.name}
              <FaUser className="ml-2 mr-0.5" />

              <div className="flex font-bold text-xs">{tag.cant}</div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Tags;
