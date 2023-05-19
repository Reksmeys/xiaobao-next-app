import './globals.css'
import { Inter } from 'next/font/google'
import Script from 'next/script'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'ISTAD - Home',
  description: 'Listing all products you want!',
  keywords: ["IT", "Spring", "Java", "IT school", "Advanced IT Institute", "AI", "Cybersecurity", "DevOps", "Data Analytics"] 
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
