import { Metadata } from 'next';

// SEO константы
export const SEO_CONFIG = {
  title: 'Портфолио разработчика | Fullstack Developer',
  description: 'Портфолио fullstack разработчика с опытом работы с React, Next.js, Node.js, Nest.js и другими современными технологиями.',
  keywords: [
    'разработчик',
    'fullstack',
    'React',
    'Next.js',
    'Node.js',
    'Nest.js',
    'TypeScript',
    'JavaScript',
    'портфолио',
    'веб-разработка',
    'frontend',
    'backend'
  ],
  author: 'Bagiskij Developer',
  siteName: 'Portfolio Bagiskij',
  url: 'https://your-domain.com',
  image: '/images/og-image.jpg',
  locale: 'ru_RU',
  type: 'website'
};

// Функция для создания метаданных
export function createMetadata(overrides: Partial<Metadata> = {}): Metadata {
  return {
    title: SEO_CONFIG.title,
    description: SEO_CONFIG.description,
    keywords: SEO_CONFIG.keywords,
    authors: [{ name: SEO_CONFIG.author }],
    creator: SEO_CONFIG.author,
    publisher: SEO_CONFIG.author,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    openGraph: {
      type: 'website',
      locale: SEO_CONFIG.locale,
      url: SEO_CONFIG.url,
      title: SEO_CONFIG.title,
      description: SEO_CONFIG.description,
      siteName: SEO_CONFIG.siteName,
      images: [
        {
          url: SEO_CONFIG.image,
          width: 1200,
          height: 630,
          alt: SEO_CONFIG.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: SEO_CONFIG.title,
      description: SEO_CONFIG.description,
      images: [SEO_CONFIG.image],
    },
    verification: {
      google: 'your-google-verification-code',
      yandex: 'your-yandex-verification-code',
    },
    ...overrides,
  };
}

// Структурированные данные для JSON-LD
export function createStructuredData() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Bagiskij Developer',
    jobTitle: 'Fullstack Developer',
    description: SEO_CONFIG.description,
    url: SEO_CONFIG.url,
    image: SEO_CONFIG.image,
    sameAs: [
      'https://github.com/your-username',
      'https://linkedin.com/in/your-profile',
      'https://twitter.com/your-username',
    ],
    knowsAbout: [
      'React',
      'Next.js',
      'Node.js',
      'Nest.js',
      'TypeScript',
      'JavaScript',
      'Web Development',
      'Full Stack Development',
    ],
    worksFor: {
      '@type': 'Organization',
      name: 'Freelance / Contracts',
    },
  };
}
