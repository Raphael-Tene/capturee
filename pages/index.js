import Head from 'next/head';

export default function Home() {
  return (
    <div className=' flex items-center justify-center h-screen mb-12 bg-fixed bg-cover custom-img'>
      <Head>
        <title>Capture</title>
        <meta name='description' content='Photo Gallery' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <h2></h2>
    </div>
  );
}
