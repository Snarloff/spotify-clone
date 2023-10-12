import type { Metadata } from 'next'
import './globals.css'

import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700', '800', '900'] })

export const metadata: Metadata = {
  title: 'Spotify',
  description: 'Clone do Spotify',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900 text-zinc-50" style={poppins.style}>
        {children}
      </body>
    </html>
  )
}
