import Page from '@/components/Page';
import { useTranslation } from '@/lib/i18n';
import { Trans } from 'react-i18next';

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
    <Page className="manifest bg-[#EE292E] bg-opacity-80 space-y-4 px-4 lg:px-20 py-8 text-xs lg:text-lg">
      <Block className="max-w-1840px mx-auto">
        <h1 className="text-4xl lg:text-8xl">{t('manifest:intro.title')}</h1>

        <p>{t('manifest:intro.introduction')}</p>

        <p>{t('manifest:intro.text')}</p>

        <Trans i18nKey="manifest:section.first">
          1/ La CatalanDAO s'inscriu en la trajectòria històrica d'autogestió de béns comuns als Països Catalans, que inclou els emprius i els alous medievals, el Tribunal de les Aigües de València o les experiències de col·lectivització republicana. Els milers d'empreses del moviment cooperativista, l'activitat del Tercer Sector, que representa vora del 10% del PIB de Catalunya, o iniciatives com <a rel="noreferrer" href="http://guifi.net" target="_blank">Guifi.net</a>, la xarxa de telecomunicacions de comuns més gran del món, demostren la vigència d'aquesta manera de fer.
        </Trans>

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
    </Page >
  );
};

export default Component;
