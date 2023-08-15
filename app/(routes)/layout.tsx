import type { Metadata } from 'next';
import { Space_Grotesk } from 'next/font/google';
import '../styles/globals.css';
import { Navbar } from '../_components/ui/ui';

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
        <main className='container'>
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
