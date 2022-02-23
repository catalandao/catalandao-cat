import { dateOptions, useTranslation } from '@/lib/i18n';
import Link from '../Link';
import { CtaLink } from './buttons';
import Image from './Images';
import { Block, RCol, RRow } from './Layout';

interface Price {
  symbol: string;
  amount: number;
}
export interface ResponseItem {
  id: number;
  name: string;
  imageURL: string;
  price: Price;
  closingDate: string;
  isSold: boolean;
  winningBid?: Price;
  winnerAddress?: string;
}

interface Props {
  current: number;
}
const faqURL = "https://catalandao.notion.site/Preguntes-freq-ents-NFTs-d-Advent-e5a72e83bd5b49cc97790d9ad0188996";

const Listing = ({ current }: Props) => {
  const { t } = useTranslation();
  const imageURL = require(`@/public/images/tio_${current}.jpg`);
  return (
    <Block>
      <RRow>
        <RCol>
          <header>
            <span className="text-1xl text-[#777]">{t('nft:intro.date', { date: new Date(), formatParams: { date: dateOptions } })}</span>
            <h1 className="flex text-3xl lg:text-5xl my-8 mt-2">{t('nft:intro.label')}</h1>
          </header>
          <div className="block lg:hidden">
            <Image width="179" height="256" className="min-h-lg my-10" src={imageURL} />
          </div>
          <p className="max-w-2xl lg:min-h-80">
            {t('nft:intro.text')}
            <Link className="underline" newTab={true} href={faqURL}>{t('nft:intro.link')}</Link>.
          </p>
          <div className="my-10 flex flex-col">
            <CtaLink href="https://opensea.io/collection/catalandao">{t('nft:intro.cta')}</CtaLink>
            <div className="flex flex-row justify-around p-2 my-3">
              <Link href={faqURL} className="text-sm lg:text-sm hover:underline">
                <span className="mx-2">&#x2753;</span>{t('nft:intro.help.faq')}</Link>
            </div>
          </div>
        </RCol>
        <RCol className="hidden lg:flex">
          <Image width="179" height="256" className="mx-auto w-96" src={imageURL} />
        </RCol>
      </RRow>
    </Block>
  );
};

export default Listing;
