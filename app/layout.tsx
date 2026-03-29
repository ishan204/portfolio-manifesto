import type { Metadata } from 'next';
import Navbar from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'Umang Raj Jaiswal — Portfolio',
  description: 'Personal portfolio of Umang Raj Jaiswal — Engineering Student, Public Speaker, Builder.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Bangers&family=Comic+Neue:ital,wght@0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#0a0a0a', overflowX: 'hidden' }}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
