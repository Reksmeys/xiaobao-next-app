import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ISTAD - Home',
  description: 'Advanced IT Institute',
  keywords: ["IT", "Spring", "Java", "IT school", "Advanced IT Institute", "AI", "Cybersecurity", "DevOps", "Data Analytics"],
  openGraph:{
    images: "https://api.istad.co/media/image/21a31c2d-181b-4ee0-aed9-61dfb8a09757.jpg"
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
      </body>
    </html>
  )
}
