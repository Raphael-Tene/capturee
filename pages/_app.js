import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import NavBar from '@/components/NavBar';

export default function App({ Component, pageProps }) {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />;
    </>
  );
}
