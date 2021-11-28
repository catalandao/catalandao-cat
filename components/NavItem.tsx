import React from 'react';
import Link from './Link';

interface Props {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export const NavItem = ({ children, href, className = '' }: Props) => (
  <Link href={href} className={`${className} px-4 py-6 w-full justify-center flex hover:underline`}>
    {children}
  </Link>
);

export default NavItem;
