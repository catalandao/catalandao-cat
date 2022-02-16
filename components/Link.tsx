import React, {useMemo} from 'react'
import BaseLink from 'next/link';
import {resolve} from 'url'

interface Props {
  href: string;
  children: React.ReactNode;
  as?: string;
  className?: string;
  newTab?: boolean;
}

const Link = ({ href, children, as, className = '', newTab = false }: Props) => {

  const newAs = useMemo(() => {
    let baseURI_as = as || href
  
    // make absolute url relative
    // when displayed in url bar
    if (baseURI_as.startsWith('/')) {
      //  for static html compilation
      baseURI_as = '.' + href
      // <IPFSLink href="/about"> => <a class="jsx-2055897931" href="./about">About</a>
  
      // on the client
      if (typeof document !== 'undefined') {
        baseURI_as = resolve(document.baseURI, baseURI_as)
        // => <a href="https://gateway.ipfs.io/ipfs/Qm<hash>/about">About</a>
      }
    }
    return baseURI_as
  }, [as, href]);

  return (
    <BaseLink href={href} as={newAs}>
      <a target={newTab ? '_blank' : ''} className={className}>{children}</a>
    </BaseLink>
  );
};

export default Link;
