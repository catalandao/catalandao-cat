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
      <p className="text-white text-sm p-2 ml-5 lg:text-lg order-2 lg:order-1 lg:w-1/3 w-full">
        {t('common:footer.note')}
      </p>

      <CatDaoAdornment className="order-3 lg:order-2 w-full lg:w-1/3 items-center my-8 lg:my-2 px-8 w-120 mx-auto" />

      <nav className="order-1 lg:order-3 py-6 lg:py-2 flex flex-row items-center lg:w-1/3 w-full space-x-5 justify-center">
        {/* Social, TODO: get social links */}
        <a href="" target="_blank">
          <LogoGithub className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
        <a href="" target="_blank">
          <LogoGitcoin className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
        <a href="" target="_blank">
          <LogoDiscord className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
        <a href="" target="_blank">
          <LogoTwitter className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
        <a href="" target="_blank">
          <LogoEmail className="w-10 h-10 lg:w-14 lg:h-14" />
        </a>
      </nav>
    </footer>
  );
};

export default Footer;
