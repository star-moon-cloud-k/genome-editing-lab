import { Geist, Geist_Mono } from "next/font/google";

import { AppSidebar } from "@/components/app-side";
import { Providers } from "@/components/providers";
import SearchBar from "@/components/search-bar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import "@workspace/ui/globals.css";
import { useUserStore } from "../../../packages/state/userStore";
import { LayoutWrapper } from "@/components/layout-wrapper";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ 로그인되지 않았으면 로그인 페이지로 이동
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <LayoutWrapper>{children}</LayoutWrapper>
      </body>
    </html>
  );
}
