import BaseLink from 'next/link';

interface Props {
  href: string;
  newTab?: boolean;
  children: React.ReactNode;
  className?: string;
}

const Link = ({ href, children, className = '', newTab = false }: Props) => (
  <BaseLink href={href}>
    <a target={newTab ? '_blank' : ''} className={className}>{children}</a>
  </BaseLink>
);

export default Link;
