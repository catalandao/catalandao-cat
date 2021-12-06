
import { useTranslation } from '@/lib/i18n';
import { fetcher } from '@/lib/loaders';
import type { ResponseItem } from '@/pages/api/tio';
import useSWR from 'swr';
import { Block, RCol, RRow } from './Layout';
import Title from './Title';

const getHeaderClasses = (name: string): string => {
  const baseClasses = ['text-xs', 'lg:text-lg'];
  if (name === 'num') {
    return [...baseClasses, 'hidden', 'lg:table-cell'].join(' ');
  }
  return baseClasses.join(' ');
};

const getCellClasses = (name: string): string => {
  const baseClasses = ['lg:text-lg', 'text-xs', 'p-1', 'border-yellow-400', 'truncate'];
  if (name === 'num') {
    return [...baseClasses, 'hidden', 'lg:table-cell'].join(' ');
  }
  if (name === 'address') {
    return [...baseClasses, 'max-w-40', 'lg:max-w-auto', 'tracking-tighter', 'proportional-nums'].join(' ');
  }
  return baseClasses.join(' ');
};

interface Props {
  rows: Record<string, string>[];
}
const Table = ({ rows }: Props) => {
  const { t } = useTranslation();
  const [single = {}] = rows;
  const headers = Object.keys(single);
  return (
    <>
      <table className="border w-full items-center bg-transparent w-full border-collapse">
        <thead>
          <tr className="text-center text-md bg-yellow-500 text-white">
            {headers.map((h, i) => <th key={i} className={getHeaderClasses(h)}>{t(`nft:ranking.table.headers.${h}`)}</th>)}
          </tr>
        </thead>
        <tbody className="lg:text-center max-h-128 lg:mx-auto overflow-y-scroll lg:overscroll-y-auto">
          {rows.map((row, i) => <tr className="even:bg-yellow-50 bg-yellow-100" key={i}>
            {headers.map((h) => <td title={row[h]} className={getCellClasses(h)} key={h}>{row[h]}</td>)}
          </tr>)}
        </tbody>
        {/* <tfoot></tfoot> ?? */}
      </table>
    </>
  );
};

interface Buyer {
  num: number;
  date: string;
  address: string,
  price: string;
}

const Ranking = () => {
  const { t } = useTranslation();
  const { data = [] } = useSWR('/api/tio', fetcher);
  const buyers = data.filter(({ isSold }: ResponseItem) => isSold).map(
    ({ id, winnerAddress, winningBid }: ResponseItem) => ({
      num: id,
      date: `${id}-12-2021`, // FIXME: localize
      address: winnerAddress,
      price: `${winningBid?.amount}${winningBid?.symbol}`,
    }) as Buyer,
  ).sort(({ num: n1 }: Buyer, { num: n2 }: Buyer) => {
    return n1 - n2;
  });
  return (
    <Block>
      <Title>{t('nft:ranking.title')}</Title>
      <RRow>
        <RCol>
          <Table rows={buyers} />
        </RCol>
      </RRow>
    </Block>
  );
};

export default Ranking;
