import Head from 'next/head';
import { ReactNode } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  children: ReactNode;
};
export const Layout: React.VFC<Props> = ({ children }) => {
  return (
    <>
      <Head>
        <title>reply-collection</title>
        <meta name='description' content='collect twitter reply' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <main style={{ marginTop: 30, marginBottom: 30 }}>{children}</main>
      <Footer />
    </>
  );
};
