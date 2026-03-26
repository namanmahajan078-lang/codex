import '@/styles/globals.css';
import Layout from '@/components/Layout';
import Loader from '@/components/Loader';
import MagneticCursor from '@/components/MagneticCursor';
import SmoothScroll from '@/components/SmoothScroll';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Loader />
      <MagneticCursor />
      <SmoothScroll />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
