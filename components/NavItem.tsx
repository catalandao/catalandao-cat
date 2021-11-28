import { useRouter } from 'next/router';
import React from 'react';
import Link from './Link';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const NavItem = ({ children, href, className = '' }: Props) => {
  const { asPath } = useRouter();
  const isCurrent = asPath === href;

  return (
    < Link href={href} className={`${className} ${isCurrent ? 'underline' : ''} border-b lg:border-b-transparent p-12 lg:p-3 px-20 lg:px-8 nav-item text-black hover:text-gray-700 text-xl items-center inline-flex`
    }>
      {children}
    </Link >
  );
};

export default NavItem;
