import './globals.css'
import { Inter } from 'next/font/google'
import { USER_NAME, USER_DOMAIN } from '@/utils/constants'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: USER_DOMAIN,
  description: 'Portfolio and Blog of Mr ' + USER_NAME,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body >{children}</body>
    </html>
  )
}
