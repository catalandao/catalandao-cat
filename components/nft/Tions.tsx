import Image from './Images';
import { Block, RCol, RRow } from './Layout';
import Title from './Title';
import { useTranslation } from '@/lib/i18n';
import { fetcher } from '@/lib/loaders';
import useSWR from 'swr';
import type { ResponseItem } from '@/pages/api/tio';

const UnveiledTio1 = require('@/public/images/unveiled-tio1.jpeg');
const UnveiledTio2 = require('@/public/images/unveiled-tio2.jpeg');

const Tions = () => {
  const { t } = useTranslation();
  const { data = [] } = useSWR('/api/tio', fetcher);

  const tions = [...new Array(24)].map((_, i) => {
    const { imageURL } = data.find(({ id }: ResponseItem) => id === i + 1) || {
      imageURL: i % 2 == 0 ? UnveiledTio1.src : UnveiledTio2.src,
    };
    return imageURL;
  });

  return (
    <Block colored>
      <Title>{t('nft:listing.title')}</Title>
      <RRow>
        <RCol>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-10">
            {tions.map((src, i) => (
              <div key={i}>
                <Image width="600" height="857" src={src} caption={t('nft:listing.item.title', { x: i + 1 })} reversed />
              </div>
            ))}
          </div>
        </RCol>
      </RRow>
    </Block>
  );
};

export default Tions;
