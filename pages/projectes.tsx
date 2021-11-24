import Page from '@/components/Page';
import { useTranslation } from '@/lib/i18n';

const Component = () => {
  const { t } = useTranslation();

  return (
    <Page>
      <h1>{t('common:header.projects')}</h1>
    </Page>
  );
};

export default Component;
