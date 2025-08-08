import type { Metadata } from 'next'
import './globals.css'
import GoogleAnalytics from '@/components/analytics/google-analytics'

export const metadata: Metadata = {
  title: 'Priority Agency - Маркетингове агентство повного циклу | SMM, Реклама, Брендинг',
  description: 'Priority Agency - провідне маркетингове агентство в Україні. Комплексні послуги: SMM, таргетована реклама, брендинг, веб-розробка. Збільшуємо продажі та впізнаваність бренду. Безкоштовна консультація!',
  keywords: 'маркетингове агентство, SMM, таргетована реклама, брендинг, веб-розробка, digital маркетинг, соціальні мережі, Facebook реклама, Instagram маркетинг, Priority Agency',
  authors: [{ name: 'Priority Agency' }],
  creator: 'Priority Agency',
  publisher: 'Priority Agency',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://priority-agency.com'),
  alternates: {
    canonical: '/',
    languages: {
      'uk-UA': '/',
    },
  },
  openGraph: {
    title: 'Priority Agency - Маркетингове агентство повного циклу',
    description: 'Збільшуємо продажі та впізнаваність бренду через комплексний digital маркетинг. SMM, таргетована реклама, брендинг, веб-розробка.',
    url: 'https://priority-agency.com',
    siteName: 'Priority Agency',
    locale: 'uk_UA',
    type: 'website',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Priority Agency - Маркетингове агентство',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Priority Agency - Маркетингове агентство повного циклу',
    description: 'Збільшуємо продажі та впізнаваність бренду через комплексний digital маркетинг.',
    images: ['/images/twitter-image.jpg'],
    creator: '@Priority_Agency',
  },
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
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uk">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#193D19" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>
        <GoogleAnalytics />
        {children}
      </body>
    </html>
  )
}
