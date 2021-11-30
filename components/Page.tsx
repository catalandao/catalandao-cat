import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Page = ({ children, className = '' }: Props) => (
  <>
    <Header />
    <main className={`${className} pt-5`}>
      {children}
    </main>
    <Footer />
  </>
);

export default Page;
