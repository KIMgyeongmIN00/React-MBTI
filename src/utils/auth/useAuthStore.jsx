import { create } from "zustand";

const useAuthStore = create((set) => ({
  accessToken: localStorage.getItem("accessToken") || "",
  isAuthenticated: !!localStorage.getItem("accessToken"),

  saveAccessToken: (accessToken) =>
    set(() => {
      localStorage.setItem("accessToken", accessToken);
      return { accessToken, isAuthenticated: !!accessToken };
    }),

  wasteAccessToken: () =>
    set(() => {
      localStorage.removeItem("accessToken");
      return { accessToken: "", isAuthenticated: false };
    }),
}));

export default useAuthStore;
