import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import { Sidebar, LayoutHeader, LayoutFooter, MainContent } from "@/components";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { createMetadata, createStructuredData } from "@/lib/seo";

const inter = Inter({ subsets: ["latin", "cyrillic"] });

export const metadata: Metadata = createMetadata({
  title: "Bagiskij - Fullstack Developer | Портфолио разработчика",
  description:
    "Портфолио fullstack разработчика с 3+ годами опыта. Специализируюсь на React, Next.js, Node.js, Nest.js, TypeScript. Создаю современные веб-приложения от идеи до развертывания.",
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
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

  return (
    <html lang="ru">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
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
