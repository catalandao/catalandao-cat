import Page from '@/components/Page';
import { useTranslation } from '@/lib/i18n';
import { LogoDiscord } from '@/styles/assets/svgs/logos';

const Component = () => {
  const { t } = useTranslation();

  return (
    <Page className="pt-0 bg-[#EEEEEE]">
      <div className="p-12">
        <h1 className="text-6xl border-black border-b-4">{t('common:header.contact')}</h1>
        <div className="flex flex-row">
          <div className="w-1/2 flex p-4">
            formulari
          </div>
          <div className="w-1/2 flex p-4">
            <a className="bg-[#5865F2] rounded-xl p-2 flex flex-row items-center" href="">
              <LogoDiscord className="w-12 h-12 mx-4" />
              <span className="p-4 text-white text-xl">Acompanya’ns al Discord!</span>
            </a>
          </div>

        </div>
      </div>
    </Page>
  );
};

export default Component;
