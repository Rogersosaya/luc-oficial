
import { Valoration } from '@prisma/client'
import {create} from 'zustand'

interface ValorationValues {
    rating: number,
    difficulty: number,
    learning: number,
    repeat: boolean,
    tags: string[]
    setRating: (value:number) => void
    setDifficulty: (value:number) => void
    setLearning: (value:number) => void
    setRepeat: (value:boolean) => void
    setTags: (values:string[]) => void

}

export const  useValorationValuesStore = create<ValorationValues>((set,get) => ({
    rating: 1,
    difficulty: 1,
    learning: 1,
    repeat: true,
    tags: [],
    setRating: (value:number) => {
        set({rating: value})
    },
    setDifficulty: (value:number) => {
        set({difficulty: value})
    },
    setLearning: (value:number) => {
        set({learning: value})
    },
    setRepeat: (value:boolean) => {
        set({repeat: value})
    },
    setTags: (values:string[]) => {
        set({tags: values})
    }

})) 
