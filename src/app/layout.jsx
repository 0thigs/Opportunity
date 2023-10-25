import '../../src/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Opportunities Programms',
  description: 'A list to good opportunities',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
          {children}
      </body>
    </html>
  )
}
