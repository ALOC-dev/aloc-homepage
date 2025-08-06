import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

export const metadata = {
  title: 'ALOC : 서울시립대학교 컴퓨터과학부 소모임',
  description: '세부설명',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='ko'>
      <body className={`${inter.className} ${inter.variable}`}>{children}</body>
    </html>
  );
}
