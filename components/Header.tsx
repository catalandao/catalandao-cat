import React from 'react';
import { useRouter } from 'next/router';
import { CatDAOLogo, DAOLogo } from '@/styles/assets/svgs/logos';
import LanguageSelector from './LanguageSelector';
import NavItem from './NavItem';
import { useTranslation } from '@/lib/i18n';
import Navigation from './Navigation';
import HomeBanner from './HomeBanner';


const Header = () => {
  const { t } = useTranslation();
  const { asPath } = useRouter();
  const isHome = asPath === '/';

  return (
    <>
      {isHome && <HomeBanner />}
      <header className="sticky top-0 z-50 border-t border-b bg-white min-h-24 flex justify-center">
        <div className="max-w-1840px flex w-full relative">
          <div className="lg:hidden ml-20 mt-4">
            <DAOLogo className="w-15 h-15" />
          </div>
          <Navigation>
            {/* https://www.notion.so/catalandao/Canvis-web-nft-d-advent-41dcd56d5e8f44efba036b785193489b */}
            <NavItem className="hidden lg:block" href="/manifest"><CatDAOLogo /></NavItem>
            {/* <NavItem href="/">{t('common:header.home')}</NavItem> */}
            <NavItem href="/manifest">{t('common:header.manifest')}</NavItem>
            {/*<NavItem href="/eines">{t('common:header.tools')}</NavItem>*/}
            {/*<NavItem href="/comunitat">{t('common:header.community')}</NavItem>*/}
            <NavItem href="/projectes">{t('common:header.advent_nfts')}</NavItem>
            <NavItem href="mailto:hola@catalandao.cat">{t('common:header.contact')}</NavItem>
          </Navigation>
          <LanguageSelector />
        </div>
      </header>
    </>
  );
};

export default Header;
