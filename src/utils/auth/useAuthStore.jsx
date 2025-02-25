import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      saveUserInformation: (user) => set({ user, isAuthenticated: !!user }),

      wasteUserInformation: () => {
        set({ user: null, isAuthenticated: false });
        localStorage.removeItem("userInformation");
      },
    }),
    {
      name: "userInformation",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
