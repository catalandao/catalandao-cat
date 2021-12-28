import Page from '@/components/Page';
import Link from '@/components/Link';
import { useTranslation } from '@/lib/i18n';
import PhotoKlas from '../public/images/Foto-Klas.png';
import PhotoCaboSanRoque from '../public/images/Foto-CaboSanRoque.png';
import { useEffect } from 'react';
import { tallyConfig } from '@/lib/tally-config';
import { Block, RCol, RRow } from '@/components/nft/Layout';
import ArtistsSocial from '@/components/nft/ArtistsSocial';
import Colophon from '@/components/nft/Colophon';
import Image from '@/components/nft/Images';
import Title from '@/components/nft/Title';
import { CtaLink, SecondaryLink } from '@/components/nft/buttons';
import Tions from '@/components/nft/Tions';
import Ranking from '@/components/nft/Ranking';

const NADALA_LINK_URL = 'https://mgate.io/go/EySYdX0sVTop';

const Component = () => {
  const { t } = useTranslation();
  useEffect(() => {
    (window as any).TallyConfig = tallyConfig;
  }, []);
  return (
    <Page className="bg-[#EEE] text-sm lg:text-lg">
      <Tions />
      <Ranking />
      <Block>
        <div className="flex justify-center pl-4 pr-4 pb-4 md:(pt-2 pb-6) lg:(pt-0 pb-20)">
          <CtaLink href={NADALA_LINK_URL} className='min-w-full md:min-w-120'>{t('nft:cta.nadala')}</CtaLink>
        </div>
      </Block>
      <Block colored>
        <Title className="tracking-tighter lg:tracking-normal">{t('nft:rationale.title')}</Title>
        <RRow>
          <RCol>
            <p>{t('nft:rationale.content.first')}</p>
            <p>{t('nft:rationale.content.second')}</p>
            <p>{t('nft:rationale.content.third')}</p>
            <p>{t('nft:rationale.content.fourth')}</p>
            <p>{t('nft:rationale.content.fith')}</p>
            <p>{t('nft:rationale.content.sixth')}</p>
            <div className="w-full flex flex-col relative rounded-xl overflow-hidden" style={{ paddingBottom: '56.25%' }}>
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/UjzkxcHPb9g?start=47" title="YouTube vi deo player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </RCol>
        </RRow>
      </Block>
      <Block>
        <Title>{t('nft:artists.title')}</Title>
        <RRow className="space-y-6  lg:space-y-0">
          <RCol>
            <Image src={PhotoKlas} />
            <header className="text-2xl">{t('nft:artists.klas.title')}</header>
            <p>{t('nft:artists.klas.description')}</p>
            <ArtistsSocial website="https://klasherbert.com/" instagram="klasherbert" />
          </RCol >
          <RCol>
            <Image src={PhotoCaboSanRoque} />
            <header className="text-2xl">{t('nft:artists.cabo_san_roque.title')}</header>
            <p>{t('nft:artists.cabo_san_roque.description')}</p>
            <ArtistsSocial website="https://cabosanroque.com/" twitter="cabosanroque" instagram="cabosanroque" />
          </RCol>
        </RRow >
      </Block >
      <Block id="faq" colored className="space-y-0">
        <Title>{t('nft:faq.title')}</Title>
        <RRow>
          <RCol>
            <div className="p-4 space-y-4">
              <details open>
                <summary className="-mx-4 text-base lg:text-lg font-semibold">{t('nft:faq.summary.first')}</summary>
                <p className="mt-4">
                  {t('nft:faq.detail.first.part1')}
                  <Link newTab={true} className="underline" href="https://www.notion.so/catalandao/Manifest-de-la-CatalanDAO-ab6f1e9a0f3342a79cfd18e7e4f7351b">{t('nft:faq.detail.first.link')}</Link>.
                  {t('nft:faq.detail.first.part2')}
                  <Link newTab={true} className="underline" href="https://discord.gg/BNqJQXwtqA">Discord</Link>
                </p>
              </details>

              <details>
                <summary className="-mx-4 text-base lg:text-lg font-semibold">{t('nft:faq.summary.second')}</summary>
                <p className="mt-4">{t('nft:faq.detail.second')}</p>
              </details>

              <details>
                <summary className="-mx-4 text-base lg:text-lg font-semibold">{t('nft:faq.summary.third')}</summary>
                <p className="mt-4">{t('nft:faq.detail.third')}</p>
              </details>

              <details>
                <summary className="-mx-4 text-base lg:text-lg font-semibold">{t('nft:faq.summary.fourth')}</summary>
                <p className="mt-4">{t('nft:faq.detail.fourth')}</p>
              </details>

              <details>
                <summary className="-mx-4 text-base lg:text-lg font-semibold">{t('nft:faq.summary.fith')}</summary>
                <p className="mt-4">
                  {t('nft:faq.detail.fith.part1')}
                  <Link newTab={true} className="underline" href="https://polygon.technology/">Polygon</Link>
                  {t('nft:faq.detail.fith.part2')}
                  <Link newTab={true} className="underline" href="https://discord.gg/BNqJQXwtqA">Discord</Link>
                  {t('nft:faq.detail.fith.part3')}
                </p>
              </details>
            </div>
          </RCol>
        </RRow>
        <RRow className="lg:w-250">
          <RCol className="space-y-6">
            <Colophon>
              <RCol>
                <h3 className="text-xl lg:text-2xl">{t('nft:colophon.title')}</h3>
                <p>{t('nft:colophon.text')}</p>
              </RCol>
              <RCol className="flex flex-col my-auto mt-6 lg:my-auto space-y-3">
                <CtaLink href="https://discord.com/invite/BNqJQXwtqA">{t('nft:colophon.join.discord')}</CtaLink>
                <SecondaryLink href="https://catalandao.notion.site/Preguntes-freq-ents-NFTs-d-Advent-e5a72e83bd5b49cc97790d9ad0188996">{t('nft:colophon.join.wiki')}</SecondaryLink>
              </RCol>
            </Colophon>
          </RCol>
        </RRow>
      </Block>
    </Page>
  );
};

export default Component;
