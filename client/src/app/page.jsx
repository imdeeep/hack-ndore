import Head from 'next/head';
import Header from '../components/Headers';
import Footer from '../components/Footer';

const page = () => (
  <div>
    <Head>
      <title>Indore Municipal Corporation</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Header />

    <main className="relative h-screen">
      <video autoPlay loop muted className="absolute w-full h-full object-cover">
      <source src="/background.mp4" type="video/mp4" />
     
      </video>
      <div className="relative z-10 flex items-center justify-center h-full bg-black bg-opacity-50">
        <h1 className="text-white text-4xl font-bold">Welcome to Indore Municipal Corporation</h1>
      </div>
    </main>

    <Footer />
  </div>
);

export default page;
