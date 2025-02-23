import type { StateCreator } from "zustand";

export interface PcContacts {
  contactsMd: string;
  setContactsMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserContacts: StateCreator<PcContacts> = (set) => ({
  contactsMd: `# Hi 👋\nBu men Contacts`,
  setContactsMd: (v) => set(() => ({ contactsMd: v })),
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
