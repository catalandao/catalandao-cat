import { Provider, useOwners } from '@/lib/game';
import EthLogin, { useConnect } from '../EthLogin';
import Game from './Game';

const Section = () => {
  const { account } = useConnect();
  // check if its owner of a collection piece
  const owners = useOwners();
  const owner = owners.find(({ address }) => address === account);

  return (<div className='flex justify-center w-full flex-col'>
    <div className='flex flex-grow flex-row justify-end'>
      <EthLogin />
    </div>
    {account && (
      <div className='flex flex-row'>
        <Provider>
          <Game owner={owner} />
        </Provider>
      </div>
    )}
  </div>);
};

export default Section;
