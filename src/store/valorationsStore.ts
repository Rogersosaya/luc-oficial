import { getLikesByComment } from "@/actions/reaction/get-likes-by-comment";
import { createValoration } from "@/actions/valoration/create-valoration";
import { getValorationBoolean } from "@/actions/valoration/get-valoration-boolean";
import { getValorationsByTeacher } from "@/actions/valoration/get-valorations";
import { Teacher } from "@/interfaces/teacher.interface";
import { create } from "zustand";
interface Tag {
  id: string;
  name: string;
}

interface Valoration {
  rating: number;
  difficulty: number;
  learning: number;
  repeat: boolean;
  tags: Tag[];
}
interface ValorationState {
  valorations: Valoration[];
  existValoration: boolean;
  updateExistValoration: () => void;
  getExistValoration: (teacherId: string) => Promise<void>
  getValorations: (teacherId: string) => void;
  addValoration: (
    teacherId: string,
    rating: number,
    difficulty: number,
    learning: number,
    repeat: boolean,
    tags: string[]
  ) => Promise<void>;
}
export const useValorationsStore = create<ValorationState>((set, get) => ({
  valorations: [],
  existValoration: false,
  updateExistValoration: () => {
    set({ existValoration: true })
  },
  getExistValoration: async(teacherId:string) => {
    const existValoration = await getValorationBoolean(teacherId);
    set({ existValoration: existValoration})
  },
  getValorations: async (teacherId: string) => {
    const valorations = await getValorationsByTeacher({ teacherId: teacherId });
    set({ valorations: valorations });
  },
  addValoration: async (
    teacherId: string,
    rating: number,
    difficulty: number,
    learning: number,
    repeat: boolean,
    tags: string[]
  ) => {
    const { valorations } = get();
    console.log("----------hola");
    const valorationAdd = await createValoration({
      teacherId: teacherId,
      rating: rating,
      difficulty: difficulty,
      learning: learning,
      repeat: repeat,
      tags: tags,
    });
    console.log(valorationAdd, "as");
    set({ valorations: [valorationAdd!, ...valorations] });
  },
}));
