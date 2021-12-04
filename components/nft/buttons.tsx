interface Props {
  children: React.ReactNode;
  className?: string;
}

interface BtProps extends Props {
  href: string;
  onClick?: React.MouseEventHandler;
}
export const CtaLink = ({ children, href, className }: BtProps) => (
  <a className={`${className} text-white text-sm lg:text-lg text-center py-2 px-4 lg:px-5 shadow-lg shadow-dark-700 bg-[#0E6FFF] rounded`} href={href} target="_blank" rel="noreferrer">{children}</a>
);
export const SecondaryLink = ({ children, href, className }: BtProps) => (
  <a className={`${className} text-white text-sm lg:text-lg text-center py-2 px-4 lg:px-5 shadow-lg shadow-dark-700 bg-[#FF4242] rounded`} href={href} target="_blank" rel="noreferrer">{children}</a>
);
