import React from 'react';

interface NavItemProps {
  children: React.ReactNode;
  href: string;
}

export const NavItem = ({ children, href }: NavItemProps) => {
  return <a className="px-4 py-6 w-full justify-center flex hover:underline" href={href}>{children}</a>;
};

export default NavItem;
