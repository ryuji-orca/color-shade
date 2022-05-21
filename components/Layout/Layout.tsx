import Head from 'next/head';
import { FC } from 'react';
import { ToastContainer } from 'react-toastify';
import { Footer } from '../Footer';
import { Header } from '../Header';
import 'react-toastify/dist/ReactToastify.css';
import { Seo } from '../Seo';

type Props = {
  children: React.ReactNode;
};

export const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <main>{children}</main>
      <Footer />
      <ToastContainer position='top-right' autoClose={3000} theme='dark' />
    </>
  );
};
