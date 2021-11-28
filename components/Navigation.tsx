import React from 'react';
import MenuButton from './MenuButton';

interface Props {
  children: React.ReactNode;
  isOpen?: boolean;
}
export const Navigation = ({ children, isOpen = false }: Props) => {
  const [opened, setOpened] = React.useState(isOpen);
  return (
    <div className={`w-2/5 lg:w-4/5 h-full lg:h-auto border-r lg:border-r-transparent fixed lg:pt-6 lg:ml-10 pt-14 pr-5 bg-white lg:bg-opacity-0 left-0 top-0 transition-all ease-in transform lg:translate-x-0 ${opened ? 'translate-x-0' : '-translate-x-full'}`}>
      <MenuButton selected={opened} onMenuPressed={() => setOpened(!opened)} />
      <nav className="flex flex-col lg:flex-row">{children}</nav>
    </div>
  );
};


export default Navigation;
