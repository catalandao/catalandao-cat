import React from 'react';
import { useRouter } from 'next/router'
import { CatDAOLogo } from '@/styles/assets/svgs/logos';
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
      <header className="sticky top-0 z-50 border-t border-b bg-white min-h-24">
        <Navigation>
          <NavItem href="/">
            <span className="hidden lg:block"><CatDAOLogo /></span>
            <span className="lg:hidden">{t('common:header.home')}</span>
          </NavItem>
          <NavItem href="/manifest">{t('common:header.manifest')}</NavItem>
          {/*<NavItem href="/eines">{t('common:header.tools')}</NavItem>*/}
          {/*<NavItem href="/comunitat">{t('common:header.community')}</NavItem>*/}
          <NavItem href="/projectes">{t('common:header.projects')}</NavItem>
          <NavItem href="mailto:hola@catalandao.cat">{t('common:header.contact')}</NavItem>
        </Navigation>
        <LanguageSelector />
      </header>
    </>
  );
};

export default Header;
