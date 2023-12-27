import type { Metadata } from 'next'
import { Roboto_Flex } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'

const robotoFlex = Roboto_Flex({ 
  subsets: ['latin'],  
  display: 'swap' ,
  variable: '--font-roboto-flex'
})

export const metadata: Metadata = {
  title: 'Alejandro Heredia',
  description: 'Alejo\'s website'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={robotoFlex.variable}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
