// _app.js
import Layout from '../layouts/layout.tsx';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <h1>Hello</h1>
      <Component {...pageProps} />
    </Layout>
  );
}
