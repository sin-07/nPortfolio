import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Aniket Singh | Full Stack Developer',
  description: 'Full Stack Developer & Computer Science Engineer - Crafting elegant solutions to complex problems',
  keywords: ['Full Stack Developer', 'Web Developer', 'React', 'Next.js', 'Portfolio'],
  authors: [{ name: 'Aniket Singh' }],
  openGraph: {
    title: 'Aniket Singh | Full Stack Developer',
    description: 'Full Stack Developer & Computer Science Engineer',
    type: 'website',
  },
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
