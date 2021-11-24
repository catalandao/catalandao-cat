import React from 'react';

import { CatDAOLogo } from '@/styles/assets/svgs/logos';
import LanguageSelector from './LanguageSelector';
import { Mobile } from './Menus/Mobile';
import NavItem from './Menus/NavItem';
import { useTranslation } from '@/lib/i18n';

const Header = () => {
  const { t } = useTranslation();
  return (
    <>
      {/* isHome && <HomeBanner /> */}
      <header className="min-h-20 border-b p-2 sticky top-0 bg-white flex flex-row">
        <div className="lg:block hidden">
          <a href="">
            <CatDAOLogo />
          </a>
        </div>
        {/* desktop */}
        <nav className="lg:flex hidden lg:flex-row ml-20 space-x-10">
          <NavItem href="/manifest">{t('common:header.manifest')}</NavItem>
          <NavItem href="/eines">{t('common:header.tools')}</NavItem>
          <NavItem href="/comunitat">{t('common:header.community')}</NavItem>
          <NavItem href="/projectes">{t('common:header.projects')}</NavItem>
          <NavItem href="/contacte">{t('common:header.contact')}</NavItem>
        </nav>
        {/* Selector de idioma */}
        <LanguageSelector />
      </header>
      {/* mobile */}
      <Mobile>
        <NavItem href="/">{t('common:header.home')}</NavItem>
        <NavItem href="/manifest">{t('common:header.manifest')}</NavItem>
        <NavItem href="/eines">{t('common:header.tools')}</NavItem>
        <NavItem href="/comunitat">{t('common:header.community')}</NavItem>
        <NavItem href="/projectes">{t('common:header.projects')}</NavItem>
        <NavItem href="/contacte">{t('common:header.contact')}</NavItem>
      </Mobile>
    </>
  );
};

export default Header;
