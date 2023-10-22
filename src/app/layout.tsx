import { ThemeProvider } from '@/components/ThemeProvider';
import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Nav from '@/components/NavigationMenu/Nav';
// import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Chichikgadi Official Website',
  description: 'Chichikgadi Official Website',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          <Nav />
          {children}
          {/* <Footer /> */}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
