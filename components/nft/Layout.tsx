interface Props {
  children: React.ReactNode;
  className?: string;
}
interface BlockProps extends Props {
  id?: string;
  colored?: boolean;
}

export const Block = ({ id, children, colored, className = '' }: BlockProps) => (
  <div id={id} className={`${className} space-y-6 p-2 pb-6 lg:p-16 lg:py-5 ${colored ? 'bg-[#FFD740]' : ''}`}>
    {children}
  </div>
);
export const RRow = ({ children, className = '' }: Props) => (
  <div className={`${className} max-w-1840px flex lg:flex-row lg:space-x-10 w-full p-1 lg:p-6 box-border flex-col mx-auto max-w-screen-xl`}>{children}</div>
);
export const RCol = ({ children, className = '' }: Props) => (
  <div className={`${className} flex-1 px-3 lg:p-6 space-y-6`}>{children}</div>
);
