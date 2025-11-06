import './globals.css'
import { Cairo, Almarai } from 'next/font/google'
import { Inter } from 'next/font/google'
import { Toaster } from 'react-hot-toast'

const cairo = Cairo({
  subsets: ['arabic'],
  variable: '--font-cairo',
  display: 'swap',
})

const almarai = Almarai({
  weight: ['300', '400', '700', '800'],
  subsets: ['arabic'],
  variable: '--font-almarai',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata = {
  title: 'حِرَفْنا - منصة التجارة الإلكترونية للحرف اليدوية العربية',
  description: 'منصة حِرَفْنا تربط الحرفيين التقليديين بالعملاء حول العالم، مع الحفاظ على التراث الحرفي وتقديم منتجات أصلية عالية الجودة.',
  keywords: 'حرف يدوية, تراث عربي, تجارة إلكترونية, حرفيين, منتجات تقليدية, فخار, نحاس, سجاد, مشغولات جلدية',
  authors: [{ name: 'محمد السيد' }],
  creator: 'MiniMax Agent',
  publisher: 'MiniMax Agent',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://hirafna.com'),
  alternates: {
    canonical: '/',
    languages: {
      'ar': '/ar',
      'en': '/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'ar_EG',
    url: 'https://hirafna.com',
    title: 'حِرَفْنا - منصة التجارة الإلكترونية للحرف اليدوية العربية',
    description: 'منصة حِرَفْنا تربط الحرفيين التقليديين بالعملاء حول العالم، مع الحفاظ على التراث الحرفي وتقديم منتجات أصلية عالية الجودة.',
    siteName: 'حِرَفْنا',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'حِرَفْنا - منصة التجارة الإلكترونية للحرف اليدوية العربية',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'حِرَفْنا - منصة التجارة الإلكترونية للحرف اليدوية العربية',
    description: 'منصة حِرَفْنا تربط الحرفيين التقليديين بالعملاء حول العالم، مع الحفاظ على التراث الحرفي وتقديم منتجات أصلية عالية الجودة.',
    images: ['/og-image.png'],
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
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body 
        className={`${cairo.variable} ${almarai.variable} ${inter.variable} font-almarai antialiased bg-neutral-50 text-neutral-800`}
        suppressHydrationWarning
      >
        <div className="min-h-screen flex flex-col">
          {children}
        </div>
        <Toaster
          position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#FFFFFF',
              color: '#2C261F',
              border: '1px solid #E5DED4',
              borderRadius: '8px',
              fontFamily: 'Almarai, sans-serif',
              fontSize: '16px',
            },
            success: {
              iconTheme: {
                primary: '#5A8E6A',
                secondary: '#FFFFFF',
              },
            },
            error: {
              iconTheme: {
                primary: '#C95D5D',
                secondary: '#FFFFFF',
              },
            },
          }}
        />
      </body>
    </html>
  )
}