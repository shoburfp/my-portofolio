import Script from 'next/script'
import './globals.css'
import { Gabarito } from 'next/font/google'

const gabarito = Gabarito({ subsets: ['latin'] })

export const metadata = {
  title: 'M. Syabur Feryson Pilat',
  description: 'Portofolio M. Syabur Feryson Pilat',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth focus:scroll-auto">
      <body className="{gabarito.className} bg-white">{children}</body>
      <Script src="../components/Navbar/script.js"/>
    </html>
  )
}
