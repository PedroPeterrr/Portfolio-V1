'use client';
import { create } from 'zustand';

const useContactStore = create((set) => ({
  isOpen: false,
  toggleIsOpen: () => set((state) => ({ isOpen: !state.isOpen }))
}));

export default useContactStore;
