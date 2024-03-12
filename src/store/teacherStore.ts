import { create } from "zustand";

interface TeacherState {
  teacherId: string;
  updateTeacher: (teacherId: string) => void
}
export const useTeacherStore = create<TeacherState>((set, get) => ({
  teacherId: "a",
  
  updateTeacher: (teacherId: string) => {set({ teacherId: teacherId })},
}));
