'use client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { Karla } from 'next/font/google';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import './globals.css';

const karla = Karla({
  subsets: ['latin'],
  display: 'swap',
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <html lang='en'>
        <body className={karla.className}>
          <Navbar logo='/images/logo.webp' />
          {children}
          <Footer />
        </body>
      </html>
    </Provider>
  );
}
