import Page from '@/components/Page';
import { useTranslation } from '@/lib/i18n';

const Component = () => {
  const { t } = useTranslation();

  interface Props {
    children: React.ReactNode;
    className?: string;
  }

  interface BlockProps extends Props {
    id?: string;
    colored?: boolean;
  }

  const Block = ({ id, children, colored, className = '' }: BlockProps) => (
    <div id={id} className={`${className} space-y-6 p-2 lg:p-8 lg:py-5 ${colored ? 'bg-[#FFD740]' : ''}`}>
      {children}
    </div>
  );

  return (
    <Page className="bg-[#EE292E] bg-opacity-80 space-y-4 px-4 lg:px-20 py-8 text-xs lg:text-lg">
      <Block className="max-w-1840px mx-auto">
        <h1 className="text-4xl lg:text-8xl">{t('manifest:intro.title')}</h1>

        <p className="text-small">{t('manifest:intro.introduction')}</p>

        <p>{t('manifest:intro.text')}</p>

        <p>{t('manifest:section.first')}</p>

        <p>{t('manifest:section.second')}</p>

        <p>{t('manifest:section.third')}</p>

        <p>{t('manifest:section.fourth')}</p>

        <p>{t('manifest:section.fith')}</p>

        <p>{t('manifest:section.sixth')}</p>

        <p>{t('manifest:outro.text')}</p>

        <p>{t('manifest:outro.pio')}</p>

        <p>{t('manifest:outro.name')}</p>

        <p>{t('manifest:outro.date')}</p>
      </Block>
    </Page>
  );
};

export default Component;
