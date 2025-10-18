import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Shop2App - Your Shopping Destination',
  description: 'Browse our collection of amazing products',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
