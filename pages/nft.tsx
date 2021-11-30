import useSwr from 'swr';
import Image from 'next/image';
import Page from '@/components/Page';
import Link from '@/components/Link';
import Table from '@/components/Table';
import { useTranslation } from '@/lib/i18n';
import { dateOptions } from '../lib/i18n';
import NFTPhoto from '../public/images/NFT-destacat.png';
import PhotoKlas from '../public/images/Foto-Klas.png';
import PhotoCaboSanRoque from '../public/images/Foto-CaboSanRoque.png';
import UnveiledTio1 from '../public/images/unveiled-tio1.jpeg';
import UnveiledTio2 from '../public/images/unveiled-tio2.jpeg';

const unveiled = {
  odd: UnveiledTio1,
  even: UnveiledTio2,
} as const;

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = '' }: Props) => (
<h1 className={`${className} justify-center flex text-3xl lg:text-5xl my-8`}>{children}</h1>
);

interface BlockProps extends Props {
  id?: string;
  colored?: boolean;
}
const Block = ({ id, children, colored, className = '' }: BlockProps) => (
  <div id={id} className={`${className} space-y-6 p-2 pb-6 lg:p-16 lg:py-5 ${colored ? 'bg-[#FFD740]' : ''}`}>
    {children}
  </div>
);

const RRow = ({ children, className = '' }: Props) => (
  <div className={`${className} max-w-1840px flex lg:flex-row lg:space-x-10 w-full p-1 lg:p-6 box-border flex-col mx-auto max-w-screen-xl`}>{children}</div>
);
const RCol = ({ children, className = '' }: Props) => (
  <div className={`${className} flex-1 px-3 lg:p-6 space-y-6`}>{children}</div>
);

interface BtProps extends Props {
  href: string;
  onClick?: React.MouseEventHandler;
}
const CtaLink = ({ children, href, className }: BtProps) => (
  <a className={`${className} text-white text-sm lg:text-lg text-center py-2 px-4 lg:px-5 shadow-lg shadow-dark-700 bg-[#0E6FFF] rounded`} href={href} target="_blank" rel="noreferrer">{children}</a>
);
const SecondaryLink = ({ children, href, className }: BtProps) => (
  <a className={`${className} text-white text-sm lg:text-lg text-center py-2 px-4 lg:px-5 shadow-lg shadow-dark-700 bg-[#FF4242] rounded`} href={href} target="_blank" rel="noreferrer">{children}</a>
);

interface ImgProps extends Omit<Props, 'children'> {
  reversed?: boolean;
  caption?: string;
  src: string | StaticImageData;
}
const Img = ({ src, caption, reversed, className = '' }: ImgProps) => {
  const Caption = () => (
    <figcaption className="text-lg lg:text-xl text-center my-5">{caption}</figcaption>
  );

  return (
    <figure className={`${className} ${!reversed ? ' ml-auto' : ''}`}>
    {reversed && caption && <Caption />}
    <div className="rounded-xl shadow-xl overflow-hidden">
      <Image src={src} alt={caption} layout="responsive" objectFit="contain" />
      </div>
      {!reversed && caption && <Caption />}
    </figure>
  );
};

interface NFTTioProps {
  src?: string; // source of the revealed image, if missing a placeholder its set
  index: number; // position on the grid 1-24
  caption?: string;
}
const NFTTio = ({
  index,
  src,
  caption,
}: NFTTioProps) => {
  const source = src ?? unveiled[index % 2 === 0 ? 'even' : 'odd'];
  return <Img src={source} caption={caption} reversed />;
};

const Colophon = ({ children, className = '' }: Props) => (
  <RRow className={`${className} shadow-xl mx-auto p-10 bg-[#FF4242] box-sixing rounded-xl bg-opacity-25`}>
    {children}
  </RRow>
);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Component = () => {
  const { t } = useTranslation();
  const { data: buyers = [] } = useSwr('/api/buyers', fetcher);

  return (
    <Page className="bg-[#EEE] text-sm lg:text-lg">
      <Block>
        <RRow>
          <RCol>
            <header>
            <span className="text-1xl text-[#777]">{t('nft:intro.date', { date: new Date(), formatParams: { date: dateOptions } })}</span>
            <h1 className="flex text-3xl lg:text-5xl my-8 mt-2">{t('nft:intro.label', { n: 2 })}</h1>
            </header>
            <div className="block lg:hidden">
            <Img className="max-w-md mx-auto ml-auto" src={NFTPhoto} caption={t('nft:intro.help.log_count', { unit: 2, total: 24 })} />
              <div className="flex flex-col">
              <span className="text-xl lg:text-xl">{t('nft:intro.help.price', { price: 0.34 })}</span>
                <span className="text-xl lg:text-xl">{t('nft:intro.help.time_remaining', { h: 23, m: 39, s: 23 })}</span>
              </div>
            </div>
            <p className="max-w-2xl lg:min-h-80">
              {t('nft:intro.text')}
              <Link className="underline" newTab={true} href="https://www.notion.so/Preguntes-freq-ents-NFTs-d-Advent-e5a72e83bd5b49cc97790d9ad0188996"> {t('nft:intro.link')}</Link>.
              </p>
            <div className="my-10 flex flex-col">
            <CtaLink href="https://opensea.io/CatalanDAO">{t('nft:intro.cta')}</CtaLink>
              <div className="flex flex-row justify-around p-2 my-3">
                <Link newTab={true} href="https://www.notion.so/catalandao/Com-participar-de-la-subhasta-dels-NFT-d-advent-02422855608b4385b75ba5dca4101afb" className="text-sm hover:underline">
                <span className="mx-2">&#x2139;</span>{t('nft:intro.help.involvement')}</Link>
                <Link href="#faq" className="text-sm hover:underline">
                  <span className="mx-2">&#x2753;</span>{t('nft:intro.help.faq')}</Link>
              </div>
            </div>
            <div className="flex flex-col hidden lg:block">
            <span className="text-xl flex lg:text-xl">{t('nft:intro.help.price', { price: 0.34 })}</span>
              <span className="text-xl flex lg:text-xl">{t('nft:intro.help.time_remaining', { h: 23, m: 39, s: 23 })}</span>
            </div>
          </RCol>
          <RCol className="hidden lg:block">
            <Img className="max-w-md" src={NFTPhoto} caption={t('nft:intro.help.log_count', { unit: 2, total: 24 })} />
          </RCol>
        </RRow>
      </Block>
      <Block colored>
        <Title>{t('nft:listing.title')}</Title>
        <RRow>
          <RCol>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5 lg:gap-10">
              {[...new Array(24)].map((_, i) => (
                <NFTTio key={i} index={i} caption={t('nft:listing.item.title', { x: i + 1 })} />
              ))}
            </div>
          </RCol>
        </RRow>
      </Block>
      <Block>
        <Title>{t('nft:ranking.title')}</Title>
        <RRow>
          <RCol>
            <Table rows={buyers} />
          </RCol>
        </RRow>
      </Block>
      <Block colored>
        <Title>{t('nft:rationale.title')}</Title>
        <RRow>
          <RCol>
            <p>{t('nft:rationale.content.first')}</p>
            <p>{t('nft:rationale.content.second')}</p>
            <p>{t('nft:rationale.content.third')}</p>
            <p>{t('nft:rationale.content.fourth')}</p>
            <p>{t('nft:rationale.content.fith')}</p>
            <p>{t('nft:rationale.content.sixth')}</p>
            <div className="w-full flex flex-col relative" style={{ paddingBottom: '56.25%' }}>
              <iframe className="absolute top-0 left-0 w-full h-full" src="https://www.youtube.com/embed/UjzkxcHPb9g?start=47" title="YouTube vi deo player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
          </RCol>
        </RRow>
      </Block>
      <Block>
        <Title>{t('nft:artists.title')}</Title>
        <RRow className="space-y-6  lg:space-y-0">
          <RCol>
            <Img src={PhotoKlas} />
            <header className="text-2xl">{t('nft:artists.klas.title')}</header>
            <p>{t('nft:artists.klas.description')}</p>
          </RCol>
          <RCol>
            <Img src={PhotoCaboSanRoque} />
            <header className="text-2xl">{t('nft:artists.cabo_san_roque.title')}</header>
            <p>{t('nft:artists.cabo_san_roque.description')}</p>
          </RCol>
        </RRow>
      </Block>
      <Block id="faq" colored className="space-y-0">
        <Title>{t('nft:faq.title')}</Title>
        <RRow>
          <RCol>
            <div className="p-4 space-y-4">
              <details open>
                <summary className="-mx-4 text-base lg:text-lg font-semibold">{t('nft:faq.summary.first')}</summary>
                <p className="mt-4">
                  {t('nft:faq.detail.first.part1')}
                  <a className="underline" href="https://www.notion.so/catalandao/Manifest-de-la-CatalanDAO-ab6f1e9a0f3342a79cfd18e7e4f7351b">Manifest de la CatalanDAO</a>
                  {t('nft:faq.detail.first.part2')}
                  <a className="underline" href="https://discord.gg/BNqJQXwtqA">Discord</a>
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
                  <a className="underline" href="https://polygon.technology/">Polygon</a>
                  {t('nft:faq.detail.fith.part2')}
                  <a className="underline" href="https://discord.gg/BNqJQXwtqA">Discord</a>
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
                <SecondaryLink href="https://www.notion.so/catalandao/Preguntes-freq-ents-NFTs-d-Advent-e5a72e83bd5b49cc97790d9ad0188996">{t('nft:colophon.join.wiki')}</SecondaryLink>
              </RCol>
            </Colophon>
          </RCol>
        </RRow>
      </Block>
    </Page>
  );
};

export default Component;
