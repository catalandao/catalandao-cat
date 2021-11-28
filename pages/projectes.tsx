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
import { Trans } from 'react-i18next';
import Login from '@/components/Login';


interface Props {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = '' }: Props) => (
  <h1 className={`${className} justify-center flex text-2xl lg:text-6xl my-12`}>{children}</h1>
);

interface BlockProps extends Props {
  id?: string;
  colored?: boolean;
}
const Block = ({ id, children, colored, className = '' }: BlockProps) => (
  <div id={id} className={`${className} space-y-6 p-2 lg:p-16 ${colored ? 'bg-[#FFD740]' : ''}`}>
    {children}
  </div>
);

const RRow = ({ children, className = '' }: Props) => (
  <div className={`${className} flex lg:flex-row lg:space-x-10 w-full p-6 box-border flex-col mx-auto max-w-screen-xl`}>{children}</div>
);
const RCol = ({ children, className = '' }: Props) => (
  <div className={`${className} flex-1 p-6 space-y-6`}>{children}</div>
);

interface BtProps extends Props {
  onClick?: React.MouseEventHandler;
}
const CtaButton = ({ children, onClick, className }: BtProps) => (
  <button className={`${className} text-white text-sm lg:text-lg text-center py-2 px-20 shadow-lg shadow-dark-700 bg-[#0E6FFF] rounded`} onClick={onClick}>{children}</button>
);
const SecondaryButton = ({ children, onClick, className }: BtProps) => (
  <button className={`${className} text-white text-sm lg:text-lg text-center py-2 px-20 shadow-lg shadow-dark-700 bg-[#FF4242] rounded`} onClick={onClick}>{children}</button>
);

interface ImgProps extends Omit<Props, 'children'> {
  reversed?: boolean;
  caption?: string;
  src: string | StaticImageData;
}
const Img = ({ src, caption, reversed, className = '' }: ImgProps) => {
  const Caption = () => (
    <figcaption className="text-md lg:text-xl text-center my-5">{caption}</figcaption>
  );

  return (
    <figure>
      {reversed && caption && <Caption />}
      <div className={`${className} rounded-xl shadow-xl overflow-hidden`}>
        <Image src={src} alt={caption} layout="responsive" objectFit="contain" />
      </div>
      {!reversed && caption && <Caption />}
    </figure>
  );
};

const Colophon = ({ children, className = '' }: Props) => (
  <RRow className={`${className} shadow-xl mx-auto p-10 bg-[#FF4242] box-sixing rounded-xl bg-opacity-25`}>
    {children}
  </RRow>
);

const fetcher = (url: string) => fetch(url).then((res) => res.json());

interface Buyer {

}

const Component = () => {
  const { t } = useTranslation();
  const { data: buyers = [], _error } = useSwr<Buyer[]>('/api/buyers', fetcher);

  return (
    <Page className="bg-[#EEE] text-xs lg:text-lg">
      <Block>
        <RRow>
          <RCol className="order-2 lg:order-1">
            <Login />
            <header>
              <span className="text-small text-[#AAA]">{t('projects:intro.date', { date: new Date(), formatParams: { date: dateOptions } })}</span>
              <Title>{t('projects:intro.label', { n: 2 })}</Title>
            </header>
            <p className="max-w-2xl">{t('projects:intro.text')}</p>
            <div className="my-10">
              <CtaButton>{t('projects:intro.cta')}</CtaButton>
              <div className="flex p-2 my-3">
                <Link href="" className="text-xs lg:text-sm hover:underline">
                  <span className="mx-2">&#x2139;</span>{t('projects:intro.help.involvement')}</Link>
                <Link href="#faq" className="text-xs lg:text-sm hover:underline">
                  <span className="mx-2">&#x2753;</span>{t('projects:intro.help.faq')}</Link>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl lg:text-2xl">{t('projects:intro.help.price', { price: 0.34 })}</span>
              <span className="text-xl lg:text-2xl">{t('projects:intro.help.time_remaining', { h: 23, m: 39, s: 23 })}</span>
            </div>
          </RCol>
          <RCol className="order-1 lg:order-2">
            <Img src={NFTPhoto} caption={t('projects:intro.help.log_count', { unit: 2, total: 24 })} />
          </RCol>
        </RRow>
      </Block>
      <Block colored>
        <RRow>
          <RCol>
            <Title>{t('projects:listing.title')}</Title>
            <div className="grid grid-cols-3 gap-5">
              {[...new Array(24)].map((_, i) => (
                <Img key={i} src={NFTPhoto} caption={t('projects:listing.item.title', { x: i + 1 })} reversed />
              ))}
            </div>
          </RCol>
        </RRow>
      </Block>
      <Block>
        <Title>{t('projects:ranking.title')}</Title>
        <RRow>
          <RCol>
            <Table rows={buyers} />
          </RCol>
        </RRow>
      </Block>
      <Block colored>
        <RRow>
          <RCol>
            <Title>{t('projects:rationale.title')}</Title>
            <Trans i18nKey="projects:rationale.content" />
          </RCol>
        </RRow>
      </Block>
      <Block>
        <Title>{t('projects:artists.title')}</Title>
        <RRow>
          <RCol>
            <Img src={PhotoKlas} />
            <header className="text-2xl">{t('projects:artists.klas.title')}</header>
            <p>{t('projects:artists.klas.description')}</p>
          </RCol>
          <RCol>
            <Img src={PhotoCaboSanRoque} />
            <header className="text-2xl">{t('projects:artists.cabo_san_roque.title')}</header>
            <p>{t('projects:artists.cabo_san_roque.description')}</p>
          </RCol>
        </RRow>
      </Block>
      <Block id="faq" colored>
        <RRow>
          <RCol>
            <Title>{t('projects:faq.title')}</Title>
            <details>
              <summary>Què és un NFT?</summary>
              <p>NFT és l’acrònim de Non-Fungible Token, que podem traduir com Token No-Fungible. Els NFTs són certificats d’autenticitat basats en tecnologia de cadena de blocs (blockchain), que enregistra qualsevol tipus de format digital, qui n’és creador, qui propietari, l’ús que se’n pot fer i els privilegis que proporciona.</p>
            </details>

            <details>
              <summary>Què és un NFT d’Advent de la CatalanDAO?</summary>
              <p>Bacon ipsum dolor amet flank hamburger frankfurter turducken buffalo, alcatra rump. Boudin ham jowl turkey. Ham pork tail turducken fatback buffalo. Short ribs frankfurter landjaeger, kevin tail biltong turkey. Prosciutto bacon turkey salami kevin doner. Ribeye chuck chislic, strip steak meatball tenderloin drumstick shoulder ball tip.</p>
            </details>

            <details>
              <summary>Com puc participar a la subhasta?</summary>
              <p>Bacon ipsum dolor amet flank hamburger frankfurter turducken buffalo, alcatra rump. Boudin ham jowl turkey. Ham pork tail turducken fatback buffalo. Short ribs frankfurter landjaeger, kevin tail biltong turkey. Prosciutto bacon turkey salami kevin doner. Ribeye chuck chislic, strip steak meatball tenderloin drumstick shoulder ball tip.</p>
            </details>

            <details>
              <summary>A on es destinaran els fons recollits?</summary>
              <p>Bacon ipsum dolor amet flank hamburger frankfurter turducken buffalo, alcatra rump. Boudin ham jowl turkey. Ham pork tail turducken fatback buffalo. Short ribs frankfurter landjaeger, kevin tail biltong turkey. Prosciutto bacon turkey salami kevin doner. Ribeye chuck chislic, strip steak meatball tenderloin drumstick shoulder ball tip.</p>
            </details>

            {/*box-shadow: 7px 5px 20px rgba(0, 0, 0, 0.25);*/}


          </RCol>
        </RRow>
        <RRow>
          <RCol>
            <Colophon>
              <RCol>
                <h3 className="text-xl lg:text-2xl">{t('projects:colophon.title')}</h3>
                <p>{t('projects:colophon.text')}</p>
              </RCol>
              <RCol className="flex flex-col">
                {/* https://discord.com/invite/BNqJQXwtqA */}
                <CtaButton>{t('projects:colophon.join.discord')}</CtaButton>
                <SecondaryButton>{t('projects:colophon.join.wiki')}</SecondaryButton>
              </RCol>
            </Colophon>
          </RCol>
        </RRow>
      </Block>
    </Page>
  );
};

export default Component;
