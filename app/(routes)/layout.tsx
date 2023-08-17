import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import { Footer, Navbar } from '../components/ui/ui';
import '../styles/globals.css';

const SpaceGrotesk = Space_Grotesk({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Positivus',
  description: 'Software as a service',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className='scroll-smooth'>
      <body suppressHydrationWarning={true} className={SpaceGrotesk.className}>
        <Navbar />
        <main className='container'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
