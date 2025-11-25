import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Sidebar, LayoutHeader, LayoutFooter, MainContent } from "@/components";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { createMetadata, createStructuredData } from "@/lib/seo";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = createMetadata({
  title: "Bagiskij - Fullstack Developer | Портфолио разработчика",
  description:
    "Портфолио fullstack разработчика с 3+ годами опыта. Специализируюсь на React, Next.js, Node.js, Nest.js, TypeScript. Создаю современные веб-приложения от идеи до развертывания.",
  // Иконки задаются вручную в head с учетом basePath
  keywords: [
    "разработчик",
    "fullstack разработчик",
    "React разработчик",
    "Next.js разработчик",
    "Node.js разработчик",
    "Nest.js разработчик",
    "TypeScript разработчик",
    "веб-разработка",
    "фронтенд разработка",
    "бэкенд разработка",
    "портфолио разработчика",
    "freelance разработчик",
    "веб-приложения",
    "JavaScript",
    "HTML",
    "CSS",
    "MongoDB",
    "PostgreSQL",
    "Docker",
    "Git",
    "API разработка",
    "REST API",
    "GraphQL",
    "микросервисы",
    "DevOps",
    "CI/CD",
  ],
  openGraph: {
    title: "Bagiskij - Fullstack Developer | Портфолио",
    description:
      "Портфолио fullstack разработчика с 3+ годами опыта. Специализируюсь на React, Next.js, Node.js, Nest.js, TypeScript.",
    type: "website",
    locale: "ru_RU",
    siteName: "Portfolio Bagiskij",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Bagiskij - Fullstack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bagiskij - Fullstack Developer | Портфолио",
    description:
      "Портфолио fullstack разработчика с 3+ годами опыта. Специализируюсь на React, Next.js, Node.js, Nest.js, TypeScript.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = createStructuredData();
  const basePath = process.env.NODE_ENV === "production" ? "/portfol_bagz" : "";

  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        <link rel="icon" type="image/png" sizes="32x32" href={`${basePath}/icon.png`} />
        <link rel="icon" type="image/png" sizes="16x16" href={`${basePath}/icon.png`} />
        <link
          rel="apple-touch-icon"
          type="image/png"
          sizes="180x180"
          href={`${basePath}/apple-icon.png`}
        />
        <link rel="shortcut icon" type="image/png" href={`${basePath}/icon.png`} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <LanguageProvider>
          <ThemeProvider>
            <SidebarProvider>
              <Sidebar />
              <LayoutHeader />
              <MainContent>{children}</MainContent>
              <LayoutFooter />
            </SidebarProvider>
          </ThemeProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
