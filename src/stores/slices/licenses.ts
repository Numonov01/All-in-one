import type { StateCreator } from "zustand";

export interface UserLicenses {
  licensesMd: string;
  setLicensesMd: (v: string) => void;
  faceTimeImages: {
    [date: string]: string;
  };
  addFaceTimeImage: (v: string) => void;
  delFaceTimeImage: (k: string) => void;
}

export const createUserLicenses: StateCreator<UserLicenses> = (set) => ({
  licensesMd: `# Hi 👋\nBu men Licenses`,
  setLicensesMd: (v) => set(() => ({ licensesMd: v })),
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
