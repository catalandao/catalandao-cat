import React from 'react';

import { useTranslation } from '@/lib/i18n';
import {
  CatDaoAdornment,
  LogoGithub,
  LogoGitcoin,
  LogoDiscord,
  LogoTwitter,
  LogoEmail,
} from '@/styles/assets/svgs/logos';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <footer className="bg-gray-300 lg:py-20 flex flex-col lg:flex-row">
      <p className="text-white text-sm p-8 lg:p-4 ml-5 lg:text-lg order-2 lg:order-1 lg:w-1/3">
        {t('common:footer.note')}
      </p>

      <CatDaoAdornment className="order-3 lg:order-2 w-full lg:w-1/3 items-center my-8 lg:my-2 px-8 max-w-sm mx-auto" />

      <nav className="order-1 lg:order-3 py-6 lg:py-2 flex flex-row items-center lg:w-1/3 w-full space-x-5 justify-center">
        {/* Social, TODO: get social links */}
        <a href="https://github.com/catalandao" target="_blank" rel="noreferrer">
          <LogoGithub className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
        <a href="https://gitcoin.co/grants/3386/the-catalandao" target="_blank" rel="noreferrer">
          <LogoGitcoin className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
        <a href="https://discord.com/invite/BNqJQXwtqA" target="_blank" rel="noreferrer">
          <LogoDiscord className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
        <a href="https://twitter.com/catalandaoETH" target="_blank" rel="noreferrer">
          <LogoTwitter className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
        <a href="hola@catalandao.cat" target="_blank">
          <LogoEmail className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
