import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Page = ({ children, className = '' }: Props) => (
  <>
    <Header />
    <main className={`${className} pt-20`}>
      {children}
    </main>
    <Footer />
  </>
);

export default Page;
