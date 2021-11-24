import React from 'react';

interface Props {
  selected?: boolean;
  onMenuPressed?: () => void;
}

export const MenuButton = ({ selected, onMenuPressed }: Props) => {
  return (
    <button
      className={`${selected ? '-translate-x-5' : 'translate-x-10'} transition-all ease-in w-10 h-10 text-4xl flex flex-row justify-center items-center transform -right-5 top-5 absolute`}
      onClick={onMenuPressed}
    >
      <span className={`${selected ? 'opacity-100' : 'opacity-0'} transition-all ease-in absolute`}>×</span>
      <span className={`${!selected ? 'opacity-100' : 'opacity-0'} transition-all ease-in absolute`}>☰</span>
    </button>
  );
};

export default MenuButton;
