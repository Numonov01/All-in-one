import { create } from "zustand";

interface UploadState {
  files: File[];
  setFiles: (files: File[]) => void;
  clearFiles: () => void;
}

export const useUploadStore = create<UploadState>((set) => ({
  files: [],
  setFiles: (files) => set({ files }),
  clearFiles: () => set({ files: [] })
}));
