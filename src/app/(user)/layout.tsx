import { DefaultProviders } from '@/redux/provider'
import '../globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { USER_NAME, USER_DOMAIN } from '@/utils/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  metadataBase: new URL('http://' + USER_DOMAIN || 'localhost:3000'),
  title: {
    default: `${USER_NAME} | Portfolio`,
    template: "%s | " + USER_NAME,
  },
  description: `Portfolio and Blog of ${USER_NAME}. Singaporian code expert with good design skill`,
  openGraph: {
    title: USER_DOMAIN,
    description: `Portfolio and Blog of ${USER_NAME}. Singaporian code expert with good design skill`,
    url: 'http://' + USER_DOMAIN,
    siteName: 'http://' + USER_DOMAIN,
    images: [
      {
        url: '/preview-sm.jpg',
        width: 800,
        height: 600,
      },
      {
        url: '/preview.jpg',
        width: 1800,
        height: 1600,
        alt: 'preview',
      },
    ],
    type: 'website',
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body >
        <DefaultProviders>
          <Navbar/>
          {children}
        </DefaultProviders>
      </body>
    </html>
  )
}
