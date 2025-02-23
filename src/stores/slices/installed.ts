import type { StateCreator } from "zustand";

export interface PcIstalled {
  istalledMd: string;
  setIstalledMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserIstalled: StateCreator<PcIstalled> = (set) => ({
  istalledMd: `# Hi 👋\nBu men Istalled`,
  setIstalledMd: (v) => set(() => ({ istalledMd: v })),
  faceTimeImages: {},
  addFaceTimeImage: (v) =>
    set((state) => {
      const images = state.faceTimeImages;
      images[+new Date()] = v;
      return { faceTimeImages: images };
    }),
  delFaceTimeImage: (k) =>
    set((state) => {
      const images = state.faceTimeImages;
      delete images[k];
      return { faceTimeImages: images };
    })
});
