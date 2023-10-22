import './globals.css'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'M. Syabur Feryson Pilat',
  description: 'Portofolio M. Syabur Feryson Pilat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={gabarito.className}>{children}</body>
    </html>
  )
}
