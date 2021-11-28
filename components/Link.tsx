import BaseLink from 'next/link';

interface Props {
  href: string;
  children: React.ReactNode;
  className?: string;
}

const Link = ({ href, children, className = '' }: Props) => (
  <BaseLink href={href}>
    <a className={className}>{children}</a>
  </BaseLink>
);

export default Link;
