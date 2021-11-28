import React from 'react';
import MenuButton from './MenuButton';

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}
export const Navigation = ({ children, isOpen = false }: Props) => {
  const [opened, setOpened] = React.useState(isOpen);
  return (
    <>
      {/* desktop nav */}
      <nav className="flex-row hidden lg:inline-flex">{children}</nav>
      {/* movbile nav */}
      <div className="flex lg:hidden relative">
        <div className={`fixed left-0 top-0 w-3/5 transition-all ease-in transform flex flex-col bg-white h-screen w-full transform ${opened ? 'translate-x-0' : '-translate-x-full'}`}>
          <MenuButton selected={opened} onMenuPressed={() => setOpened(!opened)} />
          <nav className="flex-col inline-flex">{children}</nav>
        </div>
      </div>
    </>
  );
};


export default Navigation;
