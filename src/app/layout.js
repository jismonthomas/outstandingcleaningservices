import { Manrope } from 'next/font/google';
import localFont from 'next/font/local';
import GlobalNavigation from '@/components/GlobalNavigation';
import Footer from '@/components/Footer';
import './globals.css';
import LenisWrapper from '@/components/LenisWrapper';


const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

const switzer = localFont({
  src: '../../public/font/Switzer-Variable.ttf',
  display: 'swap',
  variable: '--font-switzer',
});

export const metadata = {
  title: 'Outstanding Cleaning Services',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${manrope.variable} ${switzer.variable}`}>
        <LenisWrapper>
          <GlobalNavigation />
          {children}
          <Footer />
        </LenisWrapper>
      </body>
    </html>
  );
}
