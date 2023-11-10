import Navbar from '@/Components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartProvider } from '@/Components/context/CardContex';
import Footer from '@/Components/Footer';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'V8 Wardrobe',
  description: "Ignite Your Style with V8 Wardrobe's Customizable Car T-Shirts",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <CartProvider>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  )
}