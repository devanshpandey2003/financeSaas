

//zustand is a state management library that allows you to create state containers.
// The create function is used to define a store (a state container) with specific state and actions.

import { create } from "zustand";

type NewAccountState = {
   isOpen: boolean;
   onOpen: () => void;
   onClose: () => void;
};

export const useNewAccount = create<NewAccountState>((set) => ({

   isOpen : false,
   onOpen: () => set({ isOpen :true }),
   onClose: () => set({ isOpen: false }),

}));