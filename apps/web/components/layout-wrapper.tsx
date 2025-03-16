"use client"; // ✅ 클라이언트 컴포넌트 선언

import React from "react";
import { useUserStore } from "@state/userStore";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import { AppSidebar } from "@/components/app-side";
import { Providers } from "@/components/providers";
import SearchBar from "@/components/search-bar";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const { isAuthenticated } = useUserStore(); // ✅ Zustand 상태 사용

  return isAuthenticated ? (
    <SidebarProvider>
      <AppSidebar />
      <Providers>
        <SidebarTrigger className="w-14 h-14" />
        <main className="flex-1 flex-col items-center justify-center shadow-xl">
          <div className="flex flex-col items-center justify-center shadow-xl ">
            <SearchBar />
            {children}
          </div>
        </main>
      </Providers>
    </SidebarProvider>
  ) : (
    <Providers>
      <main className="flex-1 flex-col items-center justify-center shadow-xl">
        <div className="flex flex-col items-center justify-center shadow-xl ">
          {children}
        </div>
      </main>
    </Providers>
  );
}
