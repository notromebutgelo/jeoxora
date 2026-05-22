"use client";

import { create } from "zustand";

type UIState = {
  isMobileNavOpen: boolean;
  isSidebarOpen: boolean;
  setMobileNavOpen: (isOpen: boolean) => void;
  setSidebarOpen: (isOpen: boolean) => void;
  toggleMobileNav: () => void;
  toggleSidebar: () => void;
};

export const useUiStore = create<UIState>((set) => ({
  isMobileNavOpen: false,
  isSidebarOpen: true,
  setMobileNavOpen: (isMobileNavOpen) => {
    set({ isMobileNavOpen });
  },
  setSidebarOpen: (isSidebarOpen) => {
    set({ isSidebarOpen });
  },
  toggleMobileNav: () => {
    set((state) => ({ isMobileNavOpen: !state.isMobileNavOpen }));
  },
  toggleSidebar: () => {
    set((state) => ({ isSidebarOpen: !state.isSidebarOpen }));
  },
}));
