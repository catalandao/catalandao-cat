import React from 'react';
import MenuButton from './MenuButton';

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}
export const Mobile = ({ children, isOpen = false }: Props) => {
  const [opened, setOpened] = React.useState(isOpen);
  return (
    <div className={`lg:hidden w-2/5 h-screen border-r fixed pt-14 pr-5 bg-white left-0 top-0 transition-all ease-in transform ${opened ? 'translate-x-0' : '-translate-x-full'}`}>
      <MenuButton selected={opened} onMenuPressed={() => setOpened(!opened)} />
      <nav className="">{children}</nav>
    </div>
  );
};
