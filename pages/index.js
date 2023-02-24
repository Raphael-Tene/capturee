import Hero from '@/components/Hero';
import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Capture</title>
        <meta name='description' content='Photo Gallery' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Hero
        heading='Capture Photography'
        message='I capture moments in nature.'
      />
    </div>
  );
}
