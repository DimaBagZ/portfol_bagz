import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Sidebar, LayoutHeader, LayoutFooter, MainContent } from "@/components";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { ThemeProvider } from "@/contexts/ThemeContext";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = {
  title: "Bagiskij - Fullstack Developer",
  description:
    "Портфолио fullstack разработчика. Создаю современные веб-приложения с использованием React, Next.js, Node.js и Nest.js.",
  keywords: [
    "разработчик",
    "fullstack",
    "React",
    "Next.js",
    "Node.js",
    "Nest.js",
    "TypeScript",
  ],
  authors: [{ name: "Bagiskij" }],
  openGraph: {
    title: "Bagiskij - Fullstack Developer",
    description: "Портфолио fullstack разработчика",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider>
          <SidebarProvider>
            <Sidebar />
            <LayoutHeader />
            <MainContent>{children}</MainContent>
            <LayoutFooter />
          </SidebarProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
