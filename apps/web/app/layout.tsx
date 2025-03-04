import { Geist, Geist_Mono } from "next/font/google";

import { AppSidebar } from "@/components/app-side";
import { Providers } from "@/components/providers";
import SearchBar from "@/components/search-bar";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import "@workspace/ui/globals.css";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import LoginPage from "./auth/page";

const fontSans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
});

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // ✅ Access Token 확인
  const cookieStore = cookies();
  const accessToken = (await cookieStore).get("accessToken");

  console.log(accessToken);
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        {accessToken ? (
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
        )}
      </body>
    </html>
  );
}
