import Section from '@/components/cagatio/Section';
import Page from '@/components/Page';
import { useTranslation } from '@/lib/i18n';
import { Web3ReactProvider } from '@web3-react/core';
import Web3 from 'web3';

function getLibrary(provider: any): Web3 {
  return new Web3(provider);
}

const Component = () => {
  const { t } = useTranslation();
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <Page className='p-10 bg-blue-200'>
        <h1 className='text-4xl'>{t('common:header.caga_tio')}</h1>
        <Section />
      </Page>
    </Web3ReactProvider>
  );
};

export default Component;
