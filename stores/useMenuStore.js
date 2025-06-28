'use client';
import { create } from 'zustand';

const useMenuStore = create((set) => ({
  activeTab: 'About',
  setActiveTab: (tab) => set({ activeTab: tab }),
}));

export default useMenuStore;
