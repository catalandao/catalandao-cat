import { useRouter } from 'next/dist/client/router'
import BaseLink from 'next/link'

const Link = ({ href, children, activeClass, className }) => {
  const { asPath } = useRouter();
  const active = asPath === href;
  const selectedClassName = active ? activeClass : className;
  
  return (
    <BaseLink href={href}>
      <a className={selectedClassName}>{children}</a>
    </BaseLink>
  )
}

export default Link;
