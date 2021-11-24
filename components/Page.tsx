import React from 'react';
import Footer from './Footer';
import Header from './Header';

interface Props {
  children: React.ReactNode;
  className?: string;
}
const Page = ({ children, className }: Props) => {
  return (
    <>
      <Header />
      <main className={`${className} py-5 px-10 min-h-screen`}>{children}</main>
      <Footer />
    </>
  );
};

export default Page;
