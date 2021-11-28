import React from 'react';
import { i18n } from '@/lib/i18n';

const LanguageSelector = () => {
  const currentLanguage = i18n.language;

  return (
    <div className="absolute text-xl right-5 top-5 flex flex-row space-x-2 items-center justify-around">
      <button
        className={`inline-flex p-1  ${currentLanguage == 'ca' ? 'underline' : ''}`}
        onClick={() => i18n.changeLanguage('ca')}
      >
        ca
      </button>
      <button
        className={`inline-flex p-1 ${currentLanguage == 'en' ? 'underline' : ''}`}
        onClick={() => i18n.changeLanguage('en')}
      >
        en
      </button>
    </div>
  );
};

export default LanguageSelector;
