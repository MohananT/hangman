
import { create } from 'zustand';

interface userTextStore {
    sourceText: string;
    targetText: string[];
    wrongCount: number;
    updateTarget: (text: string) => void;
    updateSource: (text: string) => void;
    updateCount: () => void
    setCounter: () => void
}

export const useTextStore = create<userTextStore>((set) => {
    return {
        sourceText: '',
        targetText: [],
        wrongCount: 0,
        updateTarget: (text: string) => set((state) => ({
            targetText: [...state.targetText, text]
        })),
        updateSource: (text: string) => set({ sourceText: text }),
        updateCount: () => set((state) => ({ wrongCount: state.wrongCount + 1 })),
        setCounter: () => set({ wrongCount: 0 })
    }
})