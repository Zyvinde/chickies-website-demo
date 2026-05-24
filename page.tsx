import type { Metadata, Viewport } from 'next'
import { Geist, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ subsets: ["latin"], variable: '--font-geist' });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: '--font-jetbrains' });

export const metadata: Metadata = {
  title: 'Chickies Restaurant & Grill | Authentic Middle Eastern Cuisine',
  description: 'Experience authentic Arabic Mandi, Indian Biryani, and crispy broasted chicken. Fast delivery, always fresh, always hot.',
  generator: 'v0.app',
  openGraph: {
    title: 'Chickies Restaurant & Grill',
    description: 'Taste the difference. Authentic cuisine, rapid delivery.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
