import { Geist, Geist_Mono } from "next/font/google";

import "@workspace/ui/globals.css";
import { Providers } from "@/components/providers";
import { AppSidebar } from "@/components/app-side";
import {
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";

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
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSans.variable} ${fontMono.variable} font-sans antialiased `}
      >
        <SidebarProvider>
          <AppSidebar />
          <Providers>
            <SidebarTrigger className="w-14 h-14" />
            <div className="flex-1">{children}</div>
          </Providers>
        </SidebarProvider>
      </body>
    </html>
  );
}
