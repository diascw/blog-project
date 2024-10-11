import { Poppins } from '@next/font/google';
import type { AppProps } from 'next/app';
import '../styles/globals.css';

const poppins = Poppins({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-poppins'
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={`${poppins.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
