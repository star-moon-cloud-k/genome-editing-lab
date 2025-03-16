import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export type PermissionType = "user" | "manager" | "admin";

interface UserState {
  isAuthenticated: boolean;
  permission: PermissionType | undefined;
  setPermission: (permission: PermissionType) => void;
  logout: () => void;
}

// ✅ Zustand Store (웹 & RN 공용)
export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      permission: undefined,
      setPermission: (permission) => set({ permission, isAuthenticated: true }),
      // ✅ 로그아웃 함수
      logout: () => {
        set({
          isAuthenticated: false,
          permission: undefined,
        });
      },
    }),
    {
      name: "user-permission-storage",
      storage: createJSONStorage(
        () =>
          // typeof window !== "undefined" ? localStorage : AsyncStorage
          // ✅ 웹에서는 localStorage, RN에서는 AsyncStorage 사용
          localStorage
      ),
    }
  )
);
