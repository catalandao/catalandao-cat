import React from 'react';

interface Props {
  selected?: boolean;
  onMenuPressed?: () => void;
}

export const MenuButton = ({ selected, onMenuPressed }: Props) => {
  return (
    <div className={`${selected ? 'translate-x-0' : 'translate-x-20'} transition-all ease-in transform self-end p-4 bg-white rounded-xl`}>
      <button
        className="w-10 h-10 text-4xl flex flex-row justify-center"
        onClick={onMenuPressed}
      >
        <span className={`${selected ? 'opacity-100' : 'opacity-0'} transition-all ease-in absolute`}>×</span>
        <span className={`${!selected ? 'opacity-100' : 'opacity-0'} transition-all ease-in absolute`}>☰</span>
      </button>
    </div>
  );
};

export default MenuButton;
