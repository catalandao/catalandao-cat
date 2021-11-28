import React from 'react';
import Link from 'next/link';
import { CatDAOLogo } from '@/styles/assets/svgs/logos';
import LanguageSelector from './LanguageSelector';
import NavItem from './NavItem';
import { useTranslation } from '@/lib/i18n';
import Navigation from './Navigation';
import { HomeHeaderBanner } from '../styles/assets/svgs/logos';

const Header = () => {
  const { t } = useTranslation();
  const isHome = true; // FIXME: use router to check if its the main page
  return (
    <>
      {isHome && <HomeHeaderBanner />}
      <header className="min-h-20 border-b p-2 fixed top-0 bg-white w-full z-50">
        <div className="lg:block hidden">
          <Link href="/">
            <a>
              <CatDAOLogo />
            </a>
          </Link>
        </div>
        <Navigation>
          <NavItem className="lg:hidden" href="/">{t('common:header.home')}</NavItem>
          {/*<NavItem href="/manifest">{t('common:header.manifest')}</NavItem>*/}
          {/*<NavItem href="/eines">{t('common:header.tools')}</NavItem>*/}
          <NavItem href="/comunitat">{t('common:header.community')}</NavItem>
          <NavItem href="/projectes">{t('common:header.projects')}</NavItem>
          <NavItem href="/contacte">{t('common:header.contact')}</NavItem>
        </Navigation>
        <LanguageSelector />
      </header>
    </>
  );
};

export default Header;
