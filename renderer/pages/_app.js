import Layout from '../layouts/layout.tsx';
import '../globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
