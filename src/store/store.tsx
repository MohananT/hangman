
import { create } from 'zustand';

export const useTextStore = create((set) => {
    return {
        sourceText: '',
        targetText: [],
        wrongCount: 0,
        updateTarget: (text: string) => set((state) => ({
            targetText: [...state.targetText, text]
        })),
        updateSource: (text: string) => set({ sourceText: text }),
        updateCount: () => set((state) => ({ wrongCount: state.wrongCount + 1 })),
    }
})